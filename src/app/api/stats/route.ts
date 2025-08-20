import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let total = 12345;
      let today = 1234;
      let base = 50;
      const series: number[] = Array.from({ length: 30 }, () => Math.max(0, Math.round(base + (Math.random() - 0.5) * 20)));

      function buildPayload() {
        const last = series[series.length - 1] ?? base;
        const next = Math.max(0, Math.round(last + (Math.random() - 0.4) * 15));
        series.push(next);
        if (series.length > 30) series.shift();

        // occasional error or change
        const now = new Date().toISOString();
        const errors = Math.random() < 0.2 ? [{ msg: "Error: 5xx response on /api/data", time: now }] : [];
        const changes = Math.random() < 0.1 ? [{ msg: "Config updated", time: now }] : [];

        // bump counts
        const increase = Math.max(0, Math.round((next - last) * (1 + Math.random())));
        total += increase;
        today += Math.max(0, Math.round(increase * Math.random()));

        return {
          visits: { total, today, last: next },
          series: [...series],
          errors,
          changes,
          ts: now,
        };
      }

      let closed = false;

      function send() {
        if (closed) return;
        const payload = buildPayload();
        const data = `data: ${JSON.stringify(payload)}\n\n`;
        controller.enqueue(encoder.encode(data));
      }

      // send initial payload
      send();
      const id = setInterval(send, 2000);

      // close on client disconnect
      const signal = (req as any).signal;
      if (signal) {
        signal.addEventListener("abort", () => {
          clearInterval(id);
          closed = true;
          try {
            controller.close();
          } catch (e) {}
        });
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

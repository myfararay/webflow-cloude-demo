"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-footer"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "grid-footer")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "column_left")}
            id={_utils.cx(
              _styles,
              "w-node-ca9d47bc-f1a3-086a-4e5f-fece159b0675-159b0672"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom", "margin-2-5")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "heading-style-h3")}
                tag="div"
              >
                {"For any collaborative projects "}
                <br />
                {"or inquiries feel free to reach out to me."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "connect_wrapper")}
              tag="div"
            >
              <_Builtin.Paragraph>
                {"Currently available "}
                <br />
                {"for freelance projects"}
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "button", "service-page")}
                button={false}
                block="inline"
                options={{
                  href: "https://t.me/myfararay",
                  target: "_blank",
                }}
              >
                <_Builtin.Paragraph>
                  {"Let's connect in telegram"}
                </_Builtin.Paragraph>
                <_Builtin.DOM
                  className={_utils.cx(_styles, "tab-heading_link-icon")}
                  tag="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13 9"
                >
                  <_Builtin.DOM
                    tag="path"
                    d="M12.3536 4.85355C12.5488 4.65829 12.5488 4.34171 12.3536 4.14645L9.17157 0.964466C8.97631 0.769204 8.65973 0.769204 8.46447 0.964466C8.2692 1.15973 8.2692 1.47631 8.46447 1.67157L11.2929 4.5L8.46447 7.32843C8.2692 7.52369 8.2692 7.84027 8.46447 8.03553C8.65973 8.2308 8.97631 8.2308 9.17157 8.03553L12.3536 4.85355ZM0 5H12V4H0V5Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "social_wrapper")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_links")}
              button={false}
              block=""
              options={{
                href: "https://dprofile.ru/g.far/cv",
                target: "_blank",
              }}
            >
              {"CV"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_links")}
              button={false}
              block=""
              options={{
                href: "https://t.me/myfararay",
                target: "_blank",
              }}
            >
              {"Telegram"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_links")}
              button={false}
              block=""
              options={{
                href: "https://www.behance.net/thefaraone",
                target: "_blank",
              }}
            >
              {"Behance"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_links")}
              button={false}
              block=""
              options={{
                href: "https://dprofile.ru/g.far",
                target: "_blank",
              }}
            >
              {"Dprofile"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "column_right-footer")}
            id={_utils.cx(
              _styles,
              "w-node-ca9d47bc-f1a3-086a-4e5f-fece159b068c-159b0672"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "heading-style-h1",
                "footer",
                "hide-mobile-portrait"
              )}
              tag="div"
              data-split-text=""
            >
              {"2024"}
              <br />
              {"g.far"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "heading-style-h1",
                "text-align-right",
                "mob_text-align-left",
                "footer"
              )}
              tag="div"
              data-split-text=""
            >
              {"start"}
              <br />
              {"a Project"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

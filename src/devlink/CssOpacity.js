"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CssOpacity.module.css";

export function CssOpacity({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "css-opacity-item")}
      value="%3Cstyle%3E%0A%0A%5Bdata-split-text%5D%20.char%20%7B%0A%20%20opacity%3A%200%3B%0A%20%20visibility%3A%20hidden%3B%0A%7D%0A%0A%5Bdata-anim-text%5D%20%7B%0A%20%20opacity%3A%200%20%0A%7D%0A%0A%5Bdata-item-opacity%5D%20%7B%0A%20%20opacity%3A%200%20%0A%7D%0A%0A%3C%2Fstyle%3E"
    />
  );
}

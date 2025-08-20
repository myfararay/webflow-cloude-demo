"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CssTransition.module.css";

export function CssTransition({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "css-transition")}
      value="%3Cstyle%3E%0A.transition_wrap%20%7B%0A%09display%3A%20flex%3B%0A%7D%0A%3C%2Fstyle%3E"
    />
  );
}

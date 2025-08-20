"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "navigation")} tag="nav">
      <_Builtin.Block className={_utils.cx(_styles, "nav-wrapper")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "padding-global",
            "padding-section-nav"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-nav")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "main_link")}
              button={false}
              data-barba-prevent=""
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "caption")}>
                {"[ grigorii f. ]"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "menu_btn")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "caption")}>
                {"[ menu ]"}
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "nav_hamburger_base")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "menu_wrap")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "menu_base")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "menu_contain")}
              tag="div"
              data-barba-prevent="all"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "menu_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"[home]"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "menu_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"[about]"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "menu_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"[works]"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "menu_link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"[services]"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "transition_wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "transition_column")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "transition_column")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "transition_column")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "transition_column")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "transition_column")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}

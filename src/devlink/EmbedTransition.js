"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EmbedTransition.module.css";

export function EmbedTransition({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "embed-trasition")}
      value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%2F%2F%20page%20load%0Alet%20tl%20%3D%20gsap.timeline()%3B%0Atl.to(%22.transition_column%22%2C%20%7ByPercent%3A%20-100%2C%20stagger%3A%200.2%7D)%0Atl.set(%22.transition_wrap%22%2C%20%7Bdisplay%3A%20%22none%22%7D)%0A%0A%2F%2F%20link%20click%0A%24(%22a%3Anot(.excluded-class)%22).on(%22click%22%2C%20function%20(e)%20%7B%0A%20%20let%20currentUrl%20%3D%20%24(this).attr(%22href%22)%3B%0A%20%20if%20(%24(this).prop(%22hostname%22)%20%3D%3D%3D%20window.location.host%20%26%26%20!currentUrl.includes(%22%23%22)%20%26%26%20%24(this).attr(%22target%22)%20!%3D%3D%20%22_blank%22)%20%7B%0A%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%2F%2F%20lenis.stop()%3B%0A%20%20%20%20let%20tl%20%3D%20gsap.timeline(%7B%20onComplete%3A%20()%20%3D%3E%20(window.location.href%20%3D%20currentUrl)%20%7D)%3B%0A%09tl.set(%22.transition_wrap%22%2C%20%7Bdisplay%3A%20%22flex%22%7D)%0A%20%20%20%20tl.fromTo(%22.transition_column%22%2C%20%7ByPercent%3A%20100%7D%2C%20%7ByPercent%3A%200%2C%20stagger%3A%200.2%7D)%0A%20%20%7D%0A%7D)%3B%0A%2F%2F%20On%20Back%20Button%20Tap%0Awindow.onpageshow%20%3D%20function%20(event)%20%7B%0A%20%20if%20(event.persisted)%20window.location.reload()%3B%0A%7D%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
    />
  );
}

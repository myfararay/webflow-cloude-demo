"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DragBtn.module.css";

export function DragBtn({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "drag")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "drag-btn")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "text-size-medium")}
          tag="div"
        >
          {"•"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-style-description")}
          tag="div"
        >
          {"drag"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "drag-btn-code")}
        value="%3Cstyle%3E%0A%20%20.drag-btn%20%7B%0A%20%20%20%20mix-blend-mode%3A%20hard-light%3B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20transform%3A%20translate(-50%25%2C%20-50%25)%20scale(1)%3B%0A%20%20%20%20z-index%3A%209999%3B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20visibility%3A%20hidden%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cscript%3E%0A%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20dragBtn%20%3D%20document.querySelector(%22.drag-btn%22)%3B%0A%20%20%20%20const%20container%20%3D%20document.querySelector(%22.container-works%22)%3B%0A%20%20%20%20const%20slider%20%3D%20document.querySelector(%22.slider_wrapper%22)%3B%0A%0A%20%20%20%20let%20pos%20%3D%20%7B%20x%3A%20window.innerWidth%20%2F%202%2C%20y%3A%20window.innerHeight%20%2F%202%20%7D%3B%0A%20%20%20%20let%20mouse%20%3D%20%7B%20x%3A%20pos.x%2C%20y%3A%20pos.y%20%7D%3B%0A%0A%20%20%20%20const%20setX%20%3D%20gsap.quickSetter(dragBtn%2C%20%22x%22%2C%20%22px%22)%3B%0A%20%20%20%20const%20setY%20%3D%20gsap.quickSetter(dragBtn%2C%20%22y%22%2C%20%22px%22)%3B%0A%0A%20%20%20%20%2F%2F%20%D0%98%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%20%D1%81%D0%BA%D1%80%D1%8B%D1%82%0A%20%20%20%20gsap.set(dragBtn%2C%20%7B%20autoAlpha%3A%200%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%0A%20%20%20%20window.addEventListener(%22mousemove%22%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20mouse.x%20%3D%20e.clientX%3B%0A%20%20%20%20%20%20mouse.y%20%3D%20e.clientY%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20gsap.ticker.add(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20pos.x%20%2B%3D%20(mouse.x%20-%20pos.x)%20*%200.15%3B%0A%20%20%20%20%20%20pos.y%20%2B%3D%20(mouse.y%20-%20pos.y)%20*%200.15%3B%0A%0A%20%20%20%20%20%20setX(pos.x)%3B%0A%20%20%20%20%20%20setY(pos.y)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20%D0%9F%D0%BE%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%2F%D0%B8%D1%81%D1%87%D0%B5%D0%B7%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B7%D0%BE%D0%BD%D0%B5%20container%0A%20%20%20%20container.addEventListener(%22mouseenter%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20gsap.to(dragBtn%2C%20%7B%0A%20%20%20%20%20%20%20%20autoAlpha%3A%201%2C%0A%20%20%20%20%20%20%20%20duration%3A%200.3%2C%0A%20%20%20%20%20%20%20%20ease%3A%20%22power2.out%22%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20container.addEventListener(%22mouseleave%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20gsap.to(dragBtn%2C%20%7B%0A%20%20%20%20%20%20%20%20autoAlpha%3A%200%2C%0A%20%20%20%20%20%20%20%20duration%3A%200.3%2C%0A%20%20%20%20%20%20%20%20ease%3A%20%22power2.out%22%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20%D0%A3%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B8%20%D0%BD%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%BD%D0%B0%20slider_wrapper%20(%D1%81%20%D0%B7%D0%B0%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%BE%D0%B9%20%D0%BF%D1%80%D0%B8%20%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%B5)%0A%20%20%20%20let%20resetTimeout%3B%0A%0A%20%20%20%20slider.addEventListener(%22pointerenter%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20clearTimeout(resetTimeout)%3B%20%2F%2F%20%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D0%B0%20%D1%81%D0%B1%D1%80%D0%BE%D1%81%D0%B0%0A%0A%20%20%20%20%20%20gsap.to(dragBtn%2C%20%7B%0A%20%20%20%20%20%20%20%20width%3A%20%225rem%22%2C%0A%20%20%20%20%20%20%20%20height%3A%20%222rem%22%2C%0A%20%20%20%20%20%20%20%20scale%3A%201.1%2C%0A%20%20%20%20%20%20%20%20duration%3A%200.3%2C%0A%20%20%20%20%20%20%20%20ease%3A%20%22power2.out%22%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20slider.addEventListener(%22pointerleave%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20resetTimeout%20%3D%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20gsap.to(dragBtn%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20%220.5rem%22%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20%220.5rem%22%2C%0A%20%20%20%20%20%20%20%20%20%20scale%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20duration%3A%200.3%2C%0A%20%20%20%20%20%20%20%20%20%20ease%3A%20%22power2.out%22%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%20200)%3B%20%2F%2F%20%D0%B7%D0%B0%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%20%D1%81%D0%B1%D1%80%D0%BE%D1%81%D0%BE%D0%BC%20(%D0%B2%20%D0%BC%D1%81)%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%0A%3C%2Fscript%3E%0A"
      />
    </_Component>
  );
}

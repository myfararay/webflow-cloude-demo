"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./YaMetrika.module.css";

export function YaMetrika({ as: _Component = _Builtin.HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "ya-m")}
      value="%3C!--%20Yandex.Metrika%20counter%20--%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%20%20%20%20(function(m%2Ce%2Ct%2Cr%2Ci%2Ck%2Ca)%7B%0A%20%20%20%20%20%20%20%20m%5Bi%5D%3Dm%5Bi%5D%7C%7Cfunction()%7B(m%5Bi%5D.a%3Dm%5Bi%5D.a%7C%7C%5B%5D).push(arguments)%7D%3B%0A%20%20%20%20%20%20%20%20m%5Bi%5D.l%3D1*new%20Date()%3B%0A%20%20%20%20%20%20%20%20for%20(var%20j%20%3D%200%3B%20j%20%3C%20document.scripts.length%3B%20j%2B%2B)%20%7Bif%20(document.scripts%5Bj%5D.src%20%3D%3D%3D%20r)%20%7B%20return%3B%20%7D%7D%0A%20%20%20%20%20%20%20%20k%3De.createElement(t)%2Ca%3De.getElementsByTagName(t)%5B0%5D%2Ck.async%3D1%2Ck.src%3Dr%2Ca.parentNode.insertBefore(k%2Ca)%0A%20%20%20%20%7D)(window%2C%20document%2C'script'%2C'https%3A%2F%2Fmc.yandex.ru%2Fmetrika%2Ftag.js%3Fid%3D103495123'%2C%20'ym')%3B%0A%0A%20%20%20%20ym(103495123%2C%20'init'%2C%20%7Bssr%3Atrue%2C%20webvisor%3Atrue%2C%20clickmap%3Atrue%2C%20ecommerce%3A%22dataLayer%22%2C%20accurateTrackBounce%3Atrue%2C%20trackLinks%3Atrue%7D)%3B%0A%3C%2Fscript%3E%0A%3Cnoscript%3E%3Cdiv%3E%3Cimg%20src%3D%22https%3A%2F%2Fmc.yandex.ru%2Fwatch%2F103495123%22%20style%3D%22position%3Aabsolute%3B%20left%3A-9999px%3B%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fnoscript%3E%0A%3C!--%20%2FYandex.Metrika%20counter%20--%3E"
    />
  );
}

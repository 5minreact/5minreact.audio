import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(bodyComponent);
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([sheet.getStyleElement()]);
};
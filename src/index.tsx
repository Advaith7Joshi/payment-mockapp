import { App } from "./App.js";
import { root } from "@lynx-js/react";

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}

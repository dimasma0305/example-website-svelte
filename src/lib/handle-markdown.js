import hljs from "highlight.js";
import { marked } from "marked";

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },
});

export async function markfile(file) {
  const md = await fetch(file);
  return marked(await md.text());
}

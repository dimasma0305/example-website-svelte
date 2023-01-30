import showdown from "showdown";
import hljs from "highlight.js";


showdown.extension("highlight", function () {
  return [{
    type: "output",
    filter: function (text) {
      var left = "<pre><code\\b[^>]*>",
        right = "</code></pre>",
        flags = "g";

      var replacement = function (wholeMatch, match, left, right) {
        var lang = (left.match(/class="([^ "]+)/) || [])[1];
        left = left.slice(0, 18) + "hljs " + left.slice(18);

        if (lang && hljs.getLanguage(lang)) {
          return left + hljs.highlight(lang, match).value + right;
        } else {
          return wholeMatch;
        }
      };

      //@ts-ignore
      return showdown.helper.replaceRecursiveRegExp(
        text,
        replacement,
        left,
        right,
        flags,
      );
    },
  }];
});

const converter = new showdown.Converter({ extensions: ["highlight"], tables: true });

/**
 * 
 * @param {string} path 
 * @returns 
 */
export async function convert(path) {
  const request = await fetch(path);
  const body = await request.text()
  return converter.makeHtml(body)
}

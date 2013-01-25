var head = document.head;
var style = document.createElement("style");
var rules = document.createTextNode("a {text-decoration:underline !important;}");

style.type = "text/css";
style.id = "__link-highlighter";
if(style.styleSheet) {
    style.styleSheet.cssText = rules.nodeValue;
} else { 
  style.appendChild(rules);
}
head.appendChild(style);

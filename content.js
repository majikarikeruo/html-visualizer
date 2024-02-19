chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.visualize) {
    visualizeTags(document.body, 0);
  } else {
    removeVisualization(document.body);
  }
});

function visualizeTags(element, depth) {
  if (element.nodeType === Node.ELEMENT_NODE) {
    element.style.backgroundColor = getBackgroundColor(depth);
    element.style.outline = "1px solid rgba(0, 0, 0, 0.3)";
  }
  Array.from(element.children).forEach((child) =>
    visualizeTags(child, depth + 1)
  );
}

function removeVisualization(element) {
  if (element.nodeType === Node.ELEMENT_NODE) {
    element.style.backgroundColor = "";
    element.style.outline = "";
  }
  Array.from(element.children).forEach(removeVisualization);
}

function getBackgroundColor(depth) {
  // 階層に応じて色を決定
  const colors = [
    "rgba(255, 204, 204, 0.3)",
    "rgba(255, 238, 204, 0.4)",
    "rgba(204, 255, 204, 0.5)",
    "rgba(204, 255, 255, 0.6)",
    "rgba(204, 204, 255, 0.7)",
    "rgba(255, 204, 255, 0.8)",
  ];
  return colors[depth % colors.length];
}

document
  .querySelector("#toggleVisualizer")
  .addEventListener("change", function (event) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { visualize: event.target.checked });
    });
  });

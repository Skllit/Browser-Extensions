chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'openNotepad') {
    chrome.action.openPopup();
  }
});
chrome.commands.onCommand.addListener(function(command) {
  if (command === 'openExtension') {
    chrome.action.openPopup();
  }
});






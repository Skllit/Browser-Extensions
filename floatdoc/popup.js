// Load the saved note when popup is opened
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['note'], function(result) {
    document.getElementById('note').value = result.note || '';
  });
});

// Save the note when save button is clicked
document.getElementById('saveButton').addEventListener('click', function() {
  var noteContent = document.getElementById('note').value;
  chrome.storage.local.set({ 'note': noteContent });
});

// Load the saved note when popup is opened
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['note'], function(result) {
    document.getElementById('note').value = result.note || '';
  });
});

// Save the note when save button is clicked
document.getElementById('saveButton').addEventListener('click', function() {
  var noteContent = document.getElementById('note').value;
  chrome.storage.local.set({ 'note': noteContent });
});

// Clear the note when clear button is clicked
document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('note').value = '';
});

// Save the note to a text file when Ctrl + D is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'm') {
    var noteContent = document.getElementById('note').value;
    var blob = new Blob([noteContent], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    chrome.downloads.download({
      url: url,
      filename: 'note.txt'
    });
  }
});
// Load the saved note when popup is opened
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['note'], function(result) {
    document.getElementById('note').value = result.note || '';
  });
});

// Save the note as the user types
document.getElementById('note').addEventListener('input', function() {
  var noteContent = document.getElementById('note').value;
  chrome.storage.local.set({ 'note': noteContent });
});

// Clear the note when clear button is clicked
document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('note').value = '';
  chrome.storage.local.remove('note');
});


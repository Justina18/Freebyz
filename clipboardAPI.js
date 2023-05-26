const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', function() {
  const text = this.dataset.copyText; // Get the text to be copied from the data attribute
  navigator.clipboard.writeText(text); // Use the Clipboard API to write the text to the clipboard
  console.log('Text copied: ' + text); // Optional: log the copied text
});

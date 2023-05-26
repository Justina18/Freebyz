const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', function() {
  const text = this.dataset.copyText; // Get the text to be copied from the data attribute
  navigator.clipboard.writeText(text); // Use the Clipboard API to write the text to the clipboard
  console.log('Text copied: ' + text); // Optional: log the copied text
});


const input = document.getElementById('myInput');
const error = document.getElementById('error');

input.addEventListener('blur', function() {
  if (input.value === '') {
    error.textContent = 'Please enter a value.';
  }
});

input.addEventListener('focus', function() {
  error.textContent = '';
});

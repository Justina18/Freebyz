const toggleIcon1 = document.getElementById('toggleIcon1');
const toggleIcon2 = document.getElementById('toggleIcon2');
const dropdownContent = document.getElementById('dropdownContent');

toggleIcon1.addEventListener('click', function() {
  toggleIcon1.style.display = 'none';
  toggleIcon2.style.display = 'inline-block';
  dropdownContent.style.display = 'block';
});

toggleIcon2.addEventListener('click', function() {
  toggleIcon2.style.display = 'none';
  toggleIcon1.style.display = 'inline-block';
  dropdownContent.style.display = 'none';
});

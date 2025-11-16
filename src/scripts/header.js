// Dynamically load the header content
window.addEventListener('DOMContentLoaded', () => {
    fetch('./header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
});
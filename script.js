// const imageInput = document.getElementById('imageInput');
// const preview = document.getElementById('preview');

// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');
// const navLinksLi = document.querySelectorAll('.nav-links li');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('nav-active');
//   navLinksLi.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = '';
//     } else {
//       link.style.animation = `navLinkFade 0.5s ease forwards


      function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function() {
          const preview = document.getElementById("preview");
          preview.src = reader.result;
          preview.parentElement.style.height = "auto";
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      
      function removeImage() {
        const preview = document.getElementById("preview");
        preview.src = "";
        preview.parentElement.style.height = "0";
      }
      
      function submitImage() {
        const preview = document.getElementById("preview");
        preview.src = "";
        preview.parentElement.style.height = "0";
      }
      
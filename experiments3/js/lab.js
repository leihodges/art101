function uploadPhoto() {
  const fileInput = document.getElementById('fileInput');
  const gallery = document.getElementById('gallery');

  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.startsWith('image/')) {
          const reader = new FileReader();

          reader.onload = function (e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              gallery.appendChild(img);
          };

          reader.readAsDataURL(file);
      } else {
          alert('Please select an image file.');
      }
  }

  // Clear the file input for better user experience
  fileInput.value = '';
}
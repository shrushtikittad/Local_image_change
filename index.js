let count = 0;
function changeImage() {
      count++;
      if (count == 1) {
            document.getElementById('image').src = 'img1.jpg';
}
      else if (count == 2) {
            document.getElementById('image').src = 'img2.jpg';
}
      else if (count == 3) {
            document.getElementById('image').src = 'img3.jpg';
}
      else if (count == 4) {
            document.getElementById('image').src = 'img4.jpg';
            count = 0;
}
      
}
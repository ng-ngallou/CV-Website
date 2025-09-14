// List of images
const imageList = [
    "cv_photo_niki.jpeg",
    "PXL_20250115_150645319.MP.jpg",
    "PXL_20240930_172855177.jpg",
    "PXL_20250115_150659651.jpg",
    "IPAC.jpg",
    "PXL_20250114_091807159.MP.jpg",
    "20230215_190847.jpg",
    "20231213_124943.jpg",
];

const imageFolder = "images/main_photos/";
let currentIndex = 0;

const img = document.getElementById("cv_photo");

img.addEventListener("click", () => {
  // Flip to next image in list
  currentIndex = (currentIndex + 1) % imageList.length;
  img.src = imageFolder + imageList[currentIndex];
});

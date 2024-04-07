const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

const images = [
  {
    url: "./assets/image1.jpg",
    alt: "Walkway",
  },
  {
    url: "./assets/image2.jpg",
    alt: "Building",
  },
  {
    url: "./assets/image3.jpg",
    alt: "Lanterns",
  },
  {
    url: "./assets/image4.jpg",
    alt: "Town",
  },
  {
    url: "./assets/image5.jpg",
    alt: "Temple",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
      createBigImage(image);
    });
  });
}

function createBigImage(image) {
  displayImage.innerHTML = "";
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  displayImage.appendChild(bigImg);
}

function showNextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  createBigImage(images[imageIndex]);
}

function showPreviousImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  createBigImage(images[imageIndex]);
}

document
  .getElementById("prev-btn")
  .addEventListener("click", showPreviousImage);
document.getElementById("next-btn").addEventListener("click", showNextImage);

createThumbnails();
createBigImage(images[0]);

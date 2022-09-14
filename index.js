const cardElement = document.getElementById("card-wrapper");
const card = cardElement.getBoundingClientRect();
const cardWidth = card.width;

"load resize maximize minimize orientationchange"
  .split(" ")
  .forEach((event) => {
    window.addEventListener(event, () => {
      const sizerElement = document.getElementById("card-sizer");
      const sizer = sizerElement.getBoundingClientRect();
      const newWidth = sizer.width;
      cardElement.style.transform = `scale( ${newWidth / cardWidth} )`;
    });
  });

let currentFrame = 0;
setInterval(() => {
  cardElement.querySelector(
    `.valid-until span[data-frame="${1 - (currentFrame % 2)}"]`
  ).style.opacity = 0;
  cardElement.querySelector(
    `.valid-until span[data-frame="${currentFrame % 2}"]`
  ).style.opacity = 1;

  currentFrame++;
}, 1000);

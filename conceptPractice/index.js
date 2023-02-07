const imageNumber = document.getElementById("image-selector");

const buttonHighlight = document.querySelector(".button__highlight");
const buttonClear = document.querySelector('.button__clear');

buttonHighlight.addEventListener("click", () => {
  //to discuss - how to use max attr
  /* 
  const maxImageNumber = imageNumber.attributes.max.value; */
  if (imageNumber.value)
  {
    const imageToHighlight = document.querySelector(`[data-id='${imageNumber.value}']`);
    imageToHighlight.classList.add('animated');
  }
});

buttonClear.addEventListener('click', ()=>{
  const imagesList = document.querySelectorAll('img');
  imagesList.forEach((node) => {
    node.classList.remove('animated');
  })
})


const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.open-modal');



openModalButton.addEventListener('click', () => {
    console.log(overlay.style);
    overlay.style.display = "flex";
})

closeModalButton.addEventListener('click', () =>{
    overlay.style.display = "none";
});
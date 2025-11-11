const popupContainer = document.querySelector('.popup-container')
const popupOpenBtn = document.querySelector('.popup-open-btn');
const popupCloseBtn = document.querySelector('.popup-close-btn');
const popup = document.querySelector('.popup');



popupOpenBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popupContainer.classList.add('popup-open');
});

popupCloseBtn.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open');
})

window.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open');
})
popup.addEventListener('click', (e) => {
    e.stopPropagation();
})
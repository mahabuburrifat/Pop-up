const popupContainer = document.querySelector('.popup-container')
const popupOpenBtn = document.querySelector('.popup-open-btn');
const popupCloseBtn = document.querySelector('.popup-close-btn');



popupOpenBtn.addEventListener('click', () => {
    popupContainer.classList.add('popup-open');
});

popupCloseBtn.addEventListener('click', () => {
    popupContainer.classList.remove('popup-open');
})

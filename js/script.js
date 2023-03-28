const itemsCount = 6;
const apiKey = '2tYsoxOURyXc9UcVQb7n3R8O12OXTKJTzDo_IoYyRNI';
const collectionId = 'CpdiISY2JKQ'
const carousel = document.querySelector("#carousel");
const navPrev = document.querySelector(".nav-prev");
const navNext = document.querySelector(".nav-next");
let carouselContent = '';
//https://api.unsplash.com/collections/CpdiISY2JKQ/photos?client_id=2tYsoxOURyXc9UcVQb7n3R8O12OXTKJTzDo_IoYyRNI&per_page=6
fetch(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=${apiKey}&per_page=${itemsCount}`)
    .then(response => response.json())
    .then(json => renderSlides(json));

function renderCarousel(){
    carousel.setAttribute('style',`width: ${100 * itemsCount}%; left:0;` )
}
function renderSlides(json){
    renderCarousel();
    json.forEach(function callback(item, i){
        carouselContent +=
            `<div class="item item-${i}" style="background-image: url('${item.urls.regular}')">
                    <div class="item-copy">
                        <div class="description">${(item.description ? item.description : 'Nice picture')}</div>
                        <div class="username">by ${(item.user.username ? item.user.username : 'someone')}</div>
                    </div>
                </div>`;
        carousel.innerHTML = carouselContent;
    })
}

navPrev.addEventListener('click',scrollSliderPrev);
navNext.addEventListener('click',scrollSliderNext);

function scrollSliderPrev() {
    scrollSlider('prev');
}
function scrollSliderNext() {
    scrollSlider('next');
}

function scrollSlider(direction){
    function removeForbiddenCharacters(input) {
        const forbiddenChars = ['%','px',]
        for (let char of forbiddenChars) {
            input = input.split(char).join('');
        }
        return input
    }
    let positionLeft = removeForbiddenCharacters(carousel.style.left);
    let newPositionLeft = 0;
    if (direction === 'prev'){
        if (positionLeft >= 0){
            newPositionLeft = (itemsCount-1) * (-100) + '%';
        }
        else {
            newPositionLeft = (Number(positionLeft) + 100)+'%';
        }
    }
    else if (direction === 'next'){
        if (positionLeft <= (itemsCount-1) * (-100)){
        }
        else {
            newPositionLeft = (Number(positionLeft) - 100)+'%';
        }
    }
    carousel.style.left = newPositionLeft;
}

let touchstartX = 0;
let touchendX = 0;
function checkDirection() {
    let difX = touchstartX - touchendX;
    if (Math.abs(difX) > 10) {
        if (touchendX < touchstartX) {scrollSliderNext();}
        if (touchendX > touchstartX) {scrollSliderPrev();}
    }
}
carousel.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});
carousel.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});
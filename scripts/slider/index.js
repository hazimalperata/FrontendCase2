const swiper = new Swiper('#companySlider', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3.5,
    slidesPerGroup: 1,
    centeredSlides: true,
    speed: 1500,
    spaceBetween: 24,
    navigation: {
        nextEl: '#btnNext',
        prevEl: '#btnPrev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 1.5,
        }
    },
});

swiper.init();


//region HAMBURGER MENU
const hamburgerMenuOpenButton = document.getElementById("hamburgerMenuOpen");
const hamburgerMenuCloseButton = document.getElementById("hamburgerMenuClose");


const hamburgerMenu = document.getElementById('hamburgerMenu');
hamburgerMenuOpenButton.addEventListener("click", () => hamburgerMenuHandler(true));
hamburgerMenuCloseButton.addEventListener("click", () => hamburgerMenuHandler(false));

function hamburgerMenuHandler(isOpen) {
    if (isOpen) {
        hamburgerMenu.classList.replace('translate-x-full', 'translate-x-0');
        document.body.style.overflowY = 'hidden';
    } else {
        hamburgerMenu.classList.replace('translate-x-0', 'translate-x-full');
        document.body.style.overflowY = 'unset'
    }
}

//endregion

//region MAP POINT
let currentActiveMapPoint;

const mapPoints = document.getElementsByClassName('mapPoint');
const pointerCloserDom = document.getElementById("pointerCloser");

for (const mapPoint of mapPoints) {
    mapPoint.addEventListener('click', mapPointHandler);
}

function outerClick(event) {
    if (currentActiveMapPoint) {
        const infoBody = currentActiveMapPoint.getElementsByTagName('div');
        const icon = currentActiveMapPoint.getElementsByTagName('svg');
        icon.item(1).style.fill = '';
        infoBody.item(0).classList.replace('block', 'hidden');
        currentActiveMapPoint = null;
        event.target.classList.replace('block', 'hidden');
    }
}

pointerCloserDom.addEventListener("click", outerClick);

function mapPointHandler(event) {
    let point = event.target.parentElement;
    let icon = event.target;

    if (event.target.nodeName !== "svg") {
        point = point.parentElement;
        icon = icon.parentElement;
    }
    const closer = document.getElementById('pointerCloser');
    const infoBody = point.getElementsByTagName('div');

    if (currentActiveMapPoint !== point) {
        icon.style.fill = '#D9F99D';
        infoBody.item(0).classList.replace('hidden', 'block');
        currentActiveMapPoint = point;
        closer.classList.replace('hidden', 'block');
    } else {
        icon.style.fill = '';
        infoBody.item(0).classList.replace('block', 'hidden');
        currentActiveMapPoint = null;
        closer.classList.replace('block', 'hidden');
    }

    for (const mapPoint of mapPoints) {
        if (mapPoint !== icon) {
            mapPoint.style.fill = '';
            const infoBody = mapPoint.parentElement.getElementsByTagName('div');
            infoBody.item(0).classList.replace('block', 'hidden');
        }
    }
}

//endregion

//region Video Hover
const videoHoverElement = document.getElementById('hoverVideo');
const playButtonElement = document.getElementById('playButton');

function playVideo(event) {
    playButtonElement.classList.add('hidden');
    event.target.getElementsByTagName('video').item(0).play();
}

function stopVideo(event) {
    playButtonElement.classList.remove('hidden');
    const video = event.target.getElementsByTagName('video').item(0);
    video.pause();
    video.currentTime = 0;
}

videoHoverElement.addEventListener('mouseenter', playVideo)
videoHoverElement.addEventListener('mouseleave', stopVideo)
//endregion

//region Grow Your Collection List Buttons

const buttonList = document.getElementsByClassName('filled-l');

let activeIndex = 0;

function buttonClickHandle(event, index) {
    buttonList[activeIndex].classList.remove('active');
    event.currentTarget.classList.add('active');
    activeIndex = index;
}

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', e => buttonClickHandle(e, i));
}

//endregion

//region COUNTER
const shoesCounter = document.getElementById('shoesCount')
const speed = 800;

const animate = () => {
    const value = +shoesCounter.getAttribute('datasrc');
    const data = +shoesCounter.innerText.replaceAll(",", "");

    const time = value / speed;
    if (data < value) {
        shoesCounter.innerText = Math.ceil(data + time).toLocaleString().replaceAll(".", ",");
        setTimeout(animate, 1);
    } else {
        shoesCounter.innerText = value.toLocaleString().replaceAll(".", ",");
    }
}
window.addEventListener("scroll", () => {
    const shoesCounter = document.getElementById('shoesCount');
    const height = window.innerHeight;
    const topDistance = shoesCounter.getBoundingClientRect().top;
    // DECREASING 650 MEANS ANIMATE COUNTER EARLIER
    if (topDistance < (height * 650) / 875) {
        animate();
    }
});
//endregion

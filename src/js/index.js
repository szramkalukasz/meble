import '../scss/main.scss';



const slideList = [{
        img: "src/assets/img/kitchen-ga4c1e6c4b_1280.jpg",
        text: 'Kuchnie na wymiar'
    },
    {
        img: "src/assets/img/wardrobe-g711ff2ee2_1280.jpg",
        text: 'Zabudowy na wymiar'
    },
    {
        img: "src/assets/img/bathroom-g09b3fa509_1280.jpg",
        text: 'Łazienki na wymiar'
    }
];

const image = document.querySelector('img.header__slider--js');
const h1 = document.querySelector('h1.header__title--js');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 4000;
let active = 0;

//Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
setInterval(changeSlide, time)
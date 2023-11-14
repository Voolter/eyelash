const { gsap } = window;
const squares = document.querySelectorAll('.square');
gsap.set(squares, { x: -100 });
function animateSquares() {
    gsap.to(squares, {
        x: 0,
        duration: 0.6,
        stagger: 0.2,
    });
}
function resetSquares() {
    gsap.to(squares, {
        x: -100,
        duration: 0.6,
        stagger: 0.2,
    });
}

const image = document.querySelector('.block__img');
window.addEventListener('scroll', () => {
    const blockTop = image.getBoundingClientRect().top;
    const blockHeight = image.offsetHeight;
    let opacity = 0.4 - (0.5 * (blockTop / blockHeight));
    opacity = Math.max(0.4, opacity);
    image.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(2)})`;


    if (window.scrollY > 0) {
        animateSquares();
    } else {
        resetSquares();
    }
});


const header__main_mobile = document.querySelector('.header__main_mobile');
const burgermenu = document.querySelector('.burger__blockmenu');
const header__main = document.querySelector('.header__main');
const price = document.querySelector('.price');

function closeMenu() {
    burgermenu.classList.remove('active');
    header__main_mobile.style.display = "none";
}

window.addEventListener("resize", () => {
    closeMenu();
});
let pricemargin = -140;
if (window.innerWidth < 470) {
    pricemargin = -85;
}


const burger = (event) => {
    const duration = 0.4;
    const ease = 'power2.inOut';

    if (event.target.closest('.header__start')) {
        setTimeout(() => {
            closeMenu();
        }, 200)
        gsap.to(window, {
            duration,
            pageYOffset: 0,
            ease,
            onUpdate: () => {
                window.scroll(0, window.pageYOffset);
            }
        });
    }
    else if (event.target.closest('.header__price')) {
        setTimeout(() => {
            closeMenu();
        }, 200)
        gsap.to(window, {
            duration,
            pageYOffset: pricemargin + price.offsetTop,
            ease,
            onUpdate: () => {
                window.scroll(0, window.pageYOffset);
            }
        });
    }
    else if (event.target.closest('.burgers')) {
        header__main_mobile.style.display = "block";
        burgermenu.classList.add('active');
        if (event.target.closest('.x')) {
            closeMenu();
        }
    }
    else {
        closeMenu();
    }
};
document.body.addEventListener("click", event => {
    burger(event);
});

const img = new Image();
img.src = './img/main.webp';
img.onload = function () {
    image.style.backgroundImage = 'url(' + img.src + ')';
};
const content = document.querySelector(".content");
window.onload = function () {
    document.querySelector('.preloader__content').style.display = 'none';
    content.removeAttribute("hidden");
};
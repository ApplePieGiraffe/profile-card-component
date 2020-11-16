const container = document.querySelector('.container');
const card = document.querySelector('.card');
const text = document.querySelector('.card__middle__title');

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    text.style.transform = 'scale(1.2)';
});

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .5s ease';
    card.style.transform = 'rotate(0)';
    text.style.transform = 'scale(1)';
});
const path = anime.path('#path');
let valor = 0;
const pasosPruebaElement = document.querySelector('#pasosPrueba');
pasosPruebaElement.addEventListener('input', (event) => {
    valor = event.target.value;
});
const timeline = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 1000,
  complete: () => {
    setInterval(() => {
        anime({
            targets: '.leaf',
            rotate: valor,
            duration: 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
          });
    }, 1000);
    anime({
      targets: '.petals',
      scale: 1.05,
      duration: 6000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });
  }
});

timeline.add({
  targets: '.stem',
  scale: [0, 1],
})

timeline.add({
  targets: '.leaf',
  rotate: [0, 45],
})
timeline.add({
  targets: '.petals',
  scale: [0, 1],
}, '-=1000');

timeline.add({
  targets: '#bee',
  opacity: [0, 1],
}, '-=750');


setInterval(() => {
  anime({
    targets: '#bee',
    translateX: valor,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeInOutQuad'
  });
})
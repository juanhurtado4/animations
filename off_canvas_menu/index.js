const main = () => {
  const openMenuBtn = document.querySelector('.fa-bars');
  const closeMenuBtn = document.querySelector('.fa-times');

  openMenuBtn.addEventListener('click', (e) => {
    document.querySelector('.menu').classList.add('animate-expand');
    document.querySelector('.menu').classList.remove('animate-collapse');
  });

  closeMenuBtn.addEventListener('click', (e) => {
    document.querySelector('.menu').classList.add('animate-collapse');
    document.querySelector('.menu').classList.remove('animate-expand');
  });
};

main();

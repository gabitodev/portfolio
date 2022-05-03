const skillsSection = document.querySelector('#skills');
const projectsSection = document.querySelector('#projects');
const firstTitleLetters = document.querySelectorAll('#first-title span');
const secondTitleLetters = document.querySelectorAll('#second-title span');

firstTitleLetters.forEach((span, index) => {
  span.setAttribute('style', `animation-delay: ${0.05 + (index / 20)}s`);
});

secondTitleLetters.forEach((span, index) => {
  span.setAttribute('style', `animation-delay: ${0.65 + (index / 20)}s`);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up-animation');
    }
  });
}, { threshold: 0.4 });

observer.observe(skillsSection);
observer.observe(projectsSection);
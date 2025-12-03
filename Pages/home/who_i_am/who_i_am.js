console.log('Who I Am section loaded');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // only once
    }
  });
}, {
  threshold: 0.15 
});

document.querySelectorAll('#whoiam .reveal').forEach(el => {
  revealObserver.observe(el);
});

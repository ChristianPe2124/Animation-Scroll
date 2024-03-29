let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

/* 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> { 
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } else {
            entry.target.classList.remove('show-animate');
        }
    });
});

const hiddenElements = document.querySelectorAll('section');
hiddenElements.forEach((el) => observer.observe(el));

 */
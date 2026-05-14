const elements = document.querySelectorAll('.name');
const pos = document.querySelector('.positions');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Combine NodeList and single element into an array
[...elements, pos].forEach(el => {
  if (el) observer.observe(el); // Ensure the element exists
});


window.addEventListener('scroll', function () {
  const section = document.getElementById('myImg');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('para');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('skills');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('education');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

const skills = document.querySelector(".skills");

let scrollAmount = 1; // speed (px per tick)

function autoScroll() {
  skills.scrollLeft += scrollAmount;

  // If reached end → reverse
  if (skills.scrollLeft >= skills.scrollWidth - skills.clientWidth) {
    scrollAmount = -1;
  }

  // If reached start → forward again
  if (skills.scrollLeft <= 0) {
    scrollAmount = 1;
  }
}

setInterval(autoScroll, 20); // adjust speed by changing interval or scrollAmount

window.addEventListener('scroll', function () {
  const section = document.getElementById('expiriance');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('expiriance');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('language');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('mal');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('eng');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('hin');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});

window.addEventListener('scroll', function () {
  const section = document.getElementById('works');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    section.classList.add('show');
  }
});



useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("footer1");

    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      section.classList.add("show");
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


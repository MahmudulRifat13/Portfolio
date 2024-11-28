const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 10);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}

// Update page title based on current section
function updatePageTitle() {
    var sections = document.querySelectorAll('section');
    var pageTitle = document.getElementById('page-title');
    var viewportHeight = window.innerHeight;

    sections.forEach(function(section) {
        var sectionId = section.getAttribute('id');
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionBottom = sectionTop + sectionHeight;
        var scrollPos = window.pageYOffset;

        if (scrollPos < sectionBottom && scrollPos + viewportHeight > sectionTop) {
            if (sectionId === 'home') {
                pageTitle.textContent = 'Rifat - Web Development Portfolio';
            } else {
                pageTitle.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1) + " - Web Development Portfolio";
            }
        }
    });
}

// Listen for scroll event to update page title
window.addEventListener('scroll', updatePageTitle);
window.addEventListener('resize', updatePageTitle);



var typed = new Typed('#about-typed-text', {
    strings: ['Web Developer!', 'Data Analyst!', '','Researcher!', 'Tech Enthusiast!', 'Eager Learner!','Traveller!' ],
    typeSpeed: 50,
    loop: true,
    hideCursor: true,
      onComplete: function() {
    typed.cursor.remove();
  }
  });

var typed = new Typed('#home-text-repeat', {
    strings: ['A Web Developer!', 'A Data Analyst!', 'A Researcher!', 'A Explorer!'],
    typeSpeed: 50,
    loop: true,
    hideCursor: true,
      onComplete: function() {
    typed.cursor.remove();
  }
  });
  

  

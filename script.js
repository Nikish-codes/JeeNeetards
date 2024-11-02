// Preloader
window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentNode;
    faqItem.classList.toggle('active');

    // Close other FAQ items
    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        otherQuestion.parentNode.classList.remove('active');
      }
    });
  });
});
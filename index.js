document.addEventListener("DOMContentLoaded", function(event) {
  const noButton = document.getElementsByClassName('no');
  const questionModal = document.getElementsByClassName('question-modal');
  const noModal = document.getElementsByClassName('no-modal');
  const questionModalNoButton = document.getElementsByClassName('no-modal-no');
  const pleaseModal = document.getElementsByClassName('please-modal');
  const pleaseModalNoButton = document.getElementsByClassName('please-modal-no');
  const yesBtn = document.getElementsByClassName('yes-btn');
  const yesModal = document.getElementsByClassName('yes-modal');
  const mailBtn = document.getElementsByClassName('mail-btn');
  const letterModal = document.getElementsByClassName('letter');

  noButton[0].addEventListener("click", () => {
    questionModal[0].classList.add("d-none");
    noModal[0].classList.remove("d-none");

  });

  questionModalNoButton[0].addEventListener("click", () => {
    noModal[0].classList.add("d-none");
    pleaseModal[0].classList.remove("d-none");
  });

  pleaseModalNoButton[0].addEventListener("click", () => {
    pleaseModal[0].classList.add("d-none");
    setTimeout(() => {
      pleaseModal[0].classList.remove("d-none");
    }, 100);
  })

  Array.from(yesBtn).forEach(btn => {
    btn.addEventListener("click", () => {
      questionModal[0].classList.add("d-none");
      pleaseModal[0].classList.add("d-none");
      setTimeout(() => {
        yesModal[0].classList.remove("d-none");
      }, 100);
    })
  });

  mailBtn[0].addEventListener("click", () => {
    yesModal[0].classList.add("d-none");
    letterModal[0].classList.remove("d-none");
  });

});
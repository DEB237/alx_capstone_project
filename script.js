//Script to add text typing animation
document.addEventListener("DOMContentLoaded", () => {
  const phrases = ['Web Designer', 'Web Developer', 'UI/UX designer', 'Tutor'];
  const elt = document.getElementById("typewriter");

  let sleepTime = 100; // Adjust this value to control typing speed
  let phraseIndex = 0;

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const typeText = async () => {
    const word = phrases[phraseIndex];
    for (let i = 0; i <= word.length; i++) {
      elt.innerText = word.substring(0, i);
      await sleep(sleepTime);
    }
  };

  const eraseText = async () => {
    const word = phrases[phraseIndex];
    for (let i = word.length; i >= 0; i--) {
      elt.innerText = word.substring(0, i);
      await sleep(sleepTime);
    }
  };

  const typewriterLoop = async () => {
    while (true) {
      await typeText();
      await sleep(sleepTime * 5);

      await eraseText();
      await sleep(sleepTime * 2);

      if (phraseIndex === phrases.length - 1) {
        phraseIndex = 0;
      } else {
        phraseIndex++;
      }
    }
  };

  typewriterLoop();
});


//Script to switch titles and content within the About section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function(event) {
      var clickedTablink = this;

      for (let j = 0; j < tablinks.length; j++) {
        tablinks[j].classList.remove("active-link");
        tabcontents[j].classList.remove("active-tab");
      }
      clickedTablink.classList.add("active-link");
      tabcontents[i].classList.add("active-tab");
    });
  }
}

//Script to open and close sidemenu
var sidemenu;

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", () => {
  sidemenu = document.getElementById("sidemenu");
});

// Script to submit and collect data from the form and notify the user their message has been sent
const scriptURL = 'https://script.google.com/macros/s/AKfycbxg9AxOZxKJvuPJYzWF-waZa_aOvHuk8s-_se8FMdiTXJOIhQnGGzuQM3l8e5f2kjrK/exec';


document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message));
  });
});

//Script to validate email
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm'); 

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      // Show an error message or perform other actions if email is invalid
      alert('Please enter a valid email address.');
      return;
    }

    // If email is valid, submit the form
    form.submit(); 
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

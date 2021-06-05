/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// HOME PAGE
sr.reveal(".sub", {origin: "bottom", delay: 200 });
sr.reveal(".home__title", {origin: "bottom", delay: 300 });
sr.reveal(".details", {origin: "bottom", delay: 400 });
sr.reveal(".home__scroll", {origin: "bottom", delay: 500 });
sr.reveal(".console-container", { delay: 200 });
sr.reveal(".home__img", { origin: "bottom", delay: 500 });

// PROJECTS PAGE
sr.reveal(".projects__img", { interval: 200 });
sr.reveal(".projects__title", { delay: 100  });
sr.reveal(".otherProjects", { interval: 200 });

/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('header__toggle')

/* SHOW */
toggleMenu.addEventListener('click', function(){
  navMenu.classList.toggle('show');
})


/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navLink.forEach(n=> n.classList.remove('active'))
  this.classList.add('active')

  //Remove menu after selecting link
  navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))


/* CONSOLE */
const KEY_CODES = [38];
const COMMANDS = {
  pwd: `Hey 👋 Welcome, these are the supported commands:</br>
    about, experience, education, skills, contact, projects, cv `,
  ls: `
    about   experience   education   skills   contact   cv 
    `,
  help:
    "Supported commands: <br> about, experience, education, skills, contact, projects, cv",
  about: `Hey, I'm Aimene Nouri, <br>
    I am a Computer science Student from Morocco. 
    focused on building and designing beautiful web apps & mobile apps 👨‍💻, 
    Currently focusing on building beautiful android apps.<br><br>
    When I'm not in front of a computer screen, I'm probably playing video games, having fun with friends.
    `,
  experience: `
    <strong>AXA</strong> </br>
    <strong>07/2019-09/2019: </strong>Internship as a software engineer at <a href='https://www.axa.ma/' target="_blank" style='color: white'>Axa Maroc</a>. </br>
    </br> 
    `,
  education: `
      <strong>09/2018-06/2020: </strong> DUT degree in Computer Science at <a href='http://www.estsb.ucd.ac.ma/' target="_blank" style='color: white'>Superior School of Technology</a>. </br>
    `,
  skills: `
    <strong>Languages:</strong> JS, HTML, CSS, PHP, Java, C/C++.
    <br> <strong>Frameworks:</strong> Vue, Ionic, Wordpress.
    <br> <strong>Tools:</strong> Relational Databases(SQL Server, Oracle Database, MySQL), Git & Github.
    <br> <strong>Design:</strong> Prototyping, Adobe xd, Illustrator, Photoshop.
    `,
  cv:
    " <a href='/assets/Aimene(Resume).pdf' target='_blank' style='color: white' download>AimeneNouri.pdf</a>",
  contact: `
    <strong>email:</strong> <a href='mailto:nouri.aimene65@gmail.com'style='color: white'>nouri.aimene65@gmail.com</a>
    `,
  projects: `
    <strong>WeChat App</strong> </br>
    <strong>04/2020-06/2019: </strong>a simple, secure mobile chat application.</br> <a href="https://github.com/AimeneNouri/WeChat-/" style="color: #ffd60a; ">See project</a></br>
    </br> 
    <strong>Stay Safe App</strong> </br>
    <strong>07/2020-09/2020: </strong>free and open source Covid-19 Tracker app to stay updated an safe. <a href="https://github.com/AimeneNouri/covid19-app/" style="color: #ffd60a; ">See project</a></br>
    </br> 
    <strong>Library management Application</strong> </br>
    <strong>02/2019-04/2019: </strong>a desktop application for library management system. <a href="https://github.com/AimeneNouri/Library-Management-System/" style="color: #ffd60a; ">See project</a></br>
    </br> 
    <strong>Weather Application</strong> </br>
    <strong>07/2019-07/2019: </strong>a simple web Application of weather. <a href="https://github.com/AimeneNouri/Weather-app/" style="color: #ffd60a; ">See project</a></br>
    </br> 
    <strong>Education School Template</strong> </br>
    <strong>03/2020-03/2020: </strong>a simple, secure mobile chat application using Java. <a href="https://github.com/WailBouhadda/Template-Wordpress-Site-web-universitaire" style="color: #ffd60a; ">See project</a></br>
    </br> 
    <strong>Driving School Application</strong> </br>
    <strong>03/2020-03/2020: </strong>a desktop application for Driving school management system. <a href="https://github.com/WailBouhadda/Template-Wordpress-Site-web-universitaire" style="color: #ffd60a; ">See project</a></br>
    </br> 
    `,
};
let userInput, terminalOutput;

function init() {
  userInput = document.getElementById("terminalInput");
  terminalOutput = document.getElementById("terminalOutput");
}

function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div> > ${input}</div>`;
  if (input === "clear") {
    console.log("clear");
    terminalOutput.innerHTML = `Hey 👋 Welcome, these are the supported commands:</br>
    about, experience, education, skills, contact, projects, cv `;
    return;
  } else if (!COMMANDS.hasOwnProperty(input)) {
    output += `
    command not found: ${input}
    <br> Supported commands: about, experience, education, skills, contact, projects, cv,
    `;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML} <div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function key(e) {
  const input = userInput.innerHTML;

  if (KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    executeCommand(input);
    userInput.innerHTML = "";
    return;
  }
  userInput.innerHTML = input + e.key;
}

function backspace(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keypress", key);
document.addEventListener("keydown", backspace);

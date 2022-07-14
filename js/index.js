function navigation() {
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  toggle.onclick = function () {
    navigation.classList.toggle("active");
  };
}
function Particles() {
  document.addEventListener("mousemove", function (e) {
    let body = document.querySelector("body");
    let particles = document.createElement("span");
    particles.classList.add("particles");
    let x = e.offsetX;
    let y = e.offsetY;
    particles.style.left = x + "px";
    particles.style.top = y + "px";
    let size = Math.random() * 8;
    particles.style.width = 2 + size + "px";
    particles.style.height = 2 + size + "px";
    let tranfromvalue = Math.random() * 360;
    particles.style.transform = `rotate(${tranfromvalue}deg)`;

    body.appendChild(particles);
    setTimeout(() => {
      particles.remove();
    }, 2000);
  });
}


function nowTime() {
  let hr = document.querySelector("#hr");
  let mn = document.querySelector("#mn");
  let sc = document.querySelector("#sc");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital time

    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
      h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
  }, 1000);
}

nowTime();
navigation();
// Particles(); 

const content = "Lazy Man";

const typed = document.querySelector(".typed");
let i = 0;

const typing = () => {
  let txt = content[i++];
  typed.innerHTML += txt;
  if (i > content.length) {
    typed.innerHTML = "";
    i = 0;
  }
};

setInterval(typing, 600);

// typing effect
const words = ["Frontend Developer", "Creative Thinker"];
let i = 0, j = 0, text = "", deleting = false;

function type(){
    let el = document.querySelector(".typing");

    if(!deleting && j <= words[i].length){
        text = words[i].substring(0, j++);
    } else if(deleting){
        text = words[i].substring(0, j--);
    }

    el.textContent = text;

    if(j === words[i].length) deleting = true;
    if(j === 0){ deleting = false; i = (i+1)%words.length; }

    setTimeout(type, deleting ? 50 : 100);
}

type();

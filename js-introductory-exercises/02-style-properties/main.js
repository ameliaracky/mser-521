
function changeBackground(selector, color) {
    let el = document.querySelector (selector);
    el.style.backgroundColor = color;

}

function Reset () {
    console.log("reset all 4 divs");
    let section1EL= document.querySelector("#section1")
    section1EL.style.backgroundColor = "white";
    let section2EL =document.querySelector ("#section2");
    section2EL.style.backgroundColor = "white";
    let section3EL =document.querySelector ("#section3");
    section3EL.style.backgroundColor = "white";
    let section4EL = document.querySelector ("#section4");
    section4EL.style.backgroundColor = "white";
}


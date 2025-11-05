function playLowC() {

    const selectEL= document.querySelector("select");
    const folderName= selectEL.value; 
    console.log(folderName);

    // create a variable called "audio" and put the
    // element matching the selector into the variable:
    const audio = document.querySelector("audio");
    // assign the src attribute to the file located
    audio.src = "scales/" + folderName + "/C_low.mp3";
    // actually play the audio
    audio.play();
}

function playD() {
    const audio = document.querySelector("audio");
    audio.src = "scales/" + folderName + "/D.mp3";
    audio.play();
}

function playE() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/E.mp3";
    audio.play();
}

function playF() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/F.mp3";
    audio.play();
}

function playG() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/G.mp3";
    audio.play();
}

function playA() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/A.mp3";
    audio.play();
}

function playB() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/B.mp3";
    audio.play();
}

function playC() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/C_high.mp3";
    audio.play();
}



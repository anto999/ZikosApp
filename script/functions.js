
function playAudio(){
    audio = new Audio('audio_file.mp3');
    MusicPlay= true;
    console.log("audio");
    tempo();
    audio.play();   
}
/*
function stopAudio(){
   console.log("Stopaudio");
   audio=new Audio('audio0_file.mp3');
}*/

function tempo(){
    var x =  document.getElementById("bpminput").value;//en MilliSecondes
    //console.log(x);
    bpm=60000/x;
 }

 function majeur(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinMajeur;
    document.getElementById("majmin").innerText="MAJEUR";
 }

 function mineur(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinMineur;
    document.getElementById("majmin").innerText="MINEUR";
 }

 function maj7(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinMajeur7;
    document.getElementById("majmin").innerText="MAJEUR 7";
 }

 function _7eme(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessin7eme;
    document.getElementById("majmin").innerText="7eme";
 }

 function mineur7(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinMineur7;
    document.getElementById("majmin").innerText="Mineur 7";
 }

 function _6eme(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessin6eme;
    document.getElementById("majmin").innerText="6eme";
 }

 function mineur6(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinMineur6;
    document.getElementById("majmin").innerText="Mineur 6";
 }

 function _9eme(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessin9eme;
    document.getElementById("majmin").innerText="9eme";
 }

 function sus2(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinsus2;
    document.getElementById("majmin").innerText="Sus2 /Add9";
 }

 function sus4(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinsus4;
    document.getElementById("majmin").innerText="Sus4 /Sus";
 }

 function _b(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessin_b;
    document.getElementById("majmin").innerText="B / #";
 }

 function b7(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinb7;
    document.getElementById("majmin").innerText="B7 / #7";
 }

 function bm(){
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    NoteDessin=NoteDessinbm;
    document.getElementById("majmin").innerText="Bm / #m";
 }



 function random(){
    NoteDessin=NoteDessinRandom;
    NoteAuHasard=Math.floor(Math.random() * 14);
    randomNote = true;
    NoteEN =["C","D","E","F","G","A","B","C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI","DO","RE","MI","FA","SOL","LA","SI"];
    document.getElementById("majmin").innerText="RANDOM";
 }

 function ukulele(){
    NoteDessin=NoteDessinUkuleleMajeur;
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
    randomNote = false;
    document.getElementById("majmin").innerText="UKULELE";
 }


 function less(){
     x=document.getElementById("bpminput").value-1;
    document.getElementById("bpminput").value=x;
 }

 function less10(){
    x=document.getElementById("bpminput").value-10;
    document.getElementById("bpminput").value=x;
 }

 function more(){
    x=document.getElementById("bpminput").value;
    x++;
    document.getElementById("bpminput").value=x;   
 }

 function more10(){
    x=document.getElementById("bpminput").value;
    for (a=0;a<10;a++){
        x++;
    }
    document.getElementById("bpminput").value=x;
 }
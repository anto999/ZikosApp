var NoteEN =["C","D","E","F","G","A","B"];
var NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
var NoteDessin =["032010","X00232","022100","133211","320033","002220","X24442"];
var NoteDessinMajeur =["032010","X00232","022100","133211","320033","002220","X24442"];
var NoteDessinMineur =["X35543","X00231","022000","X33111","355333","X02210","224432"];
var NoteDessinRandom = ["032010","X00232","022100","133211","320033","002220","X24442","X35543","X00231","022000","X33111","355333","X02210","224432"];
var NoteDessinUkuleleMajeur=["0003","2220","1402","2010","0232","2100","4322"];

var audio = new Audio('audio_file.mp3');

var randomNote = false;
function playAudio(){
    audio = new Audio('audio_file.mp3');
    MusicPlay= true;
    console.log("audio");
    tempo();
   
    audio.play();   
}

function stopAudio(){
    
    console.log("Stopaudio");
   // MusicPlay= false;
   audio=new Audio('audio0_file.mp3');
}

function tempo(){
    var x =  document.getElementById("bpminput").value;//en MilliSecondes
    //console.log(x);
    bpm=60000/test;

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

 function random(){
    NoteDessin=NoteDessinRandom;
    NoteAuHasard=Math.floor(Math.random() * 14);
    randomNote = true;
    NoteEN =["C","D","E","F","G","A","B","C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI","DO","RE","MI","FA","SOL","LA","SI"];

 }

 function ukulele(){
    NoteDessin=NoteDessinUkuleleMajeur;
    NoteEN =["C","D","E","F","G","A","B"];
    NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
 }
/*
 function popup(){
     let tempoAlert=prompt("please select tempo");
     bpm=60000/tempoAlert;
 }*/

const sleep = ms => new Promise(res => setTimeout(res, ms));
var mesure = 0;
var NoteAuHasard=Math.floor(Math.random() * 7);
var NoteAuHasardSuivante=Math.floor(Math.random() * 7);
document.getElementsByClassName("note_en_cours")[0].innerHTML=NoteEN[NoteAuHasard]+" : "+NoteFR[NoteAuHasard];
document.getElementsByClassName("Dessin_en_cours")[0].innerHTML=NoteDessin[NoteAuHasard];
document.getElementsByClassName("note_suivante")[0].innerHTML=NoteEN[NoteAuHasardSuivante]+" : "+NoteFR[NoteAuHasardSuivante];
document.getElementsByClassName("Dessin_suivant")[0].innerHTML=NoteDessin[NoteAuHasardSuivante];
document.getElementsByClassName("mesure")[0].innerHTML="1/2";
var MusicPlay = true;
var bpm = 500;

let test = prompt("coucou");
console.log(test);



    (async () => {
        while (MusicPlay == true){
            for (i=0;i<4;i++){
                if (i==0){
                    console.log(NoteAuHasard);
                    playAudio();
                    console.log(i);
                    document.getElementsByClassName("time")[0].innerHTML="O X X X";
                    }           
                else if (i==1){
                    await sleep(bpm);
                    document.getElementsByClassName("time")[0].innerHTML="X O X X";
                    playAudio();
                    console.log(i);
                }else if (i==2){
                    await sleep(bpm);
                    document.getElementsByClassName("time")[0].innerHTML="X X O X";
                    playAudio();
                    console.log(i);
                }else if (i==3)  {
                    await sleep(bpm);
                    document.getElementsByClassName("time")[0].innerHTML="X X X O";
                    playAudio();
                    console.log(i);
                    await sleep(bpm);
                    mesure++;
                    console.log("mesure: "+mesure);
                    if (mesure==1){
                        document.getElementsByClassName("mesure")[0].innerHTML=mesure+1+"/2";
                        }
                    else if (mesure==2){
                        if(randomNote==true){
                            var NoteAuHasardSuivante=Math.floor(Math.random() * 14);
                        }else{
                            var NoteAuHasardSuivante=Math.floor(Math.random() * 7);
                        }
                       

                        document.getElementsByClassName("note_en_cours")[0].innerHTML=NoteEN[NoteAuHasard]+" : "+NoteFR[NoteAuHasard];
                        document.getElementsByClassName("Dessin_en_cours")[0].innerHTML=NoteDessin[NoteAuHasard];
                        document.getElementsByClassName("note_suivante")[0].innerHTML=NoteEN[NoteAuHasardSuivante]+" : "+NoteFR[NoteAuHasardSuivante];
                        document.getElementsByClassName("Dessin_suivant")[0].innerHTML=NoteDessin[NoteAuHasardSuivante];
                        mesure=0;
                        document.getElementsByClassName("mesure")[0].innerHTML=mesure+1+"/2";
                        NoteAuHasard=NoteAuHasardSuivante;
                    }
                }
            }//fin for
        }//fin while    
    })();


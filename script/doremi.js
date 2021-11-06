var NoteEN =["C","D","E","F","G","A","B"];
var NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
var NoteDessin =["032010","X00232","022100","133211","320033","002220","X24442"];

var audio = new Audio('audio_file.mp3');
function playAudio(){
    MusicPlay= true;
    console.log("audio");
    test();
    audio.play();   
}

function stopAudio(){
    
    console.log("Stopaudio");
    MusicPlay= false;
}

function test(){
    var x =  document.getElementById("bpminput").value;//en MilliSecondes
    //console.log(x);
    bpm=60000/x;

 }


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
                        var NoteAuHasardSuivante=Math.floor(Math.random() * 7);
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


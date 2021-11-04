var NoteEN =["C","D","E","F","G","A","B"];
var NoteFR =["DO","RE","MI","FA","SOL","LA","SI"];
var NoteDessin =["032010","X00232","022100","133211","320033","002220","X24442"];

var audio = new Audio('audio_file.mp3');
function playAudio(){
    
    console.log("audio");
    audio.play();
}


const sleep = ms => new Promise(res => setTimeout(res, ms));




var NoteAuHasard=Math.floor(Math.random() * 7);
(async () => {
    while (true){
        var NoteAuHasardSuivante=Math.floor(Math.random() * 7);
        
        for (i=0;i<4;i++){
            if (i==0){
                console.log(NoteAuHasard);
                playAudio();
                document.getElementsByClassName("time")[0].innerHTML="O X X X";
                document.getElementsByClassName("note_en_cours")[0].innerHTML=NoteEN[NoteAuHasard]+" : "+NoteFR[NoteAuHasard];
                document.getElementsByClassName("Dessin_en_cours")[0].innerHTML=NoteDessin[NoteAuHasard];
                document.getElementsByClassName("note_suivante")[0].innerHTML=NoteEN[NoteAuHasardSuivante]+" : "+NoteFR[NoteAuHasardSuivante];
                document.getElementsByClassName("Dessin_suivant")[0].innerHTML=NoteDessin[NoteAuHasardSuivante];
            }           
                else if (i==1){
                    await sleep(480);
                    document.getElementsByClassName("time")[0].innerHTML="X O X X";
                    playAudio();
                }else if (i==2){
                    await sleep(480);
                    document.getElementsByClassName("time")[0].innerHTML="X X O X";
                    playAudio();
                }else if (i==3)  {
                    await sleep(480);
                    document.getElementsByClassName("time")[0].innerHTML="X X X O";
                    playAudio();
                    await sleep(480);
                }
        }
        NoteAuHasard=NoteAuHasardSuivante;
    }
    
})();

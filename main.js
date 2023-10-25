var speechRecognition=window.webKitspeechRecognition;
var recoginition=speechRecognition();
var textBox=document.getElementsById("textBox");

function start(){
    textBox.innerHTML=" ";
    recoginition .start();
}
 recoginition.onResult=function(event){
    console.log(event);
    var Content=event.results[0] [0].transcript;
    textBox.innerHTML= Content;
    console.log(Content);
    if(Content=="tire minha selfie"){
        console.log("tirando selfie---");
        speak();
    }
 }

 function speak(){
var synth=window.speechSynthesis;
speakData="tirando sua selfie em 5 segundos";
var utterThis=new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function() {
    takeSelfie();
    Save(); 
}, 5000 );
 }

 camera=document.getElementById("Camera");
 Webcam.Set({
    whidth:360,
    Height:250,
    Image_format:'JPeg',
    Jpeg_Qualit:90
 });

 function takeSelfie() {
Webcam.snep(function(Data_uri){
    Document.getElementById("result").innerHTML='<img id="selfieImage"src="'+data_uri+'"/>';
});
 }

 function Save(){
    Link=document.getElementById("link");
    Image=document.getElementById("selfieImage").src;
    link.href=Image;
    link.clik();
 }
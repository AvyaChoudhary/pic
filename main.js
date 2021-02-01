var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
 document.getElementById("textBox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if (content=="take my selfie"){
        speak();  
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="takig your selfie in 3 seconds";
    var uttterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },3000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
  camera=document.getElementById("camera");
  function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>'

      })
  }
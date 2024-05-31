var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    
    setTimeout(function()
{
    imd_id = "selfie1";
    take_snapshot();
    speak_data = "tirando sua selfie em 10 segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    }, 5000)
}

setTimeout(function()
{
    imd_id = "selfie1";
    take_snapshot();
    speak_data = "tirando sua selfie em 15 segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    }, 10000)

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
    
    }, 15000);

    function takeSelfie()
{
        if(img_id=="selfie1"){
        document.getElementById("result").innerHTML = "<img id="selfieImage" src=""+data_uri+""/>";
    };
}      

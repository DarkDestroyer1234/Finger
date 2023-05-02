var prediction_1 = ""
var prediction_2 = ""

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality: 90

})

var camera = document.getElementById ("camera")


Webcam.attach("#camera")

function take_snapshot(){
Webcam.snap(function (data_uri){
document.getElementById ("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';




})



}

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1WcqKexW_/model.json", modelo_cargado)

function modelo_cargado(){

console.log ("model_charged")

}
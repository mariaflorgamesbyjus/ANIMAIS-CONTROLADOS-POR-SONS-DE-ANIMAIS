//https://teachablemachine.withgoogle.com/models/Fsm8HYMUx/

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Fsm8HYMUx/model.json', modelReady);
}

function modelReady(){

  classifier.classify(gotResults);
}








function gotResults(error, results) {
console.log("deu certo!")
  if (error) {
    console.error(error);
  } else {
    console.log(results);
 

    document.getElementById("result_label").innerHTML = 'Posso escutar: - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
   

 
   img = document.getElementById('alien1') 
   
    
    
    if (results[0].label == "MIAU gatinho bravinho") {
    
      img.src = 'download.jpg';
    
    }     
    else if (results[0].label == "lobo ou cão  ou cachorro quente") {
      
      img.src = 'cachorro-latindo.gif';}

      else {

        img.src = 'tenor.gif'
      }
     

    
 }
}



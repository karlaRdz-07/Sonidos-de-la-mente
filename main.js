function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BCQiUQNB_/", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('ARCOIRIS') 
        img1 = document.getElementById('ESTRELLA')
        img2 = document.getElementById('NUBE')
        img3 = document.getElementById('SOL')
    
        if (results[0].label == "alien") {
          img.src = 'ARCOIRIS.png';
          img1.src = 'ESTRELLA.png';
          img2.src = 'NUBE.png';
          img3.src = 'SOL.png';
        } else if (results[0].label == "cancion.monstruo") {
          img.src = 'ARCOIRIS.png';
          img1.src = 'ESTRELLA.png';
          img2.src = 'NUBE.png';
          img3.src = 'SOL.png';
        } else if (results[0].label == "monstruo1") {
            img.src = 'ARCOIRIS.png';
            img1.src = 'ESTRELLA.png';
            img2.src = 'NUBE.png';
            img3.src = 'SOL.png';
        }else{
            img.src = 'ARCOIRIS.png';
            img1.src = 'ESTRELLA.png';
            img2.src = 'NUBE.png';
            img3.src = 'SOL.png';
        }
      }    

}
function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/71VCfirM1/model.json", modelReady);
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
    
        img = document.getElementById('Estertores') 
        img1 = document.getElementById('Roncus')
        img2 = document.getElementById('Estridor')
        img3 = document.getElementById('Silbancias')
    
        if (results[0].label == "Estertores") {
          img.src = 'estertores.gif';
          img1.src = 'roncus.png';
          img2.src = 'estridor.png';
          img3.src = 'silbancias.png';
        } else if (results[0].label == "Roncus") {
          img.src = 'estertores.png';
          img1.src = 'roncus.gif';
          img2.src = 'estridor.png';
          img3.src = 'silbancias.png';
        } else if (results[0].label == "Estridor") {
          img.src = 'estertores.png';
          img1.src = 'roncus.png';
          img2.src = 'estridor.gif';
          img3.src = 'silbancias.png';
        } else if (results[0].label == "Silbancias") {
          img.src = 'estertores.png';
          img1.src = 'roncus.png';
          img2.src = 'estridor.png';
          img3.src = 'silbancias.gif';
        }
      }

}
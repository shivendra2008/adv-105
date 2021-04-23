Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
  }

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2MvMBzkle/model.json',modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

  
function check() {
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);
  }
  
  
  function gotResult(error, results) 
  {
    if (error) 
    {
      console.error(error);
    }
    else 
    {
      console.log(results);
      document.getElementById("result_person_name").innerHTML = results[0].label;
      document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}











function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (results[0].label == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (results[0].label == "angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        if (results[0].label == "laugh") {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if (results[0].label == "cry") {
            document.getElementById("update_emoji2").innerHTML = "&#128546;";

        }

        if (results[0].label == "annoyed") {
            document.getElementayId("update_emoji2").innerHTML = "&#128548;";

        }
        if (results[1].label == "laugh") {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if (results[1].label == "cry") {
            document.getElementById("update_emoji2").innerHTML = "&#128546;";

        }

        if (results[1].label == "annoyed") {
            document.getElementayId("update_emoji2").innerHTML = "&#128548;";

        }
        if (results[1].label == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (results[1].label == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (results[1].label == "angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
    }
}










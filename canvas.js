(function () {

  function playMusic() {
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
      //Its playing...do your job

    } else {
      myAudio.play()
      //Not playing...maybe paused, stopped or never played.

    }
  }

  //fields
  var canvas = document.getElementById("canvas");
  var body = document.getElementsByTagName("body")[0];
  
  /*Initialize flowers*/
  body.addEventListener("click", function (ev) {
    playMusic()
  })
  //window.onload = drawFlowers
  //window.onresize = drawFlowers


})("");

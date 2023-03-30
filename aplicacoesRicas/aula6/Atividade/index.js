
function playVideo(videoElement) {
    videoElement.play();
  }

  function pauseVideo(videoElement) {
    videoElement.pause();
  }

  function retrocederVideo(videoElement) {
    videoElement.currentTime -= 5;
  if (videoElement.currentTime < 0) {
    videoElement.currentTime = 0;
  }
  }

  function avancarVideo(videoElement) {
    videoElement.currentTime += 5;
  if (videoElement.currentTime >= videoElement.duration) {
    videoElement.pause();
  }
  }


  function telaCheia(videoElement) {
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
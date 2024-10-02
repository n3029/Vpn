function displayAd() {
  // Get the ad container element
  var adContainer = document.querySelector('div.ad-container');

  // Check if an ad is currently playing
  if (adContainer && adContainer.querySelector('video')) {
    // Get the ad video element
    var adVideo = adContainer.querySelector('video');

    // Disable the skip button
    adContainer.querySelector('button.ytp-ad-skip-button').disabled = true;

    // Prevent the ad from being skipped
    adVideo.addEventListener('ended', function() {
      // Restart the ad video
      adVideo.currentTime = 0;
      adVideo.play();
    });
  }
}

// Run the displayAd function every 1 second
setInterval(displayAd, 1000)

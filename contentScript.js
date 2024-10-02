function displayAd() {
  // Get the current video timestamp
  var timestamp = document.querySelector('video').currentTime;

  // Check if 1 minute has passed since the last ad
  if (timestamp % 60 === 0) {
    // Pause the video
    document.querySelector('video').pause();

    // Display a non-skippable ad
    var adContainer = document.createElement('div');
    adContainer.innerHTML = '<iframe src="https://example.com/non-skippable-ad" frameborder="0" width="100%" height="100%"></iframe>';
    document.body.appendChild(adContainer);

    // Wait for 30 seconds (or the ad duration)
    setTimeout(function() {
      // Remove the ad container
      adContainer.remove();

      // Resume the video
      document.querySelector('video').play();
    }, 30000);
  }
}

// Run the displayAd function every 1 second
setInterval(displayAd, 1000)

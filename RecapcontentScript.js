function disableReCAPTCHA() {
  // Get all reCAPTCHA iframes
  var reCAPTCHAiframes = document.querySelectorAll('iframe[src*="google.com/recaptcha"]');

  // Remove all reCAPTCHA iframes
  reCAPTCHAiframes.forEach(function(iframe) {
    iframe.remove();
  });

  // Remove "Verify you're not a bot" prompts
  var verifyPrompts = document.querySelectorAll('div[role="alert"]');
  verifyPrompts.forEach(function(prompt) {
    prompt.remove();
  });
}

// Run the disableReCAPTCHA function on page load
document.addEventListener("DOMContentLoaded", disableReCAPTCHA);

// Run the disableReCAPTCHA function on page changes
document.addEventListener("DOMSubtreeModified", disableReCAPTCHA)

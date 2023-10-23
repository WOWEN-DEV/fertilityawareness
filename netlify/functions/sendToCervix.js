// Send message to Netlify Function sendToCervix
function sendToNetlifyFunction(messageHtml, isBot) {
  // Log to confirm that the function is running
  console.log("sendToNetlifyFunction körs med meddelande:", messageHtml.outerHTML, "och isBot:", isBot);

  // Do a POST request to Netlify Function
  fetch('/.netlify/functions/sendToCervix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messageHtml: messageHtml.outerHTML,
      isBot: isBot
    }),
  })
  .then(response => response.json()) // Add this to log server answer
  .then(data => {
    // Log answer from server
    console.log('Server answered with:', data);
  })
  .catch(error => {
    // Log eventual errors
    console.error('Error:', error);
  });
}

// Send message to Netlify Function sendToCervix
function sendToNetlifyFunction(messageHtml, isBot) {
  // Logga för att bekräfta att funktionen körs
  console.log("sendToNetlifyFunction körs med meddelande:", messageHtml.outerHTML, "och isBot:", isBot);

  // Gör POST-request till Netlify Function
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
  .then(response => response.json()) // Lägg till detta för att logga serverns svar
  .then(data => {
    // Logga serverns svar
    console.log('Servern svarade med:', data);
  })
  .catch(error => {
    // Logga eventuella fel
    console.error('Error:', error);
  });
}

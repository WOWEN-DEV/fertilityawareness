// netlify/functions/sendToCervix.js
import fetch from 'node-fetch';

exports.handler = async function(event, context) {
  // Extracting data from POST request
  const { messageHtml, isBot } = JSON.parse(event.body);

  console.log("Received data:", { messageHtml, isBot });

  // The URL from Zapier's Webhook, replace with your URL
  const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/16772436/38mgz2h/";

  // Send data to Zapier
  try {
    const zapierResponse = await fetch(zapierWebhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageHtml, isBot })
    });

    const zapierData = await zapierResponse.json();
    console.log("Zapier responded with:", zapierData);

  } catch (error) {
    console.error("Error sending data to Zapier:", error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received on server" }),
  };
};

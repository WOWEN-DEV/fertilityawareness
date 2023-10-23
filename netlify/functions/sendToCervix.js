const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  console.log("Received event: ", event);  // Logga inkommande event
  const { messageHtml, isBot } = JSON.parse(event.body);

  const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  
  const response = await fetch(zapierWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messageHtml: messageHtml,
      isBot: isBot
    }),
  });

  console.log("Zapier response: ", response);  // Logga respons från Zapier

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'Message sent' }),
  };
};

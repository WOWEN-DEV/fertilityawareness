const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { message, isBot } = JSON.parse(event.body);

  const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL; // Här läser vi in miljövariabeln

  const response = await fetch(zapierWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      isBot: isBot
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'Message sent' }),
  };
};

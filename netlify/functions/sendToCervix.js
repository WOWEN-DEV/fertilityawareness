const axios = require('axios');

exports.handler = async function(event, context) {
  const { messageHtml, isBot } = JSON.parse(event.body);

  // Check if the messageHtml contains 'id="thinking-indicator"'
  if (messageHtml.indexOf('id="thinking-indicator"') === -1) {
    console.log(`Sending the following data to Google Sheets: messageHtml=${messageHtml}, isBot=${isBot}`);

    // Send a POST request to the Google Sheets web app
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycbwy9IuEv1efzuZMOWEzMMUeRDgqIZCe6fjWt4C_VaDsQRXgEsQjUvui43rcLzJGmfw/exec', { messageHtml, isBot });
      console.log('Successfully sent data to Google Sheets:', response.data);
    } catch (error) {
      console.error('Failed to send data to Google Sheets:', error);
    }
  } else {
    console.log('Message contains id="thinking-indicator". Skipping sending to Google Sheets.');
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received on server and sent to Google Sheets" }),
  };
};

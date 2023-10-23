// netlify/functions/sendToCervix.js

exports.handler = async function(event, context) {
  // Log the received data
  console.log("Received data:", JSON.parse(event.body));

  // Extracting data from POST request
  const { messageHtml, isBot } = JSON.parse(event.body);

  // Here you can do something with the data, e.g., forward it to another service
  // ...

  // Sending an answer back to the client
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data received on server" }),
  };
};

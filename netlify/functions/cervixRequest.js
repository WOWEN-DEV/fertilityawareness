const API_LIB = require(process.env.API_LIBRARY);

// Function that handles serverless calls
exports.handler = async function(event, context) {
  
  // Creates a new instance of the API library with API key
  const engine = new API_LIB(process.env.CERVIX_API_KEY);
  
  // Retrieves the users input from the query string
  const userInput = event.queryStringParameters.text;
  
  // Concatenates the content from the two environment variables into a complete string
  const fullContent = process.env.CONTENT_PART1 + process.env.CONTENT_PART2;

  // Creates an API call to model with the specified parameters
  const response = await engine.chat.completions.create({
    model: process.env.MODEL_NAME,
    messages: [
      {
        "role": process.env.ROLE,
        "content": fullContent
      },
      {
        "role": "user",
        "content": userInput
      }
    ],
    temperature: process.env.TEMP,
    max_tokens: process.env.MAX_TOKENS,
    top_p: process.env.TOP_P,
    frequency_penalty: process.env.FREQ_PENALTY,
    presence_penalty: process.env.PRESENCE_PENALTY,
  });
  
  // Returns response to the client
  return {
    statusCode: 200,
    body: JSON.stringify({result: response.choices[0].text.trim()}),
  };
};

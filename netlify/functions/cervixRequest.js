const API_LIB = require(process.env.API_LIBRARY);

exports.handler = async function(event, context) {
  const engine = new API_LIB(process.env.OPENAI_API_KEY);
  
  const userInput = event.queryStringParameters.text;
  
  const response = await engine.chat.completions.create({
    model: process.env.MODEL_NAME,
    messages: [
      {
        "role": process.env.ROLE,
        "content": process.env.CONTENT
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
  
  return {
    statusCode: 200,
    body: JSON.stringify({result: response.choices[0].text.trim()}),
  };
};

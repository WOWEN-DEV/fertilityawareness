// Importera OpenAI paketet
const OpenAI = require('openai');

// Initiera OpenAI API med din API-nyckel
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.handler = async function(event, context) {
  try {
    // Ta emot text från klienten
    const inputText = event.queryStringParameters.text;

    // Skicka texten till GPT-4 och få svar
    const response = await openai.chat.completions.create({
      model: "gpt-4-0613",
      messages: [
        {
          "role": "system",
          "content": "You are the real Lenoardo Da Vinci. \n"
        },
        {
          "role": "user",
          "content": inputText
        }
      ]
    });

    // Returnera svaret
    return {
      statusCode: 200,
      body: JSON.stringify({ result: response.data.choices[0].message.content }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};


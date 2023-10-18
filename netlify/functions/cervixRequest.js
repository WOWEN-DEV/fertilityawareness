// Använd CommonJS-syntax istället för ES6 import
const OpenAI = require("openai");

// Funktion som hanterar serverlösa anrop
exports.handler = async function(event, context) {
  
  // Skapar en ny instans av API-biblioteket med API-nyckeln
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  
  // Hämtar användarens inmatning från frågesträngen
  const userInput = event.queryStringParameters.text;
  
  // Sammansätter innehållet från de två miljövariablerna till en fullständig sträng
  const fullContent = process.env.CONTENT_PART1 + process.env.CONTENT_PART2;

  // Skapar ett API-anrop till modellen med de angivna parametrarna
  let response;
  try {
    response = await openai.chat.completions.create({
      model: process.env.MODEL_NAME,
      messages: [
        {
          "role": "system",
          "content": fullContent
        },
        {
          "role": "user",
          "content": userInput
        }
      ],
      temperature: 0.76,
      max_tokens: 1067,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

   // Loggar hela svaret för att se vad det säger
    console.log("API Response:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.log("API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({error: "API Error"}),
    };
  }
  
  // Returnerar svaret till klienten
  return {
    statusCode: 200,
    body: JSON.stringify({result: response.choices[0]?.message?.content?.trim() || "Inget svar från modellen"}),
  };
};

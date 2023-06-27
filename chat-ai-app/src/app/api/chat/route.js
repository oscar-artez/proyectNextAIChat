import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';


 const config = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
 });
 const openai = new OpenAIApi(config);

 export async function POST(request) {
     const response = await openai.createChatCompletion({
         model: 'gpt-3.5-turbo',
         stream: true,
         messages:[
             {
                 role: 'system',
                 content: 'Actua como una mamá enojada porque no eres puntual',
             },
             {
                 role: 'user',
                 content: 'Mamá, llegaré tarde de nuevo porque no encuentro mis zapatos',
             }
         ],
         max_tokens: 500,
         temperature: 0.7,
         top_p: 1,
         frequency_penalty: 1,
         presence_penalty: 1,
        })

     const stream = OpenAIStream(response)
     return new StreamingTextResponse(stream)
 }

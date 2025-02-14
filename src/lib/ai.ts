import Groq from "groq-sdk"
import {config} from 'dotenv';


config({ path: '.env.local' });

export const groq=new Groq({
   apiKey: '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',
   dangerouslyAllowBrowser: true,
});



export function aiChat(query:string){
    return groq.chat.completions.create({
        messages:[
            {
                role:"user",
                content:query,
            }
        ],
        model:'llama3-8b-8192',
        max_tokens:300,

    })
}
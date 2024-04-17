import path from "path";
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";
import * as readline from 'node:readline/promises';

const model = new LlamaModel({
    //model should be in root folder of nodeai folder
    modelPath: path.join("llava-v1.6-mistral-7b.Q3_K_XS.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});

async function AiResponse() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let query = await rl.question("query: ");
  if (query.includes('exit')) {
    rl.close();
  } else {
  let res =await session.prompt(query)
  console.log('ai : ', res );
  // type exit to close
    AiResponse();
  }
}
AiResponse();

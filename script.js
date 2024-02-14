import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAWqxUcGcTcpu8ioALrzuRuPy-UUqDnHg0";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);


async function run(){

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = document.getElementById("query").value;  // To get the value from the input tag

  document.getElementById('display').append('Q. ' + prompt + '\n\n');  // To display the question

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  document.getElementById("display").append(text + '\n\n');  // Display the answer
}

// run();

document.getElementById("send-button").addEventListener('click', ()=>{
  run();
})

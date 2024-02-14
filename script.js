import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"; // Convert MarkDown to HTML

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

  const html = marked.parse(text);  // To convert the markdown 
  document.getElementById("display").innerHTML += (html+'\n\n');  // Display the answer
}

// Added EventListener to the button
const send_button = document.getElementById('send-button');
send_button.addEventListener("click",()=>{
  run();  // Run the function
  document.getElementById('query').value = '';  // To clear the input
})


// Added EventListener --> When Press Enter it gets executed
const input = document.getElementById('query');
input.addEventListener("keypress",(event)=>{
  if (event.key == "Enter"){
    event.preventDefault();  // Prevent the Default action
    send_button.click();  // Send the control to the send-button
  }
})

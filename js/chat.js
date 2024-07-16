import { GoogleGenerativeAI } from "@google/generative-ai";
const conv = new showdown.Converter();

const genAI = new GoogleGenerativeAI("AIzaSyAfUfWBMgkEU76knHTqN1qCesfawNwTZ9E");
const gen_model = genAI.getGenerativeModel({ model: "gemini-pro" });
let firstMessageSent = false; // Flag to track if the first message has been sent

const chat = gen_model.startChat({
    generationConfig: {
        maxOutputTokens: 1000,
    },
});

const chatGemini = async (message) => {
    addMessage(message, "end");
    let res;
    if (!firstMessageSent) {
        // Construct the long prompt for the first message
        const longPrompt = `
i am sharing bit details about me user will ask you questions give there output based on my provided data to you always keep your output in 15 to 25 words

Yash Niwane
UI /UX developer

(91)9356965876 • LinkedIn://yashniwane • Github://yashNiwane • niwaneyash@gmail.com


EXPERIENCE

OpenInfotech                                                                                                           cross-road,Wakad
UI/UX developer                                                                                                                      (August 2023 – Present)
Developed the frontend of Edu-chat, utilizing Angular and TypeScript to create an AI-based application aiding students in learning programming languages through generative AI.
optimized multiple responsive UI components using Angular and Tailwind CSS, contributing to a 30% improvement in page load times and a 20% increase in user session durations..
Integrated backend APIs with the frontend, ensuring seamless functionality and improving data exchange efficiency by 15%.
Collaborated with team members using Kanban development methods, leading to a 25% increase in project completion rate.
Leveraged workflow management tools such as JIRA and Slack to streamline project tracking and communication, enhancing team coordination.
LetsGrowMore (Intern)                                                                                                              Pune
Full stack Developer                                                                                        (February 2023 – May 2023)
Developed full-stack applications using Django and Flask, implementing MVC architecture to improve code maintainability
Collaborated with cross-functional teams, utilizing Agile methodologies to deliver scalable and robust web applications
Implemented RESTful APIs to enhance application functionality and data exchange, improving data retrieval speed by 25% and ensuring seamless integration with frontend components.
Assisted in the deployment and maintenance of applications on cloud platforms.

PROJECTS

Rig-Net – Html, Scss, PHP, JavaScript 
(August 2023)
Designed and developed a web page for the application launch of Rig-Net, a company creating a LinkedIn-like platform for the oil industry.
My role: Designing and developing the web page.
InnovateYou @ Hackathon – Python, Flask, LMstudio, llama2, Vtube for Digital Avatar, OpenAI Library 
(February 2024)
AI-based visual teacher to help introvert students clear their doubts from home. 
Achievement: Selected as a top 20 participant among 200 participants.
CodeMent @ Hackathon – Unity, Python, Streamlit, Google Generative AI, Google Gemini API 
(April 2024)
Created an AR app to visualize diagrams more easily; users scan images from textbooks, and the app displays related 3D models for better understanding.
My role: Created a web app to read and provide details about specific scanned diagrams.
RAG Notebook – Python, Streamlit, Ollama, Langchain, PyPDF2, ChromaDB 
(May 2024)
An application that reads long PDFs and provides output based on the data inside. It breaks documents into multiple chunks, processes them with LLM, and gives responses according to the document.
Integrated advanced natural language processing techniques to improve the accuracy of responses.
Developed a user-friendly interface for seamless document upload and processing.
EduChat – Angular, Tailwind, RESTful API, TypeScript, SCSS 
(September 2023)
Developed a chatbot to help students learn different programming languages.
My role: Created the frontend and managed logging APIs.

About Me

Passionate and dedicated UI/UX Developer with over 2 years of experience in Python programming, web development, and designing user-centric applications.
Skilled in Angular, Tailwind CSS, and RESTful API integration.
Proven track record of improving user engagement by 30% through optimized UI components.
Recognized for innovative solutions in hackathons.
Proactive approach to learning new technologies.
Open-source enthusiast.

Skills

• Languages: Python, C++, Javascript, C
• Technologies:  Angular, React, Restful API, Flask, Tailwind, Bootstrap, postman, Figma, Node, MongoDB, Streamlit, LangChain, IoT, Git, JIRA, Linux.
• Concepts: Object-orientated programming, Search Engine Optimization,  Agile, Kanban

EDUCATION

SAVITRIBAI PHULE UNIVERSITY Siddhant College of engineering
UnderGraduate in Information Technology: (2022 – 2026) 


SANT GADGE BABA AMRAVATI UNIVERSITY Shri.Radhakisan Laxminarayan Toshniwal college of science
Higher Secondary Certificate: (2019-2021) percentage: 86.60%






from now on user questions starts
${message}`;
        res = await chat.sendMessage(longPrompt);
        firstMessageSent = true; // Set flag to indicate first message is sent
    } else {
        res = await chat.sendMessage(message);
    }
    res = await res.response;
    console.log(res);
    let html = conv.makeHtml(res.text());
    addMessage(html, "start");
}

const addMessage = (msg, direction) => {
    const messageHolder = document.getElementById("messageHolder");
    const message = document.createElement("div");
    const colour = direction !== "start" ? "blue" : "green";
    message.innerHTML = `
    <div class="flex flex-col items-${direction}">
            <div class="bg-${colour}-500 px-4 py-2 rounded-md text-white w-fit 
            max-w-4xl mb-1">${msg}</div>
        </div>
    `
    messageHolder.appendChild(message);
}

const messageInput = document.getElementById("chat");
const sendBtn = document.getElementById("btn");

sendBtn.addEventListener("click", function() {
    const message = messageInput.value;
    chatGemini(message);
    messageInput.value = "";
});

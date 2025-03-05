const textSpace = document.querySelector("#text_space") ;
const button = document.querySelector("#send_button") ;
const textArea = document.querySelector("#text_area") ;


//disable the send button
button.style.disable = true;

textArea.addEventListener("click", () => {
    button.style.disable = false;
    button.style.color = "#fff" ;
    
    
});
button.addEventListener("click", () => {
    let user_input = textArea.value ;
    
    //create two paragraph elements
    const user_text = document.createElement("p") ;
    const bot_text = document.createElement("p") ;
    
    //set user paragraph 
    user_text.setAttribute("class", "chat_paragraphs") ;
    user_text.setAttribute("id", "user_message");
    textSpace.appendChild(user_text) ;
    user_text.textContent = user_input ;
    
    //set bot paragraph 
    bot_text.setAttribute("class", "chat_paragraphs") ;
    bot_text.setAttribute("id", "bot_message") ;
    textSpace.appendChild(bot_text)
    bot_text.textContent ="My Name is Vercel, an AI model developed by LANTEX ." ;
    
    
});



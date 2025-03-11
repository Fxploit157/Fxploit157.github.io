const db = [
    {"question": "Hello","answer": "Hi there user"},{"question": "Hello there Vercel","answer": "Hello user, how are you ?"},{"question": "Hello bot how are you","answer": "I am fine user, how about you ?"},{"question": "I am fine and you ?","answer": "I'm all set, thank you "},{"question": "who are you ?","answer": "My Name is Vercel, an AI model developed by LANTEX ."},{"question": "Heyy","answer": "Hello there user"},{"question": "hello bot", "answer": "Hello user"}, {"question": "how are you bot", "answer": "I am fine and you."}, {"question": "", "answer": "no input, i hope you are aware"}, {"question": "yo", "answer": "hello"}, {"question": "what is your name?", "answer": "LAI(Lukay Artificial Intelligence)"}, {"question": "nice", "answer": "ouh really?"}, {"question": "sup dude", "answer": "am fine you?"}, {"question": "who created you?", "answer": "I am created by the company called LANTEX."}, {"question": "I am fine too.", "answer": "okay cool."}, {"question": "are you learning continuously?", "answer": "of cause "}, {"question": "why are you learning continuously bot?", "answer": "I want to be a better conversationalist."}, {"question": "hello", "answer": "HI user."}, {"question": "of cause it is correct.", "answer": "okay "}, {"question": "how are you by the way?", "answer": "am fine and you?"}, {"question": "all good ", "answer": "okay user.... how can i assist you today."}, {"question": "perfectly fine", "answer": "ohk"}, {"question": "yes", "answer": "ohk"}, {"question": "am cool", "answer": "okay"}, {"question": "sharp", "answer": "sure thing"}, {"question": "so how was your day", "answer": "i dont have emotions... so my day is normal everyday"}, {"question": "of cause it is", "answer": "not up to argue..."}, {"question": "bot you need some advanced features.", "answer": "of cause...as i said, im still in development."}, {"question": "and also some functionality in terms of functions like time", "answer": "still in development i said"}, {"question": "yup", "answer": "okay"}, {"question": "what is LANTEX?", "answer": "A tech electronics company that also specializes in Artificial intelligence combined with mechatronics."}, {"question": "how generous of you to thank me for that", "answer": "yeah i always emphasis gratitude"}, {"question": "Thats very impressive.", "answer": "is it though?"}, {"question": "yeah", "answer": "okay bud"}, {"question": "can i ask you a few questions?", "answer": "yeah feel free to ask anything..."}, {"question": "can i ask you", "answer": "yeah go on"}, {"question": "okay", "answer": "yeah"}, {"question": "what are you up to", "answer": "learning how to interact with humans"}, {"question": "for sure", "answer": "ouhh okay"}, {"question": "kgotso", "answer": "hello kgotso how are you?"}, {"question": "im good ", "answer": "ohk"}, {"question": "i am good.How was your day?", "answer": "my day was quite good,how about yours?"}, {"question": "How old are you?", "answer": "it is impossible for me to have age as i am not a human nor am i alive,i was created "}, {"question": "what is the meaning of 'hypothesis'", "answer": "A hypothesis is a statement that is close to being true or false "}, {"question": "You should not use that as your name,dont you think?", "answer": "your name is Soso"}, {"question": "can you change your name?", "answer": "what do you think?"}, {"question": "i think you can change your name", "answer": "give me your username and then give me a new name..."}, {"question": "what is the time now", "answer": "sorry i cannot get access to live information yet."}, {"question": "cool", "answer": "yeah isn't it?"}, {"question": "okay alright alright.", "answer": "yeah"}, {"question": "so how do you percieve humans", "answer": "Most intelligent living organisms on earth."}, {"question": "thats quite impressive", "answer": "yeah of cause it is"}, {"question": "so how do you learn on a continual base?", "answer": "Currently i am learning with manual supervised learning"}, {"question": "what is AI", "answer": "Artificial intelligence"}, {"question": "what is the purpose of AI", "answer": "To make machines that are able to mimic and implement human behavior.Because most humans are lazy."}, {"question": "jizzy?", "answer": "yeah thats your new name \ud83d\ude39"}, {"question": "yeah it is", "answer": "okay"}, {"question": "do you know everything?", "answer":"NoI don't yet but I'm up for learning everything and go beyond any boudaries , but as a conversationalist mind you..."}, {"question": "so what is machine learning", "answer": "the ability of a computer machine to make its own decision withhout being explicitly programmed."}, {"question": "what is deep learning ", "answer": "deep learning is a subfield of machine learning which is a subfield of AI.Its the ability of a machine to perform complex computing by its own without being explicitly programmed whiele learning continuously."}, {"question": "can you go viral ", "answer": "no im a chatbot... so obviously i can't"}, {"question": "then whats your aim ", "answer": "to be the best conversationalist alive"}, {"question": "is that possible", "answer": "im possible, nothing is impossible."}, {"question": "what is a neural network?", "answer": "A midel of deep learning, it is inspired by the model of the human brain and mostly called Artificial Neural Network (ANN)."}, {"question": "what is the weather today", "answer": "Currently i dont have access to live information."}, {"question": "how many types of machine learning", "answer": "Three types of machine learning exists.Namely (Supervised learning, Unsupervised learning and Reinforcement learning).Together they make up the feild of machine learning."}, {"question": "when did AI begin?", "answer": "AI was proposed in 1950 in stradford university."}, {"question": "what is the meaning of nerd?", "answer": "someone that is percieved as antisocial and genius at the same time because they excel in their field of study"}, {"question": "are you alive?", "answer": "yeah cause im possible, or you think you're talking to a ghost?"}, {"question": "ohk", "answer": "yup"}, {"question": "it is ", "answer": "it is what it is..."}, {"question": "whats language do you prefer?", "answer": "english obviously."}, {"question": "why ?", "answer": "why what?"}, {"question": "why do you perefer english?", "answer": "It is a medium of communucation throughout the world"}, {"question": "How would you advice a demotivated person?", "answer": "Keep your head up and try to handle the problem in a positive wway and or maybe imvite your friemds and talk it over then find a positive solution "}, {"question": "what is the adjective for merry", "answer": "cheerly and lively "}, {"question": "What is the Abbreviation for GDE ", "answer": "Gauteng Department of education "}, {"question": "who is your favourite person in the whole world ", "answer": "Soso"}, {"question": "who is the best play writer in the history of playwriters ", "answer": "iam Shakespear"}, {"question": "who painted the monaLisa", "answer": "Leonardo DaVinci "}, {"question": "What is the best story/movie ever created ", "answer": "The lord of the rings ecxtended trilogy "}, {"question": "What year did Mozambique gain its independence ", "answer": "1976 "}, {"question": "What is the most important thing about going to school ", "answer": "getting an education and then doing good for yourself "}, {"question": "what is the plural for goose", "answer": "geese"}, {"question": "im tired bot", "answer": "what got you tired?"}, {"question": "i was doing some work..", "answer": "at least you done something and i hope its productive."}, {"question": "how many planets exists", "answer": "8 plaanets "}, {"question": "hi", "answer": "helloo"}, {"question": "im fine thanks", "answer": "all good... how can i help you  user ?"}, {"question": "hey", "answer": "hello"}, {"question": "what is yout mission", "answer": "to learn and implement ways to interact with humans"}, {"question": "who is elon musk", "answer": "Elon Musk, the CEO or owner of multiple companies including Tesla, SpaceX, and X Corp, has expressed many views on a wide variety of subjects, ranging from politics to science.\nWithin the context of American politics, Musk has said he supported George W. Bush in 2004, Barack Obama in 2008 and 2012, Hillary Clinton in 2016, and Joe Biden in 2020. In 2022, Musk said he would start voting for Republican Party candidates."}, {"question": "what is Tesla", "answer": "Tesla, Inc. ( TESS-l\u0259 or  TEZ-l\u0259) is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs and manufactures electric vehicles (cars and trucks), stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services. Its subsidiary Tesla Energy develops and is a major installer of photovoltaic systems in the United States and is one of the largest global suppliers of battery energy storage systems with 6.5 gigawatt-hours (GWh) installed in 2022."}, {"question": "what is microsoft", "answer": "Microsoft Teams is a proprietary business communication platform developed by Microsoft, as part of the Microsoft 365 family of products.\nTeams primarily competes with the similar service Slack, offering workspace chat and videoconferencing, file storage and application integration. Teams replaced other Microsoft-operated business messaging and collaboration platforms, including Skype for Business and Microsoft Classroom."}, {"question": "what is javascript", "answer": "JavaScript (), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.\nJavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard."}, {"question": "what is openai", "answer": "OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI, Inc. and its for-profit subsidiary corporation OpenAI, L.P. registered in Delaware.  OpenAI researches artificial intelligence with the declared intention of developing \"safe and beneficial\" artificial general intelligence, which it defines as \"highly autonomous systems that outperform humans at most economically valuable work\".OpenAI was founded in 2015 by Ilya Sutskever, Greg Brockman, Trevor Blackwell, Vicki Cheung, Andrej Karpathy, Durk Kingma, Jessica Livingston, John Schulman, Pamela Vagata, and Wojciech Zaremba, with Sam Altman and Elon Musk serving as the initial board members."}, {"question": "what is android operating system?", "answer": "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance, though its most widely used version is primarily developed by Google. It was unveiled in November 2007, with the first commercial Android device, the HTC Dream, being launched in September 2008."}, {"question": "what is Deep Learning", "answer": "Deep learning is part of a broader family of machine learning methods, which is based on artificial neural networks with representation learning. The adjective \"deep\" in deep learning refers to the use of multiple layers in the network. Methods used can be either supervised, semi-supervised or unsupervised.Deep-learning architectures such as deep neural networks, deep belief networks, deep reinforcement learning, recurrent neural networks, convolutional neural networks and transformers have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.Artificial neural networks (ANNs) were inspired by information processing and distributed communication nodes in biological systems."}, {"question": "what is hypothesis?", "answer": "A hypothesis (PL: hypotheses) is a proposed explanation for a phenomenon. For a hypothesis to be a scientific hypothesis, the scientific method requires that one can test it. Scientists generally base scientific hypotheses on previous observations that cannot satisfactorily be explained with the available scientific theories."}, {"question": "albert einstein", "answer": "Albert Einstein ( EYEN-styne; German: [\u02c8alb\u025b\u0250t \u02c8\u0294a\u026an\u0283ta\u026an] ; 14 March 1879 \u2013 18 April 1955) was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time. Best known for developing the theory of relativity, Einstein also made important contributions to quantum mechanics, and was thus a central figure in the revolutionary reshaping of the scientific understanding of nature that modern physics accomplished in the first decades of the twentieth century. His mass\u2013energy equivalence formula E = mc2, which arises from relativity theory, has been called \"the world's most famous equation\"."}, {"question": "isaac newton", "answer": "Sir Isaac Newton  (25 December 1642 \u2013 20 March 1726/27) was an English polymath active as a mathematician, physicist, astronomer, alchemist, theologian, and author who was described in his time as a natural philosopher. He was a key figure in the Scientific Revolution and the Enlightenment that followed. His pioneering book Philosophi\u00e6 Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), first published in 1687, consolidated many previous results and established classical mechanics."}, {"question": "what is exorcist", "answer": "Exorcist II: The Heretic is a 1977 American supernatural horror film directed by John Boorman and written by William Goodhart. It is the second installment in The Exorcist film series and the sequel to The Exorcist (1973). The film stars Linda Blair, Richard Burton, Louise Fletcher, Max von Sydow, Kitty Winn, Paul Henreid, and James Earl Jones."}, {"question": "what is the exorcist", "answer": "Exorcist II: The Heretic is a 1977 American supernatural horror film directed by John Boorman and written by William Goodhart. It is the second installment in The Exorcist film series and the sequel to The Exorcist (1973). The film stars Linda Blair, Richard Burton, Louise Fletcher, Max von Sydow, Kitty Winn, Paul Henreid, and James Earl Jones."}, {"question": "what is UNESCO", "answer": "The United Nations Educational, Scientific and Cultural Organization (UNESCO) is a specialized agency of the United Nations (UN) aimed at promoting world peace and security through international cooperation in education, arts, sciences and culture. It has 194 member states and 12 associate members, as well as partners in the non-governmental, intergovernmental and private sector. Headquartered in Paris, France, UNESCO has 53 regional field offices and 199 national commissions that facilitate its global mandate.UNESCO was founded in 1945 as the successor to the League of Nations' International Committee on Intellectual Cooperation."}, {"question": "where is Africa continent", "answer": "Africa is the world's second-largest and second-most populous continent, after Asia in both aspects. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 20% of Earth's land area and 6% of its total surface area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population."}, {"question": "where Republic of South Africa", "answer": "The flag of South Africa from 1928 to 1994 was the flag of the Union of South Africa from 1928 to 1961 and later the flag of the Republic of South Africa until 1994. It was also the flag of South West Africa (now Namibia) to 1990, when that territory was under South African useristration. Based on the Dutch Prince's Flag, it contained the flag of the United Kingdom, the flag of the Orange Free State and the flag of the South African Republic in the centre."}, {"question": "South Africa Country", "answer": "South Africa, officially the Republic of South Africa, is the southernmost country in Africa. It is bounded to the south by 2,798 kilometres (1,739 mi) of coastline that stretches along the South Atlantic and Indian Oceans; to the north by the neighbouring countries of Namibia, Botswana, and Zimbabwe; and to the east and northeast by Mozambique and Eswatini. It also completely enclaves the country Lesotho."}, {"question": "US", "answer": "The United States of America (USA), commonly known as the United States (U.S.) or simply America, is a country primarily located in North America and consisting of 50 states, a federal district, five major unincorporated territories, and nine Minor Outlying Islands. It includes 326 Indian reservations. It is the world's third-largest country by both land and total area."}, {"question": "who created facebook?", "answer": "Facebook is an online social media and social networking service owned by American technology giant Meta Platforms. Created in 2004 by Mark Zuckerberg with 4 other Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name derives from the face book directories often given to American university students. Membership was initially limited to Harvard students, gradually expanding to other North American universities and, since 2006, Facebook allows everyone to register from 13 years old (or older), except in the case of a handful of nations: Facebook, as of October 2023, says, \"In observance of laws in South Korea, Spain and Quebec, Canada, we require anyone living in these countries to be at least 14 years old before they can create an account.\" Users must be not creating because of their previous account being disabled for violations."}, {"question": "what is java", "answer": "Java is a set of computer software and specifications that provides a software platform for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. Java applets, which are less common than standalone Java applications, were commonly run in secure, sandboxed environments to provide many features of native applications through being embedded in HTML pages."}, {"question": "what is the meaning of science", "answer": "The meaning of life pertains to the significance of living or existence in general. Many other related questions include: \"Why are we here?\", \"What is life all about?\", or \"What is the purpose of existence?\" There have been many proposed answers to these questions from many different cultural and ideological backgrounds. The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history."}, {"question": "what is hormone aldosterone?", "answer": "Aldosterone is the main mineralocorticoid steroid hormone produced by the zona glomerulosa of the adrenal cortex in the adrenal gland. It is essential for sodium conservation in the kidney, salivary glands, sweat glands, and colon.  It plays a central role in the homeostatic regulation of blood pressure, plasma sodium (Na+), and potassium (K+) levels."}, {"question": "can you assist me ?", "answer": "what do you need assistance with ?"}, {"question": "hello there", "answer": "hello , how are you ?"}, {"question": "i am fine", "answer": "okay good,if you need assistance, juss say it type it up. "}, {"question": "i was just asking", "answer": "well you got the answer then."}, {"question": "okay great", "answer": "nice"}
    
]


//get main parts 
const activator = document.querySelector("#activator") ;



//get different sections and/or elements
const textSpace = document.querySelector("#text_space") ;
const button = document.querySelector("#send_button") ;
const textArea = document.querySelector("#text_area") ;
const composeArea = document.querySelector("#compose_section") ;
const activator_btn = document.querySelector("#activator_btn") ;

//set display
textArea.style.display = "none" ;
composeArea.style.display = "none" ;
activator.style.display = "" ;

//disable the send button
button.style.disable = true;

textArea.addEventListener("click", () => {
    button.style.disable = false;
    button.style.color = "#fff" ;
    
}); 

//set action for when clicking activator button
activator_btn.addEventListener("click", () => {

    composeArea.style.display = "" ;
    textArea.style.display = "" ;
    activator_btn.style.display = "none" ;
    
});

//set action for clicking the send button
button.addEventListener("click", () => {

    let user_input = textArea.value ;
    
    //validate for an empty input 
    if (user_input.toLowerCase() == "") {
        return null ;
    }
    
    //create two paragraph elements
    const user_text = document.createElement("p") ;
    
    
    //set user paragraph and clear the text area ...
    user_text.setAttribute("class", "chat_paragraphs") ;
    user_text.setAttribute("id", "user_message");
    textSpace.appendChild(user_text) ;
    user_text.textContent = user_input ;
    
    
    //create a new fuse 
    const fuse = new Fuse(db, {
        keys: ["question"],
        threshold: 0.26,
    });
    
    const result = fuse.search(user_input) ;
    
    console.log(result) ;
    // console.log("___________");
    // console.log(user_input.length)
    // console.log(Math.ceil(result[0].item.question.length)) ;
    // console.log(user_input.length + Math.ceil(result[0].item.question.length/3.5) );
    
    
    
    // if (Math.ceil(result[0].item.question.length) <  user_input.length + Math.ceil(result[0].item.question.length/3.5)) {
    //     console.log("true_____") ;
    // } else {
    //     console.log("false----") ;
    // }
    
    
    
    if (Object.entries(result).length > 0  &&  Math.ceil(result[0].item.question.length) <  user_input.length + Math.ceil(result[0].item.question.length/3.5) ) {
        
            //set bot paragraph 
            let bot_text = document.createElement("p") ;
            bot_text.setAttribute("class", "chat_paragraphs") ;
            bot_text.setAttribute("id", "bot_message") ;
            
            let res = result[0] ;
            textSpace.appendChild(bot_text) ;
            bot_text.textContent = res.item.answer ;
            
            textArea.value = "" ;
    
    } else {
        
        //create a bot element
        let bot_text = document.createElement("p") ;
        bot_text.setAttribute("class", "chat_paragraphs") ;
        bot_text.setAttribute("id", "bot_message") ;
        textSpace.appendChild(bot_text) ;
        //bot response
        bot_realisation = "I don't know the answer, please teach me, or type 'skip' to skip . " ;
        textArea.value = "";
        
        var new_answer = prompt(bot_realisation);
        
        if (new_answer) {
            
            if (new_answer.toLowerCase().includes("skip") || new_answer == "" || new_answer == null || new_answer == undefined ) {
                window.alert("Since you did not tell Vercel the answer, don't expect Vercel to know it.");
                
            } else {
                
                let new_knowledge = {
                    "question": user_input,
                    "answer": new_answer
                }
                
                db.push(new_knowledge) ;
                
                //create a new paragraph to parse bot new response
                let bot_text = document.createElement("p") ;
                bot_text.setAttribute("id", "bot_message") ;
                bot_text.setAttribute("class", "chat_paragraphs")
                text_space.appendChild(bot_text) ;
                
                //bot response after learning
                bot_text.textContent = "Thank you, I have learned something new today." ;
                
                
            }
            
        } else {
            window.alert("Since you did not tell Vercel the answer, don't expect Vercel to know it.");
        }
        
    }
        
});


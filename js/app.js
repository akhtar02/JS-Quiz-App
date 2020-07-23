var questions = [
    {
  
        "question": "Which built-in method returns the characters in a string beginning at the specified location?",
        "option1": "substr()",
        "option2": "getSubstring()",
        "option3": "slice",
        "option4": "None of the Above",
        "answer": "1"
    },
    
    {
  
        "question": "Which of the following function of String object extracts a section of a string and returns a new string?",
        "option1": "slice()",
        "option2": "split()",
        "option3": "replace()",
        "option4": "search()",
        "answer": "2"
    },
    {
  
        "question": "Which of the following function of Array object removes the last element from an array and returns that element?",
        "option1": "pop()",
        "option2": " push()",
        "option3": " join()",
        "option4": " map()",
        "answer": "2"
    },
    {
        "question": "Variavle can hold _______ value at a time",
        "option1": "single",
        "option2": "double",
        "option3": "multiple",
        "option4": "None of these",
        "answer": "1"
    },
    {
  
        "question": "var num; \n\n\n This statement  called as _______ statement",
        "option1": "declaration",
        "option2": "Instantization",
        "option3": "Globalization",
        "option4": "declaration",
        "answer": "1"
    },
    {
  
        "question": "What is the correct JavaScript syntax to write 'Hello World'?",
        "option1": "System.out.println('Hello World')",
        "option2": "println ('Hello World')",
        "option3": "document.write('Hello World')",
        "option4": "response.write('Hello World')",
        "answer": "3"
    },
    {
      "question": " JavaScript is interpreted by ______.",
      "option1": "Object",
      "option2": "Server",
      "option3": "Client",
      "option4": "None of these",
      "answer": "1"
    },
    {
  
        "question": "The _______ method of an Array object adds and/or removes elements from an array.",
        "option1": "Reverse",
        "option2": "Shift",
        "option3": "Slice",
      "option4": "Splice",
        "answer": "4"
    },
    {
  
        "question": " ______ tag is an extension to HTML that can enclose any number of JavaScript ",
        "option1": "<body>",
        "option2": "<script>",
        "option3": "<head>",
      "option4": "<title>",
        "answer": "2"
    },
    
    {
  
        "question": "JavaScript entities start with _______ and end with _________.",
        "option1": " Semicolon, colon ",
        "option2": " Semicolon, Ampersand",
        "option3": "Ampersand, colon",
        "option4": "Ampersand, Semicolon",
        "answer": "4"
    }
  ];
  
  
  var currentQuestion = 0;
  var score = 0;
  var totalQuestion = questions.length;
  var mainQuizContainer = document.getElementById('mainQuizContainer');
  var questionMain = document.getElementById('question');
  var opt1 = document.getElementById('option1');
  var opt2 = document.getElementById('option2');
  var opt3 = document.getElementById('option3');
  var opt4 = document.getElementById('option4');
  var nextBtn = document.getElementById('nextBtn');
  var resultCont = document.getElementById('result');
  var startAgain = document.getElementById('startAgain');
  var displayFailPass = document.getElementById('displayFailPass');
  var scoresGet = document.getElementById('scoresGet');
  
  
  
  /*
  function loadQuestion(a){
      for(i=questions[a]; i<=totalQuestion; i++)
      questionMain.textContent = i.question;
      opt1.textContent=i.option1;
      opt2.textContent=i.option2;
      opt3.textContent=i.option3;
  }
  */
  
  function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionMain.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
  };
  
  function loadNQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption == null) {
        alert('Please select your answer!');
        return;
    }
  
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
  
    if (currentQuestion == totalQuestion) {
        mainQuizContainer.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent =  score + " " + ' / ' + " 10"
        startAgain.style.display = 'block';
        displayFailPass.style.display = 'none';
        scoresGet.style.display = 'block';
  
        return;
  
    }
    if (score >= 6) {
        scoresGet.innerHTML = "<b>'Congratulation You Passed'</b>";
    }
    else {
        scoresGet.innerHTML = "<i>'Sorry You Failed'</i>";
    }
  
    loadQuestion(currentQuestion);
  }
  
  
  loadQuestion(currentQuestion);
  
  
  function go() {
    location = 'index.html';
  }
// create a general div
const questions = document.createElement("div");
// give ID to questions div
questions.id = "questions";

// create a question form div
let questionForm = document.createElement("div");
// give ID to question form div
questionForm.id = "questionForm";

// append question form div to general div
questions.append(questionForm);

//create a answer div
const answerBox = document.createElement("div");
// give ID to answerBox div
answerBox.id = "answerBox";

// append answerBox div to general div
questions.append(answerBox);

// create a answer divs
const answer1 = document.createElement("div");
const answer2 = document.createElement("div");
const answer3 = document.createElement("div");
const answer4 = document.createElement("div");
const answer5 = document.createElement("div");
const answer6 = document.createElement("div");

// give class name to answer divs
answer1.className = "answer";
answer2.className = "answer";
answer3.className = "answer";
answer4.className = "answer";
answer5.className = "answer";
answer6.className = "answer";

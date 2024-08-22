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

// append answer divs to answer box div
answerBox.append(answer1);
answerBox.append(answer2);
answerBox.append(answer3);
answerBox.append(answer4);
answerBox.append(answer5);
answerBox.append(answer6);

// create a img element
let questionImg = document.createElement("img");
// add src attribute to questionImg
questionImg.setAttribute("src", "#");
// add alt attribute to questionImg
questionImg.setAttribute("alt", "#");

// append questionImg to questionForm div
questionForm.append(questionImg);

// create a img element for answers
let answerImg1 = document.createElement("img");
let answerImg2 = document.createElement("img");
let answerImg3 = document.createElement("img");
let answerImg4 = document.createElement("img");
let answerImg5 = document.createElement("img");
let answerImg6 = document.createElement("img");

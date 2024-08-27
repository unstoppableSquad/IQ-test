// create 1 to 12 question card
for (let i = 0; i < 12; i++) {
  // create a general div
  const questions = document.createElement("div");
  // give ID to questions div
  questions.className = "questions";

  // create a question form div
  let questionForm = document.createElement("div");
  // give ID to question form div
  questionForm.className = "questionForm";

  // append question form div to general div
  questions.append(questionForm);

  //create a answer div
  const answerBox = document.createElement("div");
  // give ID to answerBox div
  answerBox.className = "answerBox";

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

  // add src attribute to answers
  answerImg1.setAttribute("src", "#");
  answerImg2.setAttribute("src", "#");
  answerImg3.setAttribute("src", "#");
  answerImg4.setAttribute("src", "#");
  answerImg5.setAttribute("src", "#");
  answerImg6.setAttribute("src", "#");
  // add alt attribute to answers
  answerImg1.setAttribute("alt", "#");
  answerImg2.setAttribute("alt", "#");
  answerImg3.setAttribute("alt", "#");
  answerImg4.setAttribute("alt", "#");
  answerImg5.setAttribute("alt", "#");
  answerImg6.setAttribute("alt", "#");
  // add class name to answers
  answerImg1.classList = images;
  answerImg2.classList = images;
  answerImg3.classList = images;
  answerImg4.classList = images;
  answerImg5.classList = images;
  answerImg6.classList = images;

  // append answerImg to answer div
  answer1.append(answerImg1);
  answer2.append(answerImg2);
  answer3.append(answerImg3);
  answer4.append(answerImg4);
  answer5.append(answerImg5);
  answer6.append(answerImg6);
  document.body.append(questions);
}
// create 12 to 30 question card
for (let J = 0; J < 5; J++) {
  // create a general div
  const questions = document.createElement("div");
  // give ID to questions div
  questions.className = "questions";

  // create a question form div
  let questionForm = document.createElement("div");
  // give ID to question form div
  questionForm.className = "questionForm";

  // append question form div to general div
  questions.append(questionForm);

  //create a answer div
  const answerBox = document.createElement("div");
  // give ID to answerBox div
  answerBox.className = "answerBox";

  // append answerBox div to general div
  questions.append(answerBox);

  // create a answer divs
  const answer1 = document.createElement("div");
  const answer2 = document.createElement("div");
  const answer3 = document.createElement("div");
  const answer4 = document.createElement("div");
  const answer5 = document.createElement("div");
  const answer6 = document.createElement("div");
  const answer7 = document.createElement("div");
  const answer8 = document.createElement("div");

  // give class name to answer divs
  answer1.className = "answer";
  answer2.className = "answer";
  answer3.className = "answer";
  answer4.className = "answer";
  answer5.className = "answer";
  answer6.className = "answer";
  answer7.className = "answer";
  answer8.className = "answer";

  // append answer divs to answer box div
  answerBox.append(answer1);
  answerBox.append(answer2);
  answerBox.append(answer3);
  answerBox.append(answer4);
  answerBox.append(answer5);
  answerBox.append(answer6);
  answerBox.append(answer7);
  answerBox.append(answer8);

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
  let answerImg7 = document.createElement("img");
  let answerImg8 = document.createElement("img");

  // add src attribute to answers
  answerImg1.setAttribute("src", "#");
  answerImg2.setAttribute("src", "#");
  answerImg3.setAttribute("src", "#");
  answerImg4.setAttribute("src", "#");
  answerImg5.setAttribute("src", "#");
  answerImg6.setAttribute("src", "#");
  answerImg7.setAttribute("src", "#");
  answerImg8.setAttribute("src", "#");
  // add alt attribute to answers
  answerImg1.setAttribute("alt", "#");
  answerImg2.setAttribute("alt", "#");
  answerImg3.setAttribute("alt", "#");
  answerImg4.setAttribute("alt", "#");
  answerImg5.setAttribute("alt", "#");
  answerImg6.setAttribute("alt", "#");
  answerImg7.setAttribute("alt", "#");
  answerImg8.setAttribute("alt", "#");
  // add class name to answers
  answerImg1.classList = images;
  answerImg2.classList = images;
  answerImg3.classList = images;
  answerImg4.classList = images;
  answerImg5.classList = images;
  answerImg6.classList = images;
  answerImg7.classList = images;
  answerImg8.classList = images;

  // append answerImg to answer div
  answer1.append(answerImg1);
  answer2.append(answerImg2);
  answer3.append(answerImg3);
  answer4.append(answerImg4);
  answer5.append(answerImg5);
  answer6.append(answerImg6);
  answer7.append(answerImg7);
  answer8.append(answerImg8);
  document.body.append(questions);
}

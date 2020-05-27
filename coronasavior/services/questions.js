import base from "./base";

export async function getQuestions() {
    return await base.get("/questions/");
}

export async function sendAnswer(url, answerId) {
  return await base.post('/answerquestions/', {
    question: url,
    answers: [{ id: answerId }]
  })
}

export async function checkAnswer(url) {
  return await base.get(url)
}
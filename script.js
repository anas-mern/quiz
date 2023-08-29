let question = document.querySelector('body .question')
let choices =  document.querySelectorAll('body .choice')

let questions = [
"What is the standard distance between the target and archer in Olympics?",
"Which is the highest number on a standard roulette wheel?",
"How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
"Which is the seventh planet from the sun?",
"Which is the largest ocean on Earth?"]

let allAnswers = [
    ["22","24","32","36"],
    ["400 pounds","550 pounds","700 pounds","750 pounds"],
    ["Uranus","Earth","Pluto","Mars"],
    ["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"]
]
let trueAnswers = ["70 Meters","36","700 pounds","Uranus","Pacific Ocean"]
let score = 0
function choosen(ele) {
    let val = ele.innerText
    for (let i = 0; i < trueAnswers.length; i++) {
        if(val==trueAnswers[i]){
            ele.style.border = "green 1px solid"
            ele.style.backgroundColor = "#22c55e6a"
            i= 10
            score++
        } else{
            ele.style.border = "red 1px solid"
            ele.style.backgroundColor = "#f443366a"
        }
    }
    console.log(question)
    let index  = 1
    for (let i = 0; i < questions.length; i++) {
        if(question.textContent == questions[i]){
            index += i
            i=10
        }
    }
    question.textContent = questions[index]
    let answersNeeded = allAnswers[--index]
    if(index==4){
        for (let i = 0; i < choices.length; i++) {
            choices[i].style.display = "none"
            question.textContent = `You have answered ${score} of 5 correctly.`
        }
    } else{
        setTimeout(() => {
            for (let i = 0; i < choices.length; i++) {
                choices[i].textContent = answersNeeded[i]
                ele.style.border = "none"
                ele.style.backgroundColor = "white"
            }        
        }, 300);
    }
}
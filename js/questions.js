class Question {
  constructor(question) {
    this.questionDom = document.querySelector(".titleOfQuestion");
    this.answerDom = [
      document.querySelector("#a1"),
      document.querySelector("#a2"),
      document.querySelector("#a3"),
      document.querySelector("#a4"),
    ];

    this.correctAnswer = question.correct_answer;
    this.question = question.question;
    this.isCorrect = false;
    
    this.answers = [question.correct_answer, ...question.incorrect_answers];
    for (let i = this.answers.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = this.answers[i]
      this.answers[i] = this.answers[j] ;
      this.answers[j] = k ;
    }
  }
  

  answer(checkedElement) {
    // this.isCorrect =
    // checkedElement[0].textcontent === this.correctAnswer ? true : false;
    if(checkedElement[0].textContent == this.correctAnswer){
      this.isCorrect = true ;
      
    }
  }

  render() {
    this.questionDom.innerHTML = this.question;
    this.answerDom.forEach((ele, index) => {
      ele.innerHTML =
        `<input type="radio" name="radio" id="" />` + this.answers[index];
    });
  }
}
export default Question;
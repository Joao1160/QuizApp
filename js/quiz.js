import Final from "./final.js";
import Question from "./questions.js";

class Quiz {
  constructor(quizDom, amount, questions) {
    this.quizDom = quizDom;
    this.currentELement = document.querySelector(".current");
    this.totalELement = document.querySelector(".total");
    this.finalELement = document.querySelector(".finalResult");
    this.nextBtn = document.querySelector("#next");

    this.totalAmount = amount;
    this.answeredAmount = 0;

    this.questions = this.setQuestion(questions);
    this.nextBtn.addEventListener("click", this.nextQuestion);
    this.renderQuestion();
  }

  setQuestion(questions) {
    return questions.map((Element) => new Question(Element));
  }

  renderQuestion() {
    this.questions[this.answeredAmount].render(); // render() method from "question.js" file
    console.log(this.questions[this.answeredAmount]); 
    this.currentELement.innerHTML = this.answeredAmount + 1;
    this.totalELement.innerHTML = this.totalAmount;
  }

  nextQuestion = () => {
    const checkedElement = this.questions[this.answeredAmount].answerDom.filter(
      (ele) => ele.firstChild.checked
    );
    if (checkedElement.length == 0) {
      alert("please check your answer ...");
      // this.renderQuestion();
    } else {
      this.questions[this.answeredAmount].answer(checkedElement);
      this.answeredAmount++;
      this.answeredAmount < this.totalAmount
        ? this.renderQuestion()
        : this.endOfQuiz();
    }
  };

  endOfQuiz(){
    this.quizDom.style.display = "none";
    this.finalELement.style.display = "block";

    const correct = this.countCorrectAnswers();
    console.log("correct",correct);
    new Final(correct , this.totalAmount);
  };

  countCorrectAnswers = () => {
    let count = 0 ;
    this.questions.forEach((element) => {
      console.log("iscorrect",element);
        if(element.isCorrect){
            count++;
        }
    });
    console.log("count",count);

    return count ;
  };
};

export default Quiz;

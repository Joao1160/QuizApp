import Quiz from "./quiz.js" ;

class Setting {
  constructor() {
    this.settingDom = document.querySelector(".setting");
    this.quizDom = document.querySelector(".quiz");
    this.category = document.querySelector("#category");
    this.numberOfQuestions = document.querySelector("#nQuestions");
    this.difficullty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];
    this.quiz={};
    this.startBtn = document.querySelector("#startBtn");

    this.startBtn.addEventListener("click", this.startQuizApp);
  }
  startQuizApp = async () => {
    try {
      const amount = this.getAmount();
      const categoryID = this.category.value;
      const difficullty = this.getDifficultlly();
      const URL = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficullty}`;
      if(difficullty != false && amount != false){
        let {results} = await this.fetchData(URL);
        this.quiz = new Quiz(this.quizDom , amount , results);
        this.toSwapData();
      }
    } catch (error) {
        // console.log(this.correctAnswer);
        alert(error);
    }
  };
  toSwapData = () => {
    this.quizDom.style.display = "block";
    this.settingDom.style.display = "none";
  };
  fetchData = async (URL) => {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  };
  getDifficultlly = () => {
    const difficultly = this.difficullty.filter((ele) => ele.checked); //filter return array
    console.log(difficultly);
    if (difficultly.length === 1) {
      console.log(difficultly[0].id);
      return difficultly[0].id;
    } else {
      alert("please enter difficultlly");
      return false;
    }
  };

  getAmount = () => {
    const amount = this.numberOfQuestions.value;
    if (amount > 0 && amount <= 30) {
      return amount;
    } else {
      alert("please enter number between [1,30]");
      return false;
    }
  };
}
export default Setting;

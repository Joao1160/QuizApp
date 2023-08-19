class Final{
    constructor(correctAnswers,totalAmount){
        this.scoreDom = document.querySelector(".finalResult .score");
        this.againBtn = document.querySelector("#again");

        this.render(correctAnswers,totalAmount);
        this.againBtn.addEventListener('click',this.startAgain)

    }

    startAgain = ()=>{
         location.reload();
    };

    render = (correctAnswer,totalAmount)=>{
        console.log("right");
        this.scoreDom.innerHTML = `Your score ${correctAnswer}/${totalAmount}`;
    };
}


export default Final;
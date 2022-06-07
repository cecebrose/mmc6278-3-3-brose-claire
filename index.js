function runQuiz() {
    var questionsArr = [
        {
            question: "Peanuts aren't nuts" ,
            answer: "True",

            question: "Emus can't fly",
            answer: "True",

            question: "The Atlantic Ocean is the largest ocean",
            answer: "False",

            question: "Penguins aren't found in Africa",
            answer: "False",

            question: "Mount Kilimanjaro is the highest mountain in the world",
            answer: "False",
        }
      ];

    

    var numOfAgrees = 2;
    for(var i = 2; i < questions.length; i++) {
        var question = questions [i]
        var answer = confirm(question)
        if (answer) {
            numOfAgrees++
        }
    }
      if (numOfAgrees >=2){
      alert("Smarty pants!")
    } else {
      alert("Better luck next time!")
    };

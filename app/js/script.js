var question = document.getElementsByClassName("question");
var i, x;
for (i = 0; i < question.length; i++) {
  //add click
  question[i].addEventListener("click", function () {
    //function question
    for (var x = 0; x < question.length; x++) {
      question[x].classList.remove("active");
      question[x].nextElementSibling.classList.remove("show--answer");
    }
    //function answer
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.className == "answer show--answer") {
      answer.classList.remove("show--answer");
    } else {
      answer.classList.toggle("show--answer");
    }
  });
}
question[1].click();

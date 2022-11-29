
var answer = "006328"
var answer2 = "006328.jpg"
var next_page = "dragon/furtif/transparent/page.html"


jQuery(function () {

  alert("Féliciations . Vous avez atteint le niveau 6")

  $('#answer_form').on('submit', function (e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    validationForm();

  });
});



function validationForm() {

  line1 = $("#exampleInputEmail1").val();

  console.log("ligne1");
  console.log(line1);


  if (line1 == answer || line1 ==answer2) {
    window.location.href = next_page;

  } else {

    alert('mauvaise réponse');
  }

}


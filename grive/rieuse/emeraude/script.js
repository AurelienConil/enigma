
var answer = "C:\Users\Aurelien\Documents\Campus_numerique\aiton\enigma_win\enigma\ours\malin\honnete\abracadabra.jpg"
var next_page = "../../../coq/chanteur/roux/page.html"


jQuery(function () {

  alert("Félicitation,  vous voici au niveau 3");

  $('#answer_form').on('submit', function (e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    validationForm();

  });


});



function validationForm() {

  line1 = $("#exampleInputEmail1").val();

  console.log("ligne1");
  console.log(line1);


  if (line1 == answer) {
    window.location.href = next_page;

  } else {

    alert('mauvaise réponse');
  }

}


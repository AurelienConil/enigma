
var lorem_ipsum= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var next_page = "../../../renard/vif/kaki/page.html"


jQuery(function () {

  alert("Félicitation,  vous voici au niveau 1");

  $('#answer_form').on('submit', function (e) { //use on if jQuery 1.7+
    e.preventDefault();  //prevent form from submitting
    validationForm();

  });


});



function validationForm() {

  line1 = $("#exampleInputEmail1").val();

  console.log("ligne1");
  console.log(line1);


  if (line1 == lorem_ipsum) {
    window.location.href = next_page;

  } else {

    alert('mauvaise réponse');
  }

}


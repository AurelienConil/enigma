
var answer = "chocolat.jpg"
var next_page = "../../../hipocampe/vertueux/orange/page.html"



jQuery(function () {

  alert("Félicitation,  vous voici au niveau 4");

  $('#dropzone').on({

  
    'dragover': function(e) {
      $(this).addClass("bg-success")
        console.log("drop over")
        e.preventDefault();
        e.stopPropagation();
    },
  
    'dragleave':function(e) {
      $(this).removeClass("bg-success")
        console.log("drop leave")
        e.preventDefault();
        e.stopPropagation();
    },
    'drop': function(e) {
          console.log("file is dropped")
          e.preventDefault();
          e.stopPropagation();
          if(e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            /*UPLOAD FILES HERE*/
            const arrayFiles = Array.from(e.originalEvent.dataTransfer.files)
            console.log("file is ready")
            console.log(arrayFiles[0].name);
            validation(arrayFiles[0].name)
        }
      }
  });
  
    
});



function validation(name) {


  if (name === answer) {
    window.location.href = next_page;

  } else {

    alert('mauvaise fichier déposé');
  }

}


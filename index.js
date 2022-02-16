// Ingresar un comentario function

function keyEnter(event) {
    if (event.keyCode === 13) {
        showresult();
        console.log('enter')
    }
}

function showresult() {
    document.getElementById('result').innerHTML = '<b> Mensaje enviado, muchas gracias.</b>';
};

// Read more- Read Less function 

var more = document.getElementById("more");
    var showMore = document.getElementById("dots");
    var btnText = document.getElementById("Btn");

function showFunction() {
      
    if (more.style.display === "none") {
      more.style.display = "inline";
      btnText.innerHTML = "Read less";
      showMore.style.display = "none";
    } else {
      more.style.display = "none";
      btnText.innerHTML = "Read more";
      showMore.style.display = "inline";
    }
  };

  
var segment = document.getElementById("segment");
    var showMore = document.getElementById("points");
    var btnText = document.getElementById("myBtn");

function showFunction() {
      
    if (segment.style.display === "none") {
      segment.style.display = "inline";
      btnText.innerHTML = "Read more";
      showMore.style.display = "none";
    } else {
      segment.style.display = "none";
      btnText.innerHTML = "Read less";
      showMore.style.display = "inline";
    }
  }

  
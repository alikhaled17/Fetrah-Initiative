


function downloadImage(img) {
  var link = document.createElement('a')
  link.setAttribute('href', img.src)
  link.setAttribute('download', '')
  link.click()
}


document.getElementById("muslim-image").addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    document.getElementById("show-style01").setAttribute("src",  reader.result);
    document.getElementById("show-style02").setAttribute("src",  reader.result);
    document.getElementById("show-style03").setAttribute("src",  reader.result);
  };
  reader.readAsDataURL(e.target.files[0]);
})


document.querySelectorAll(".download-style").forEach((btn) => {


  btn.addEventListener("click", () => {
    var node = btn.parentNode.querySelector('.final-image');
    
    if (node.querySelector("img").getAttribute('src') != "./assets/img/DEFAULT.jpg") {
      console.log("hi");
      btn.classList.add("active");
      
      htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        downloadImage(img)
        btn.classList.remove("active");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    } else {
      alert("Please add your photo!")
    }
  })

})

let w = 100;

document.querySelector(".zoom-out").addEventListener("click", () => {
  document.querySelectorAll(".style-container img").forEach(i => {
    w -= 1 
    i.style.width =  `${w}%` 

    if(w>100) {
      i.style.marginLeft =  `-${(w-100)/2}%` 
    } else {
      i.style.marginLeft =  `auto`    
    }
  })
})

document.querySelector(".zoom-in").addEventListener("click", () => {
  document.querySelectorAll(".style-container img").forEach(i => {
    w += 1 
    i.style.width =  `${w}%` 
    if(w>100) {
      i.style.marginLeft =  `-${(w-100)/2}%` 
    }
  })
})
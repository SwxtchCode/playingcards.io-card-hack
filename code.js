setInterval(() => {
     for (i = 0; i < $(".Card--facedown").length; i++) {
        elem = $(".Card--facedown")[i];
 
       elem.children[1].children[0].children[0].innerText = "";
     }

     for (i = 0; i < $(".Card--facedown").length; i++) {
         elem = $(".Card--facedown")[i];
 
          cardNum = elem.children[0].children[0].children[0].style.backgroundImage
              .replaceAll(`url("`, "")
              .replaceAll(`"`, "")
              .replaceAll(`)`, "")
              .replaceAll(`/img/cards/`, "")        
              .replaceAll(`.svg`, "")
              .replace("-", " ");

        elem.children[1].children[0].children[0].innerText = cardNum;
    }
}, 1000)

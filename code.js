textColor = prompt("What do you want the text color of the text appearing over the cards to be? (color name or hex code)");

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
            .replaceAll("/img/cards-french", "")
            .replaceAll(`.svg`, "")
            .replace("-", " ")
            .replaceAll("/", "");
 
        elem.children[1].children[0].children[0].innerText = cardNum;
        elem.children[1].children[0].children[0].style.color = textColor;
    }
}, 1000);

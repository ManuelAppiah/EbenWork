function enlargeImage(element){
    //remove "enlarge" class from all the images
    var images = document.getElementsByClassName("individual");
    for (var i = 0; i < images.length; i++){
        images[i].classList.remove("enlarged");
    }

    //Add "enlarged" class to the clicked image
    element.classList.add("enlarged");
}
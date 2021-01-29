var index = 0;
var images = ['./images/img1.jpg','./images/img2.jpg', './images/img3.jpg','./images/img4.jpg','./images/img5.jpg']

function slideNext() {
  if(index < images.length -1){
    index++
  }
  else{
    index = 0
  }
  var slide = document.getElementById("slide");
  slide.src = images[index]
  

}




function slideBack() {
  if(index <= 0){
    index =  images.length - 1
  }
  else{
    index--
  }
  var slide = document.getElementById("slide");
  slide.src = images[index]
  

}

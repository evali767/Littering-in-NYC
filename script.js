/* .js files add interaction to your website */


//fact generator
var fact = document.getElementById("generate");
var oldCount = Math.floor(Math.random()*7);

var facts = [
  "It takes over 1000 years for plastic bottles to decompose.",
  "Glass can take up to 4000 years to breakdown.",
  "Cigarette butts can last 2-5 years.",
  "Plastic waste comprises 38.6% of all litter.",
  "On average, there are 152 pieces of litter for every U.S. resident.",
  "2.6 billion pieces of food packaging litter (snack bags, candy wrappers, etc.) were identified in a 2020 survey of U.S. roadways and waterways.",
  "U.S. roadways accumulate over 51 billion pieces of litter per year.",
  "An average American litters or improperly disposes of 100 plastic bottles per year."
];

fact.addEventListener("click", generate);

function generate(){
  factText.innerHTML = facts[oldCount];
  newCount = Math.floor(Math.random()*7);
  if(newCount == oldCount){
    while(newCount == oldCount){
      newCount = Math.floor(Math.random()*7);
    }
  }
  oldCount = newCount;
}
//slideshow on home page
var num = 0;
var images = [];
var time = 4000;

images[0] = "assets/beach.jpg";
images[0].alt = "Plastic bags, plastic bottles, and cigarette butts lay in a pile on the sand at a beach.";
images[1] = "assets/hedge.jpeg";
images[1].alt = "A piece of plastic meant to hold cans of drinks together is stuck around the body of a brown hedgehog.";
images[2] = "assets/1.jpg";
images[2].alt = "Trash is overflowing from a NYC trash can on a street corner.";
images[3] = "assets/2.jpg";
images[3].alt = "Four squirrels are laying in a pile on top of a white plastic bag by a small bush.";
images[4] = "assets/3.jpg";
images[4].alt = "Trash is strewn all over tall grass in front of a lake";
images[5] = "assets/4.jpg";
images[5].alt = "Plastic wrappers and leaves are floating on the surface of water.";
images[6] = "assets/5.webp";
images[6].alt = "Various plastic bottles, straws, and cans lay in a divot in the tracks of the MTA subway";
images[7] = "assets/6.jpg";
images[7].alt = "Assorted garbage including glass and plastic bottles lay in large heaps in an empty park in NYC.";

function changeImg(){
  document.slide.src = images[num];
  if(num < images.length-1){
    num++;
  }
  else{
    num = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

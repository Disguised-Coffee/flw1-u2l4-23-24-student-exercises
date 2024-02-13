let body = document.querySelector("body");

let photos = ["https://preview.redd.it/if-the-show-is-successful-what-would-be-good-seasonal-pacing-v0-pwepl905kdlb1.jpg?width=640&crop=smart&auto=webp&s=1ccf2f03a4a9cee216bfdf27fdfac95d28392fd9",
  "https://i1.wp.com/www.oxfordstudent.com/wp-content/uploads/2016/11/black-mirror-season-3-poster.png?fit=1080%2C1080&ssl=1",
  "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Grey%27s_Anatomy_Logo.svg/480px-Grey%27s_Anatomy_Logo.svg.png",
  "http://thelovelymusings.com/wp-content/uploads/2021/01/umbrella-academy.jpg"
];

let show1 = document.createElement("img")
let show2 = document.createElement("img")
let show3 = document.createElement("img")
let show4 = document.createElement("img")
let show5 = document.createElement("img")

show1.src = photos[0];
// 1. Update the src for each variable - use the line above as a reference.

let listOfImgElements = [show1, show2, show3, show4, show5]


listOfImgElements.forEach((element, i) => {
  element.src = photos[i];
  console.log(element);
})



// body.appendChild(show1);
// 2. Append each show to the body - use the line above as a reference.

listOfImgElements.forEach((element) => {
  body.appendChild(element);
  console.log("Appending a child");
});

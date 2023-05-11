fetch('./cat.json').then((response) => 
  response.json().then((result) => {
    console.log(result);

    let data = result;

    const loader = document.getElementById('loader');
    loader.style.display = 'none';

    let generate_btn = document.querySelector(".generate_btn")
    let generate_btn2 = document.querySelector(".generate_btn2")
    let generate_btn3 = document.querySelector(".generate_btn3")
    let generate_btn4 = document.querySelector(".generate_btn4")
    let generate_btn5 = document.querySelector(".generate_btn5")

    generate_btn.addEventListener("click", function(event) {
      let button = event.target.innerHTML;
      fetchData(data, button);
    });
    generate_btn2.addEventListener("click", function(event) {
      let button = event.target.innerHTML;
      fetchData(data, button);
    });
    generate_btn3.addEventListener("click", function(event) {
      let button = event.target.innerHTML;
      fetchData(data, button);
    });
    generate_btn4.addEventListener("click", function(event) {
      let button = event.target.innerHTML;
      fetchData(data, button);
    });
    generate_btn5.addEventListener("click", function(event) {
      let button = event.target.innerHTML;
      fetchData(data, button);
    });
}));

function fetchData(data, button){
   let catsImgDiv = document.querySelector(".catsImgDiv");

  //Image fetch below

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then((data)=>{
    let catsImgUrl = data[0].url

    let catsImgEl = document.createElement("img")
    catsImgEl.setAttribute('src', `${catsImgUrl}`)
    catsImgEl.classList.add("showcase")

    catsImgDiv.innerHTML = ''
    catsImgDiv.appendChild(catsImgEl)
    //console.log(JSON.parse("cat")[0].lazySnack)
  })
  .catch(err => console.log(err));

  let name = document.getElementById('name');
  let snack = document.getElementById('snack');
  let age = document.getElementById('age');

  console.log(button);
  console.log(data[button]);

  let name_index = randomInt(0, data[button].names.length - 1);

  name.innerHTML = 'Your name is ' + data[button].names[name_index];


  let snack_index = randomInt(0, data[button].snacks.length - 1);

  snack.innerHTML = 'Favorite snack: ' + data[button].snacks[snack_index];


  let age_index = randomInt(0, data[button].age.length - 1);

  age.innerHTML = 'Age: ' + data[button].age[snack_index];




}



function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  /* 
      Example Use 
          randomInt(4,10);
  */
}


/*let text = {
 "goofyNames":[
      "Jude Paw",
      "General George Pawshington",
      "Chicken Noodle"
   ]
}

let n = Math.ceil(Math.random()*cat.chaosNames.length)
cat.chaosNames[n] */
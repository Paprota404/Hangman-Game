//ma sie generować słowo i kategoria 

const words = {
    Animals: ["cat","dog","rat","fox"],
    Cities: ["moskov","warsaw","los angeles"]
}

let display = document.getElementById('display');
let category = document.getElementById('category');

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
   return arr[randomIndex];
}

function getRandomKey(obj){
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random()*keys.length)];
}

let randomKey = getRandomKey(words);
let randomItem = getRandomItem(words[randomKey]);

category.innerHTML = randomKey;

console.log(randomItem)

arrayOfletters = Array.from(randomItem);

//za kazda litere w randomItemie stworzyć nowego diva i go wyswietlic w displayu

for(let i=0;i<arrayOfletters.length;i++){
    const newDiv = document.createElement("div");
    newDiv.id = arrayOfletters[i];
    newDiv.textContent = arrayOfletters[i];
    newDiv.style.textDecoration = "underline";
    newDiv.style.display="none";
    display.appendChild(newDiv);
}

let lives = 10;
let livesScore = document.getElementById("lives");
livesScore.innerHTML = lives;
let end;
let displayed = 0;

var buttons = document.querySelectorAll("#word")

buttons.forEach(function(button){

button.addEventListener("click",function() {
    if(displayed===arrayOfletters.length){
        return
    }
    const letter = this.innerHTML; 
    console.log(letter);
    console.log(display.innerHTML);
    if(document.getElementById(letter)){
        console.log(document.getElementById(letter));
        document.getElementById(letter).style.display = "flex";
        document.getElementById(letter).removeAttribute('id');
        displayed++;
        console.log(displayed);
        if(displayed===arrayOfletters.length){
            category.innerHTML = "YOU WONNN!!";
            return
        }
    }
    else{
        lives = lives -1;
        livesScore.innerHTML = lives;
    }
    if(lives==0){
        category.innerHTML = "You lost heheh";
    }
    
})
})



//Ukryć
//Jak sie kliknie button to sprawdzić czy slowo zawiera ten znak jak tak to zycie zachowane i sie odkrywa a jak nie to minus zycia
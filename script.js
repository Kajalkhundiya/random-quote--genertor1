let quotes =[
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",

"So many books, so little time.",

"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",

"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
"Be the change that you wish to see in the world."

];
let authors =[
    "― Marilyn Monroe",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Bernard M. Baruch",
    "― Dr. Seuss",
    "― Mahatma Gandhi",
];



function handleclick(){
    let q = document.getElementById('quote')
let a = document.getElementById('author')
    

    let i = getRandomIndex(0,3)
    q.innerHTML=quotes[i]
    a.innerHTML=authors[i]
    console.log(q)
    console.log(a)
}
function getRandomIndex(min,max) {
    return Math.floor(Math.random()
    *(max-min+1)) +min;

}


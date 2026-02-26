const weapons=document.querySelectorAll(".weapon");
const battleScreen=document.querySelector("#battleScreen");
const weaponScreen=document.querySelector("#weaponScreen");
const playerImg=document.querySelector("#playerImg");
const computerImg=document.querySelector("#computerImg");
const wonEl=document.querySelector("#won");
const lostEl=document.querySelector("#lost");
const drawEl=document.querySelector("#draw");
const continueBtn=document.querySelector("#continueBtn");
const newGameBtn=document.querySelector("#newGameBtn");
let won=0;
let lost=0;
let draw=0;
const choices = ["rock","paper","scissors"];
/* ===== Weapon Click ===== */
weapons.forEach(weapon=>{
    weapon.addEventListener("click",()=>{
        const playerChoice=weapon.dataset.choice;
        const computerChoice=choices[Math.floor(Math.random()*3)];
        playerImg.src = `${playerChoice}.png`;
        computerImg.src = `${computerChoice}.png`;
        // screen switch
        weaponScreen.classList.add("hidden");
        battleScreen.classList.remove("hidden");
        if(playerChoice==computerChoice){
            draw++;
        }
        else if(
            (playerChoice=="rock"&&computerChoice=="scissors")||(playerChoice=="paper"&& computerChoice=="rock")||(playerChoice=="scissors"&& computerChoice=="paper")
        ){
            won++;
        }
        else{
            lost++;
        }
        // score update
        wonEl.innerText=won;
        drawEl.innerText=draw;
        lostEl.innerText=lost;
        

    });
});
/* ===== Continue Button ===== */
continueBtn.addEventListener("click",()=>{
    battleScreen.classList.add("hidden");
    weaponScreen.classList.remove("hidden");
});
/* ===== New Game Button ===== */
newGameBtn.addEventListener("click",()=>{
    won=0;
    draw=0;
    lost=0;
    wonEl.innerText=0;
    lostEl.innerText=0;
    drawEl.innerText=0;
    battleScreen.classList.add("hidden");
    weaponScreen.classList.remove("hidden");


});







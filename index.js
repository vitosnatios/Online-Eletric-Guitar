
for(var i=0; i < 28; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick() {
    makeSound("a"+this.innerHTML);//this "a"+ makes possible to number keys to have animation, since it isnt possible to have a ".1" css style for a 'class="1"', for example
    buttonsAnimation("a"+this.innerHTML);
});}
document.addEventListener("keypress", function(event){
    makeSound("a"+event.key)//same here
    buttonsAnimation("a"+event.key)
})
function makeSound (kiSorte) {

    switch (kiSorte) { 
        case "aZ":
            var tom1 = new Audio("sounds/Z.wav")
            tom1.play();
            break;
        case "aX":
            var tom2 = new Audio("sounds/X.wav")
            tom2.play();
            break;
        case "aC":
            var tom3 = new Audio("sounds/C.wav")
            tom3.play();
            break;
        case "aV":
            var tom4 = new Audio("sounds/V.wav")
            tom4.play();
            break;
        case "aB":
            var tom5 = new Audio("sounds/B.wav")
            tom5.play();
            break;
        case "aN":
            var tom6 = new Audio("sounds/N.wav")
            tom6.play();
            break;
        case "aM":
            var tom7 = new Audio("sounds/M.wav")
            tom7.play();
            break;
        case "aA":
            var tom8 = new Audio("sounds/A.wav")
            tom8.play();
            break;
        case "aS":
            var tom9 = new Audio("sounds/S.wav")
            tom9.play();
            break;
        case "aD":
            var tom10 = new Audio("sounds/D.wav")
            tom10.play();
            break;
        case "aF":
            var tom11 = new Audio("sounds/F.wav")
            tom11.play();
            break;
        case "aG":
            var tom12 = new Audio("sounds/G.wav")
            tom12.play();
            break;
        case "aH":
            var tom13 = new Audio("sounds/H.wav")
            tom13.play();
            break;
        case "aJ":
            var tom14 = new Audio("sounds/J.wav")
            tom14.play();
            break;
        case "aQ":
            var tom15 = new Audio("sounds/Q.wav")
            tom15.play();
            break;
        case "aW":
            var tom16 = new Audio("sounds/W.wav")
            tom16.play();
            break;
        case "aE":
            var tom17 = new Audio("sounds/E.wav")
            tom17.play();
            break;
        case "aR":
            var tom18 = new Audio("sounds/R.wav")
            tom18.play();
            break;
        case "aT":
            var tom19 = new Audio("sounds/T.wav")
            tom19.play();
            break;
        case "aY":
            var tom20 = new Audio("sounds/Y.wav")
            tom20.play();
            break;
        case "aU":
            var tom21 = new Audio("sounds/U.wav")
            tom21.play();
            break;
        case "a1":
            var tom23 = new Audio("sounds/1.wav")
            tom23.play();
            break;
        case "a2":
            var tom24 = new Audio("sounds/2.wav")
            tom24.play();
            break;
        case "a3":
            var tom25 = new Audio("sounds/3.wav")
            tom25.play();
            break;
        case "a4":
            var tom26 = new Audio("sounds/4.wav")
            tom26.play();
            break;
        case "a5":
            var tom27 = new Audio("sounds/5.wav")
            tom27.play();
            break;
        case "a6":
            var tom28 = new Audio("sounds/6.wav")
            tom28.play();
            break;
        case "a7":
            var tom29 = new Audio("sounds/7.wav")
            tom29.play();
            break;
        default: console.log(kiSorte);
    }
}
function buttonsAnimation(luckyKey){
    document.querySelector("."+luckyKey).classList.add("pressed");
    setTimeout (function(){
        document.querySelector("."+luckyKey).classList.remove("pressed");
    },200);
}
function playBackingTrack() {
    var audio = new Audio("sounds/Cbackingtrack.mp3");
    audio.play();
    audio.volume = 0.3;
    }
function stopBackingTrack(){
    window.location.reload();
}
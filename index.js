
for(var i=0; i < 28; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick() {
    makeSound(this.innerHTML);
}
document.addEventListener("keypress", function(event){
    makeSound(event.key)
})
function makeSound (key) {
    
    switch (key) { //this = o botao apertado pra ativar a funçao handleClick()
        case "Z":
            var tom1 = new Audio("sounds/Z.mp3")
            tom1.play();
            break;
        case "X":
            var tom2 = new Audio("sounds/X.mp3")
            tom2.play();
            break;
        case "C":
            var tom3 = new Audio("sounds/C.mp3")
            tom3.play();
            break;
        case "V":
            var tom4 = new Audio("sounds/V.mp3")
            tom4.play();
            break;
        case "B":
            var tom5 = new Audio("sounds/B.mp3")
            tom5.play();
            break;
        case "N":
            var tom6 = new Audio("sounds/N.mp3")
            tom6.play();
            break;
        case "M":
            var tom7 = new Audio("sounds/M.mp3")
            tom7.play();
            break;
            case "A":
                var tom8 = new Audio("sounds/A.mp3")
                tom8.play();
                break;
            case "S":
                var tom9 = new Audio("sounds/S.mp3")
                tom9.play();
                break;
            case "D":
                var tom10 = new Audio("sounds/D.mp3")
                tom10.play();
                break;
            case "F":
                var tom11 = new Audio("sounds/F.mp3")
                tom11.play();
                break;
            case "G":
                var tom12 = new Audio("sounds/G.mp3")
                tom12.play();
                break;
            case "H":
                var tom13 = new Audio("sounds/H.mp3")
                tom13.play();
                break;
            case "J":
                var tom14 = new Audio("sounds/J.mp3")
                tom14.play();
                break;
                case "Q":
                    var tom15 = new Audio("sounds/Q.mp3")
                    tom15.play();
                    break;
                case "W":
                    var tom16 = new Audio("sounds/W.mp3")
                    tom16.play();
                    break;
                case "E":
                    var tom17 = new Audio("sounds/E.mp3")
                    tom17.play();
                    break;
                case "R":
                    var tom18 = new Audio("sounds/R.mp3")
                    tom18.play();
                    break;
                case "T":
                    var tom19 = new Audio("sounds/T.mp3")
                    tom19.play();
                    break;
                case "Y":
                    var tom20 = new Audio("sounds/Y.mp3")
                    tom20.play();
                    break;
                case "U":
                    var tom21 = new Audio("sounds/U.mp3")
                    tom21.play();
                    break;
                    case "1":
                        var tom23 = new Audio("sounds/1.mp3")
                        tom23.play();
                        break;
                    case "2":
                        var tom24 = new Audio("sounds/2.mp3")
                        tom24.play();
                        break;
                    case "3":
                        var tom25 = new Audio("sounds/3.mp3")
                        tom25.play();
                        break;
                    case "4":
                        var tom26 = new Audio("sounds/4.mp3")
                        tom26.play();
                        break;
                    case "5":
                        var tom27 = new Audio("sounds/5.mp3")
                        tom27.play();
                        break;
                    case "6":
                        var tom28 = new Audio("sounds/6.mp3")
                        tom28.play();
                        break;
                    case "7":
                        var tom29 = new Audio("sounds/7.mp3")
                        tom29.play();
                        break;
            default: console.log(this.innerHTML);
    }
}
function playBackingTrack() {
    var audio = new Audio("sounds/Cbackingtrack.mp3");
    audio.play();
    audio.volume = 0.3;
    }
function stopBackingTrack(){
    window.location.reload();
}
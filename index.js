var keyArray = ["1","2","3","4","5","6","7","Q","W","E","R","T","Y","U","A","S","D","F","G","H","J","Z","X","C","V","B","N","M"];
keyArray.forEach(function(cadaTecla, index){
    if ((index+1) % 7 === 0 && index > 1 && index < 25){
        $("h4").before('<button class="a'+cadaTecla+' guitar btn btn-outline-dark">'+cadaTecla+'</button></br>');
    } else {
    $("h4").before('<button class="a'+cadaTecla+' guitar btn btn-outline-dark">'+cadaTecla+'</button>');
    }
});
for(var i=0; i < 28; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick() {
    makeSound("a"+this.innerHTML);//this "a"+ makes possible to number keys to have animation, since it isnt possible to have a ".1" css style for a 'class="1"', for example
    buttonsAnimation("a"+this.innerHTML);
});}
document.addEventListener("keypress", function(event){
    makeSound("a"+event.key.toUpperCase())//same here
    buttonsAnimation("a"+event.key.toUpperCase())
});

let distortion = false;
function setDistortion(){
    !distortion?distortion=true:distortion=false;
}

function makeSound (kiSorte) {
    let soundArray = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","Q","W","E","R","T","Y","U","1","2","3","4","5","6","7"];
    soundArray.forEach(function(cadaArray){
    if (soundArray.includes(kiSorte.slice(1))) {
    switch (kiSorte) {    
            case "a"+cadaArray:
            let tom = new Audio("sounds/"+cadaArray + (!distortion ? ".wav" : ".mp3") );
            tom.play();
            tom.volume = 0.3;
            break;
        }}})
}
function buttonsAnimation(luckyKey){
    if ( keyArray.includes(luckyKey.slice(1)) ){
    document.querySelector("."+luckyKey).classList.add("pressed");
    setTimeout (function(){
        document.querySelector("."+luckyKey).classList.remove("pressed");
    },200);
    }
}
function playBackingTrack() {
    var audio = new Audio(!distortion ? "sounds/Cbackingtrack.mp3" : "sounds/rock_maligno.mp3");
    audio.play();
    audio.volume = !distortion ? 0.3 : 0.14;
    }
function stopBackingTrack(){
    window.location.reload();
}
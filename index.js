var keyArray = ["1","2","3","4","5","6","7","Q","W","E","R","T","Y","U","A","S","D","F","G","H","J","Z","X","C","V","B","N","M"];
keyArray.forEach(function(cadaTecla){
    $("h4").before('<button class="a'+cadaTecla+' guitar btn btn-outline-dark">'+cadaTecla+'</button>');
});
for(var i=0; i < 28; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick() {
    makeSound("a"+this.innerHTML);//this "a"+ makes possible to number keys to have animation, since it isnt possible to have a ".1" css style for a 'class="1"', for example
    buttonsAnimation("a"+this.innerHTML);
});}
document.addEventListener("keypress", function(event){
    makeSound("a"+event.key)//same here
    buttonsAnimation("a"+event.key)
});
function makeSound (kiSorte) {
    let soundArray = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","Q","W","E","R","T","Y","U","1","2","3","4","5","6","7"];
    soundArray.forEach(function(cadaArray){
    switch (kiSorte) {         
            case "a"+cadaArray:
            let tom = new Audio("sounds/"+cadaArray+".wav");
            tom.play();
            break;  
        }
    });
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
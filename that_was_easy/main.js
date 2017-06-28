function saythatWasEasy() {
   var thatWasEasy = new Audio ("that_was_easy.mp3");
   thatWasEasy.play();
};
$("#easy").on("click", saythatWasEasy);
$(document).keypress(delegateKeypress);
function delegateKeypress(event)   {
    if (event.charCode == 32) {
 console.log(event.charCode);
}
    
}
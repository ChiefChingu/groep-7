var cards = $(".flip-card");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}


// function shuffle(){

//     var parent = $(".memory-game");
//     var divs = parent.children();
    
//     while (divs.length) {

//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

//     }
// }
var random_words = ["finger", "eminem", "number", "hungry", "burgerking", "bmw", "egg", "metropol", "bashir"]/*random listemiz */
var computer = Math.random()/*random bi sey secir */
computer = computer * (random_words.length - 1)
computer = Math.floor(computer)
var word = random_words[computer]//komputerin secdiyi random soz.
console.log(word)/*sozu yazdirdiq */
var wins = 0/*wins deyiskenimiz */
var lose = 0
var heart = 9
var wrong_letters = []
//****
var lettersw = []
var wordsletters = []
//****
var user = []
var user_dicriminated = []


for (c of word) {
    lettersw.push(c)

}
lettersw.forEach(function (value) {
    if (wordsletters.indexOf(value) == -1) wordsletters.push(value);
});
console.log(wordsletters)
// our function
function userinput(input){
    userchoose = input.key
    console.log(userchoose)
    for (x of word){
        if(x == userchoose){
            user.push(userchoose)
            
        }
        
        
    }
    if( x!= userchoose){
        heart -=1
        console.log(heart)
        document.getElementById("Hearts").innerHTML = ("Guesses Left : " + heart)
    }
    if(heart == 0){
        
    }
    user.forEach(function (value) {
    if (user_dicriminated.indexOf(value) == -1) user_dicriminated.push(value);
});
    console.log(user)
    console.log(user_dicriminated)
    if(user_dicriminated.length == wordsletters.length){{
        alert("You won dude!")
        alert("Reset page for new game")
        
    }}
}

window.onkeypress = userinput




//1.0-->Sozu goturduk.+
//1.1-->Sozu herflerine ayirdiq+
//1.2-->Sozu her herfden 1 dene olacaq sekilde wordsletters listine atdiq.+
//1.3-->User inputunu aldiq+
//1.4-->Eger sozdeki herfler ile ,input ust uste dusurse onu arraya push etdik+
//1.5 -->Push etdiymiz arraydaki herfleri yeni bir arraya elave etdik hansiki tekrarlanma yoxdur.
//1.6-->Sonuncu elave edilen array ile ,1.4 maddesinde qeyd etdiyimiz arrayin uzunluqlarini yoxladiq eger beraberdirse soz tapilib!
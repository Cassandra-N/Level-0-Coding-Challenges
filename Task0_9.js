function getVowels(string){

    var stringArray = string.split("");
    var vowelsArray = [];

    for (var i = 0; i < stringArray.length; i++){
        if(stringArray[i].toLowerCase() == "a" || stringArray[i].toLowerCase() == "e"
        || stringArray[i].toLowerCase() == "i" || stringArray[i].toLowerCase() == "o"
        || stringArray[i].toLowerCase() == "u"){
            
            vowelsArray.push(stringArray[i].toLowerCase());
        }
    } 
    
    var finalVowels = [];
    
    for (var i = 0; i < vowelsArray.length; i++){
        if(!(finalVowels.includes(vowelsArray[i]))){
            finalVowels += vowelsArray[i];
            if(i < vowelsArray.length -1){
                finalVowels += ",";
            }
        }
    }

    if(finalVowels.length > 1){
        console.log("Vowels: " + finalVowels);
    }
    else {
        console.log("Vowel: " + finalVowels);
    } 
}

getVowels("Umuzi");
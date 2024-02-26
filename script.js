function convert(){
    let number = document.getElementById("number").value;
    if(number == ''){
        document.getElementById("output").innerHTML = "Please enter a valid number";

    }else{
        if(number > 0){
            if(number >=4000){
                document.getElementById("output").innerHTML = "Please enter a number less than or equal to 3999";

            }else{
                let result = convertToRoman(number);
                console.log(result);
                document.getElementById("output").innerHTML = result;
            }

        }else{
            document.getElementById("output").innerHTML = "Please enter a number greater than or equal to 1";

        }
    }
}

function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
}


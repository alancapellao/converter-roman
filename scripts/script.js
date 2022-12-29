var input = document.querySelector(".input");

function Convert() {

    var num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var n = input.value;

    if (n <= 0 || n > 3999) {
        document.querySelector(".res").innerHTML = "ERRO";
    } else {

        var i = 0;
        var romano = "";

        while (n > 0) {
            if (n >= num[i]) {
                romano += rom[i];
                n -= num[i];
            } else {
                i++;
            }
        }
        document.querySelector(".res").innerHTML = romano;
    }
}

function Refresh() {

    if (document.querySelector(".res").textContent.length > 0) {

        document.querySelector(".res").innerHTML = " ";
    }

}
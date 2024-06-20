var length = document.getElementById("length");
var weight = document.getElementById("weight");
var result = document.getElementById("result");

document.getElementById("click").addEventListener("click", function () {

    document.querySelector("p").style.display="block"
    setTimeout(function () {
        var calc = new Promise(function (resolve, reject) {
            if (length.value == 0 || weight.value == 0) {
                reject();
            } else {
                resolve();
            }
        }).then(() => {
            let bmi = length.value / weight.value;
            result.value = bmi;
            length.value = "";
            weight.value = "";
            document.querySelector("p").style.display = "none"
        }).catch(() => {
            alert("Don't enter zero please");
            length.value = "";
            weight.value = "";
            result.value = "";
            document.querySelector("p").style.display = "none"

        });
    }, 2000); 
});

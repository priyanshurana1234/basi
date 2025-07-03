let input1 = document.getElementsByClassName("text1")
let btn = document.querySelectorAll('button')
let num1 = 0;

input1[0].addEventListener('input', () => {
    num1 = parseInt(input1[0].value)
})
function operation(e) {
    switch (e.target.value){
        case "AC": input1[0].value ="0"; break
        case "DEL":
            input1[0].value = input1[0].value.slice(0, -1);
            break;
        case "%":

            if (input1[0].value?.slice(-1) != "%") {
                input1[0].value += "%";
            }
            break;
        case "/":  if (input1[0].value?.slice(-1) != "/") {
                input1[0].value += "/";
            }
            break;
        case "7": input1[0].value += "7"; break;
        case "8": input1[0].value += "8"; break;
        case "9": input1[0].value += "9"; break;
        case "*": if (input1[0].value?.slice(-1) != "*") {
                input1[0].value += "*";
            }break;
        case "4": input1[0].value += "4"; break;
        case "5": input1[0].value += "5"; break;
        case "6": input1[0].value += "6"; break;
        case "-": if (input1[0].value?.slice(-1) != "-") {
                input1[0].value += "-";
            } break;
        case "1": input1[0].value += "1"; break;
        case "2": input1[0].value += "2"; break;
        case "3": input1[0].value += "3"; break;
        case "+":  if (input1[0].value?.slice(-1) !="+") {
                input1[0].value += "+";
            } break;
        case "00": input1[0].value += "00"; break;
        case "0": input1[0].value += "0"; break;
        case ".": if (input1[0].value?.slice(-1) != ".") {
                input1[0].value += ".";
            } break;
        case "=": input1[0].value += "0"; break;

    }
}

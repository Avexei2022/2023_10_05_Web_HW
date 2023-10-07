function task_calc() {
    let a = check_int('первое');
    let b = check_int('второе');
    alert(act_calc(a, b));
}

function check_int(message) {
    let num;
    let flag = true;
    while (flag) {
        num = parseInt(prompt(`Введите ${message} число: `));
        (!isNaN(num)) ? flag = false : alert("Вы ввели не число!");
    }
    return num;
}

function act_calc(a, b) {
    let act = prompt("Введите действие: ");
    let message;
    let c;
    let flag = true;
    switch (act) {
        case '+': c = a + b; break;
        case '-': c = a - b; break;
        case '*': c = a * b; break;
        case '/':
            if (b != 0) {
                c = a / b;
            }
            else {
                message = ("Делить на ноль нельзя!");
                flag = false;
            }
            break;
        default:
            message = ("Что с этим делать я не знаю");
            flag = false;
            break;
    }
    if (flag) {
        message = (`${a} ${act} ${b} = ${c}`);
    }
    return message;
}

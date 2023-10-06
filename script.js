function task_calc() {
    let a = check_int('первое');
    let b = check_int('второе');

    let act = prompt("Введите действие: ");
    switch (act) {
        case '+':
            alert(`${a} + ${b} = ${a + b}`);
            break;
        case '-':
            alert(`${a} - ${b} = ${a - b}`);
            break;
        case '*':
            alert(`${a} * ${b} = ${a * b}`);
            break;
         case '/':
            if (b != 0) {
                alert(`${a} / ${b} = ${a / b}`);
            }
            else {
                alert("Делить на ноль нельзя!")
            }
            break;
        default:
            alert("Что с этим делать я не знаю");
            break;
    }
}

function check_int(message) {
    let num;
    let flag = true;
    while (flag) {
        num = parseInt(prompt(`Введите ${message} число: `));
        if (!isNaN(num)) {
            flag = false;
        } else {
            alert("Вы ввели не число!");
        }
    }
    return num;
}

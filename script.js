let minValue = parseInt(prompt('Минимальное значение числа для игры (не менее -999 и не более 999)','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры (не менее -999 и не более 999)','100'));

minValue > 999 ? minValue = 999 : minValue < -999 ? minValue = -999 : Number.isInteger(minValue) ? minValue : minValue = 0;
maxValue > 999 ? maxValue = 999 : maxValue < -999 ? maxValue = -999 : Number.isInteger(maxValue) ? maxValue : maxValue = 100;

if(minValue>maxValue){
    [minValue, maxValue] = [maxValue, minValue];
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    if(!gameRun){
        gameRun = true;
        minValue = parseInt(prompt('Минимальное значение числа для игры (не менее -999 и не более 999)','0'));
        maxValue = parseInt(prompt('Максимальное значение числа для игры (не менее -999 и не более 999)','100'));
        minValue > 999 ? minValue = 999 : minValue < -999 ? minValue = -999 : Number.isInteger(minValue) ? minValue : minValue = 0;
        maxValue > 999 ? maxValue = 999 : maxValue < -999 ? maxValue = -999 : Number.isInteger(maxValue) ? maxValue : maxValue = 100;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumberField.innerText = orderNumber;
        let text = [`Да это легко! Ты загадал... ${answerNumber }`, `Да это же ${answerNumber }`, `Я думаю, это ${answerNumber }`];
        let random = Math.round(Math.random() * 2);
        answerField.innerText = text[random];
    }else{
        gameRun = false;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let text = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Я не знаю...\n\u{1F622}`];
            let random = Math.round(Math.random() * 2);
            answerField.innerText = text[random];
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let text = [`Да это легко! Ты загадал... ${answerNumber }`, `Да это же ${answerNumber }`, `Я думаю, это ${answerNumber }`];
            let random = Math.round(Math.random() * 2);
            answerField.innerText = text[random];
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let text = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}`, `Я не знаю...\n\u{1F622}`];
            let random = Math.round(Math.random() * 2);
            answerField.innerText = text[random];
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let text = [`Да это легко! Ты загадал... ${answerNumber }`, `Да это же ${answerNumber }`, `Я думаю, это ${answerNumber }`];
            let random = Math.round(Math.random() * 2);
            answerField.innerText = text[random];
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let text = ['Я всегда угадываю\n\u{1F60E}', 'Урааа\n\u{1F643}', 'Как же я хорош\n\u{1F609}'];
        const random = Math.round(Math.random() * 2);
        answerField.innerText = text[random];
        gameRun = false;
    }
})
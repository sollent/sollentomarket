let nextStep = document.getElementById('nextStep'),
    prevStep = document.getElementById('prevStep'),
    firstStepLink = document.getElementById('firstStepLink'),
    secondStepLink = document.getElementById('secondStepLink'),
    thirdStepLink = document.getElementById('thirdStepLink'),
    activeLink,
    links = [
        {id: 1, value: firstStepLink},
        {id: 2, value: secondStepLink},
        {id: 3, value: thirdStepLink}
    ],
    // steps = {
    //     'stepOne': 'Шаг 1: Ваша корзина',
    //     'stepTwo': 'Шаг 2: Доставка и выбор оплаты',
    //     'stepThree': 'Шаг 3: Дополнительная информация'
    // }
    steps = [
        {
            name: 'stepOne',
            short: 'Ваша корзина',
            iconClass: 'shopping_cart',
            description: 'Шаг 1: Проверьте заказы в вашей корзине'
        },
        {
            name: 'stepTwo',
            short: 'Доставка и оплата',
            iconClass: 'directions_car',
            description: 'Шаг 2: Выберите способ доставки и оплаты'
        },
        {
            name: 'stepThree',
            short: 'Бонусы',
            iconClass: 'cake',
            description: 'Шаг 3: Дополнительная информация'
        }
    ]
;

let mainCartIcon = document.getElementById('modal-main-icon');
let mainCartCaption = document.getElementById('modal-main-caption');
let modalHeader = document.getElementById('cartModalHeader');
let stepInfoElement = document.createElement('h6');
stepInfoElement.className = 'step-info';
replaceStepInfo('stepOne');

let tabMinsk = document.getElementById('tabMinsk');

document.body.onload = () => {

    // // Preloader showing
    // let preloader = document.getElementById('site-preloader');
    // if (!preloader.classList.contains('done')) {
    //     preloader.classList.add('done');
    // }
    // Cart steps working
    for (let i = 0; i < links.length; i++) {
        if (links[i]['value'].classList.contains('active')) {
            activeLink = links[i];
        }
    }

    prevStep.onclick = () => {
        switch (activeLink.id) {
            case 3:
                secondStepLink.click();
                tabMinsk.click();
                activeLink = links.find(l => l.id === 2);
                replaceStepInfo('stepTwo');
                nextStep.innerText = 'Дальше';
                break;
            case 2:
                firstStepLink.click();
                activeLink = links.find(l => l.id === 1);
                replaceStepInfo('stepOne');
                nextStep.innerText = 'Дальше';
                break;
        }
    };

    nextStep.onclick = () => {
        switch (activeLink.id) {
            case 3:
                console.log('Вы успешно оформили заказ');
                // Order logic
                break;
            case 2:
                thirdStepLink.parentElement.classList.remove('disabled');
                thirdStepLink.click();
                activeLink = links.find(l => l.id === 3);
                replaceStepInfo('stepThree');
                nextStep.innerText = 'Завершить';
                break;
            case 1:
                secondStepLink.parentElement.classList.remove('disabled');
                secondStepLink.click();
                tabMinsk.click();
                activeLink = links.find(l => l.id === 2);
                prevStep.parentElement.classList.remove('hide');
                replaceStepInfo('stepTwo');
                break;
        }
    };

};

function tabSelected(tabName) {
    switch (tabName) {
        case 'first':
            links.find(l => l.value.classList.contains('active')).value.classList.remove('active');
            firstStepLink.classList.add('active');
            activeLink = links.find(l => l.id === 1);
            prevStep.parentElement.classList.add('hide');
            replaceStepInfo('stepOne');
            nextStep.innerText = 'Дальше';
            break;
        case 'second':
            secondStepLink.click();
            tabMinsk.click();
            activeLink = links.find(l => l.id === 2);
            replaceStepInfo('stepTwo');
            nextStep.innerText = 'Дальше';
            break;
        case 'third':
            secondStepLink.classList.remove('active');
            thirdStepLink.classList.add('active');
            activeLink = links.find(l => l.id === 3);
            prevStep.parentElement.classList.remove('hide');
            replaceStepInfo('stepThree');
            nextStep.innerText = 'Завершить';
            break;
    }
}

function replaceStepInfo(stepName) {
    stepInfoElement.innerHTML = steps.find(s => s.name === stepName).description;
    mainCartCaption.innerText = steps.find(s => s.name === stepName).short;
    mainCartIcon.innerText = steps.find(s => s.name === stepName).iconClass;
    modalHeader.append(stepInfoElement);
}


// main function

function getInnerTextValue(innerName){
    const innerTextValue = document.getElementById(innerName);
    const innerValue = innerTextValue.innerText;
    return innerValue;
}

function getInnerPriceValue(innerPrice){
    const innerPriceValue = document.getElementById(innerPrice);
    const innerPriceList = innerPriceValue.innerText;
    const innerPriceString = parseFloat(innerPriceList);
    return innerPriceString;
}
function setInnerText(elementId ,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

let sum = 0;
//first card
function firstValue(){
    const textName = getInnerTextValue('first-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('first-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// second-card
function secondValue(){
    const textName = getInnerTextValue('second-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('second-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// Third-card
function thirdValue(){
    const textName = getInnerTextValue('third-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('third-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// Fourth-card
function fourthValue(){
    const textName = getInnerTextValue('fourth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fourth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// fifth-card
function fifthValue(){
    const textName = getInnerTextValue('fifth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fifth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// sixth-card
function sixthValue(){
    const textName = getInnerTextValue('sixth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number+1 +'.'+' '+ textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('sixth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
function applyDiscount(){
    const totalSum = getInnerPriceValue('total-price');
    const discountPrice = totalSum * (20/100);
    const discount = totalSum - discountPrice;
    setInnerText('discount-price', discountPrice.toFixed(2));
    setInnerText('total-discount-price', discount);
}

if(sum > 0){
    const purchase = document.getElementById('purchase-btn');
    purchase.removeAttribute('disabled');
}


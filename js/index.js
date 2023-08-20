// function clickHandel(){
//     const productName = document.getElementById('product-name');
//     const innerProduct = productName.innerText;
    
//     const productNameList = document.getElementById('product-name-list');
//     const h1 = document.createElement('h1');
//     h1.innerText = innerProduct ;
//     productNameList.appendChild(h1);

//     const productPrice = document.getElementById('product-price');
//     const productValue = productPrice.innerText;
//     const productValueString = parseFloat(productValue);

//     const totalPrice = document.getElementById('total-price');
//     const totalPriceValue = totalPrice.innerText;
//     const totalPriceValueString = parseFloat(totalPriceValue);

//     const totalSum = totalPriceValueString + productValueString;
//     totalPrice.innerText = totalSum;


// }


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
    p.innerText =  textName;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('first-price');
    const totalPrice = getInnerPriceValue('total-price');

    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// second-card
function secondValue(){
    const textName = getInnerTextValue('second-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    p.innerText = textName ;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('second-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// Third-card
function thirdValue(){
    const textName = getInnerTextValue('third-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    p.innerText = textName ;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('third-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// Fourth-card
function fourthValue(){
    const textName = getInnerTextValue('fourth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    p.innerText = textName ;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fourth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// fifth-card
function fifthValue(){
    const textName = getInnerTextValue('fifth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    p.innerText = textName ;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fifth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);
}
// sixth-card
function sixthValue(){
    const textName = getInnerTextValue('sixth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    p.innerText = textName ;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('sixth-price');
    const totalPrice = getInnerPriceValue('total-price');
    
    const sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

}
function discountPrice (){
const discountPriceValue = getInnerPriceValue('discount-price')
const discountPrice = sum *(20/100);
const discount = sum - 200;
setInnerText('discount-price', sum);
}



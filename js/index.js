//first card
function firstValue() {
    const textName = getInnerTextValue('first-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('first-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}
// second-card
function secondValue() {
    const textName = getInnerTextValue('second-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p);

    const innerPriceValue = getInnerPriceValue('second-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}
// Third-card
function thirdValue() {
    const textName = getInnerTextValue('third-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('third-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}
// Fourth-card
function fourthValue() {
    const textName = getInnerTextValue('fourth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fourth-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}
// fifth-card
function fifthValue() {
    const textName = getInnerTextValue('fifth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('fifth-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}
// sixth-card
function sixthValue() {
    const textName = getInnerTextValue('sixth-name');
    const productNameList = document.getElementById('product-name-list');
    const p = document.createElement('p');
    const number = productNameList.childElementCount;
    p.innerText = number + 1 + '.' + ' ' + textName;
    productNameList.appendChild(p)

    const innerPriceValue = getInnerPriceValue('sixth-price');
    const totalPrice = getInnerPriceValue('total-price');

    sum = innerPriceValue + totalPrice;
    setInnerText('total-price', sum);

    if (sum > 0) {
        const purchase = document.getElementById('purchase-btn');
        purchase.removeAttribute('disabled');
    }
}

function applyDiscount() {
    const totalSum = getInnerPriceValue('total-price');
    const cupon = document.getElementById('input-cupon');
    const validCupon = cupon.value;
    cupon.value = '';
    const discountPrice = totalSum.toFixed(2) * (20 / 100);
    const discount = totalSum - discountPrice;
    setInnerText('discount-price', discountPrice.toFixed(2));
    setInnerText('total-discount-price', discount.toFixed(2));

}
document.getElementById('input-cupon').addEventListener('keyup',function(event){
    const code = event.target.value;
    const totalSum = getInnerPriceValue('total-price');
    const apply = document.getElementById('apply-btn');
    if(totalSum >= 200 && code=== 'SELL200'){
        apply.removeAttribute('disabled');
    }else{
        apply.setAttribute('disabled', true);
        
    }
})

function reloadPage(){
    location.reload();
}

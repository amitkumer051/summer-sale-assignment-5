function getInnerTextValue(innerName) {
    const innerTextValue = document.getElementById(innerName);
    const innerValue = innerTextValue.innerText;
    return innerValue;
}

function getInnerPriceValue(innerPrice) {
    const innerPriceValue = document.getElementById(innerPrice);
    const innerPriceList = innerPriceValue.innerText;
    const innerPriceString = parseFloat(innerPriceList);
    return innerPriceString;
}
function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

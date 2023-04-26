var money = 20000000000000;
var sweaterAmonuntVar = 0;
var currentColor;

function buy_sweater(price, amountText) {
    if (money > price - 1) {
        money = money - price;
        sweaterAmonuntVar = sweaterAmonuntVar + 1;
        document.getElementById(amountText).innerHTML = sweaterAmonuntVar.toString();
        document.getElementById("moneyText").innerHTML = money.toString + "TL";
    }
}

function buy_something(elementId, price,amountMulti) {
    if (money >= price * Number(document.getElementById(amountMulti).value)) {
        console.log("Yes");
        money = money - (Number(document.getElementById(amountMulti).value) * price);
        var x = Number(document.getElementById(elementId).innerHTML);
        x = Number(document.getElementById(amountMulti).value) * 1 + x
        document.getElementById(elementId).innerHTML = String(x);
        console.log(String(money));
        document.getElementById("moneyText").innerHTML = String(money) + "TL";
    }

}
function sell_something(amoElementId,price,amountMulti) {
    var amoMultiElement =Number(document.getElementById(amountMulti).value);
    var currentAmount = Number(document.getElementById(amoElementId).innerHTML);
    if (currentAmount >= amoMultiElement    && amoMultiElement >= 0) {
        console.log("Selling Something...");
        document.getElementById(amoElementId).innerHTML = currentAmount - (amoMultiElement).toString();
        money = money + (amoMultiElement * price);
        document.getElementById("moneyText").innerHTML = String(money) + "TL";
    }
}
function onHoverOverText(elemtId,color)
{
    currentColor = document.getElementById(elemtId).style.backgroundColor;
    document.getElementById(elemtId).style.borderColor = color;
    document.getElementById(elemtId).style.borderWidth = 2;
}
function onHoverExitText(elemtClass,color)
{
    document.getElementsByClassName(elemtId).style.borderColor = currentColor;
    document.getElementsByClassName(elemtId).style.borderWidth = 0;
}
setInterval(function () {
if(money =! Number(document.getElementById("moneyText").innerHTML))
{
    if(money - Number(document.getElementById("moneyText").innerHTML) > 0)
    {
        document.getElementById("moneyText").innerHTML = Number(document.getElementById("moneyText").innerHTML) + 1;
    }else
    {
    document.getElementById("moneyText").innerHTML = Number(document.getElementById("moneyText").innerHTML) - 1;
    }
    
}
}, 3000);

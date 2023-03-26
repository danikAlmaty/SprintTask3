let inputValue = document.getElementById("input-value")
let selectValue = document.getElementById("input-currency")
let kzt = document.getElementById("kztValue")
let usd = document.getElementById("usdValue")
let euro = document.getElementById("euroValue")


function moneyConverter(){
    let howManyMoney = parseInt(inputValue.value)
    let whichIsSelected = selectValue.value

    if (whichIsSelected==="KZT"){
        kzt.innerText = "-"
        usd.innerText = (howManyMoney/431).toFixed(2)
        euro.innerText=(howManyMoney/509).toFixed(2)
    }
    else if(whichIsSelected==="USD"){
        kzt.innerText=(howManyMoney*429).toString()
        usd.innerText="-"
        euro.innerText=((howManyMoney*429)/509).toFixed(2)
    }
    else if(whichIsSelected==="EUR"){
        kzt.innerText=howManyMoney*507
        usd.innerText=((howManyMoney*507)/431).toFixed(2)
        euro.innerText="-"
    }

}






















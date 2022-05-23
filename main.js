const btnPlus = document.getElementsByClassName("plus");
// console.log(btnPlus)
const btnMinus = document.getElementsByClassName("minus");
const bntLike = document.querySelectorAll(".like");
const btnDelete = document.querySelectorAll(".delete");
const btnTotal =document.getElementsByClassName("total");
const checkboxes=document.querySelectorAll(".checkbox")
console.log(checkboxes)
for (let i=0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click", increment);
    btnMinus[i].addEventListener("click", increment1);
    bntLike[i].addEventListener("click", Iliked);
    btnDelete[i].addEventListener("click", Iremove);
    // btnTotal[i].addEventListener("click", totale)
    checkboxes[i].addEventListener("click",totalPrice)
    }
function increment(event) {
const btn=event.target;
// console.log(btn)
const divElt = btn.parentElement;
// console.log(divElt)
var contTag=divElt.querySelector("p");
// console.log(contTag)
var contValue=Number(contTag.innerHTML);
// console.log(contValue)
contValue+=1
// console.log(contValue)
contTag.innerHTML=contValue
var trElt=divElt.parentElement.parentElement
// console.log(trElt)
var princeTag=trElt.querySelector(".Price")
var priceValue =Number(princeTag.parentElement)
const unitePriceValue=Number(trElt.querySelector(".unitePrice").innerHTML)
// console.log(unitePriceValue)
priceValue=unitePriceValue*contValue
princeTag.innerHTML=priceValue
// console.log(typeof(priceValue))
} 
function increment1(event) {
    const btn=event.target;
    // console.log(btn)
    const divElt = btn.parentElement;
    // console.log(divElt)
    var contTag=divElt.querySelector("p");
    // console.log(contTag)
    var contValue=Number(contTag.innerHTML);
    // console.log(contValue)
    if (contValue>0){
    contValue-=1}else if (contValue => 0){
        contValue=0 }
    // console.log(contValue)
    contTag.innerHTML=contValue
    var trElt=divElt.parentElement.parentElement
    // console.log(trElt)
    var princeTag=trElt.querySelector(".Price")
    var priceValue =Number(princeTag.parentElement)
    const unitePriceValue=Number(trElt.querySelector(".unitePrice").innerHTML)
    // console.log(unitePriceValue)
    priceValue=unitePriceValue*contValue;
    princeTag.innerHTML=priceValue;
    // console.log(priceValue)
    console.log(typeof(priceValue))}
    function Iliked(event){
        var btnheart=event.target
        console.log(btnheart);
        if(btnheart.style.color!=="red")
        btnheart.style.color="red"
        else
        btnheart.style.color="black"
        console.log(btnheart)
    }
    
    
    
    function Iremove(event){
        const btnDelete=event.target;
        // console.log(btnDelete)
        var divElt=btnDelete.parentElement.parentElement
        var trElement=divElt.parentElement
        trElement.remove()
        // console.log(trElement)
    }
    function totale(enevt){
        const btn=Event.target
        console.log(btn)
    const divElt = btn.parentElement;
    console.log(divElt)

    }
     function totalPrice(e){
        var checkOne = e.target;
        // console.log(checkOne)
        var tdElt = checkOne.parentElement;
        // console.1og (tdElt)
        var trElt = tdElt.parentElement;
        // console.log(trElt)
        var priceValue = Number(trElt.querySelector(".Price").innerHTML);
        // console.log(priceValue);
        var totalTag = document.querySelector("#total");
        console.log(totalTag)
        var totalvalue = Number (totalTag. innerHTML);
        //  console.log(totalValue)
        var btnPlus = trElt.querySelector(".plus");
        var btnMinus = trElt.querySelector (".minus");
        if (checkOne.checked === true) {
        totalvalue += priceValue;
        btnPlus.setAttribute("disabled",true)
        }else {
        btnPlus.removeAttribute("disabled")

        totalvalue-=priceValue
        
        }
        totalTag.innerHTML = totalvalue;
     }
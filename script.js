const bill = document.getElementById('bill');
const tips = document.querySelectorAll('.tip');
const people = document.getElementById('people');
const tipPerPerson = document.getElementById('tip-perperson');
const billPerPerson = document.getElementById('bill-perperson');
const customTip = document.querySelector(".custom");
const peopleInput = document.querySelector(".people-input");
const err = document.querySelector(".err");



let billResult = 0;
let tipResult = 0;
let tipPercent = 0;
let tipCustom = 0;



function tipCalc(billAmount,tipPercentage,customTip) { 
    return ((tipPercentage / 100) * billAmount) + customTip;

}

function calculateResult(billValue,tipValue,numOfpeople) {

    billPerPerson.innerText = `$${calculateAvg(billValue,numOfpeople).toFixed(2)}`;
    
    tipPerPerson.innerText = `$${calculateAvg(tipValue,numOfpeople).toFixed(2)}`;
    
    
}
function calculateAvg(avgOf,avgBy) {
    let avg = avgOf / avgBy;
    return avg;
};






people.addEventListener('keyup',()=>{
    tipResult = tipCalc(parseFloat(bill.value),tipPercent,tipCustom);
    billResult = parseFloat(bill.value) + tipResult;
    
    if (people.value > 0){
        if (err.classList.contains("show")) {
            err.classList.remove("show");
        peopleInput.classList.remove("show-input");    
        }
        
        calculateResult(billResult,tipResult,people.value);
        
        
        
    }
    else if (people.value == 0) {
        
        err.classList.add("show");
        peopleInput.classList.add("show-input");
        billPerPerson.innerText = `$0.00`;
        tipPerPerson.innerText = `$0.00`;
    }
    

});

bill.addEventListener('keyup',()=>{
    if (people.value > 0) {
        tipResult = tipCalc(parseFloat(bill.value),tipPercent,tipCustom);
        billResult = parseFloat(bill.value) + tipResult;
        calculateResult(billResult,tipResult,people.value);    
    }
    
})



tips.forEach(tip => {
    tip.addEventListener('click', () => {
        let num = tip.value.replace("%","");
        tipPercent = parseFloat(num);
        if (people.value > 0) {
            tipResult = tipCalc(parseFloat(bill.value),tipPercent,tipCustom);
            billResult = parseFloat(bill.value) + tipResult;
            calculateResult(billResult,tipResult,people.value);    
        }
    });

});

customTip.addEventListener('keyup',()=>{
    tipCustom = parseFloat(customTip.value); 
    
})


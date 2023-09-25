function button(){
    let amount = document.getElementById("amount");
    let persons = document.getElementById("persons");

    let billSplit = (amount.value/persons.value).toFixed(2);
    console.log(billSplit);

    let billSplitAmount = document.getElementById("result");
    billSplitAmount.innerText = billSplit;


}
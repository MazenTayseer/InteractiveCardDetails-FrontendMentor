let visaNumber = document.getElementById('visa_number');
let visaName = document.getElementById('visa_name');
let visaMonth = document.getElementById('visa_month');
let visaYear = document.getElementById('year');
let visaCvc = document.getElementById('visa_cvc');

let name_error = document.getElementById('name_error');
let number_error = document.getElementById('number_error');
let date_error = document.getElementById('date_error');
let cvc_error = document.getElementById('cvc_error');

let confirmButton = document.getElementById('confirm');
let container_ty = document.getElementById('container_ty');
let container = document.getElementById('container');


confirmButton.addEventListener('click', ()=> {
    let flag = false;

    if(visaName.innerText == 'Jane Appleseed') {
        name_error.innerText = 'Field cannot be blank.'
        flag=true;
    }

    if(visaNumber.innerText == '0000 0000 0000 0000') {
        number_error.innerText = 'Field cannot be blank.'   
        flag=true;    
    }
    else if(visaNumber.innerText.length != 19) {
        number_error.innerText = 'Enter a valid Number.'
        flag=true;
    }

    if(visaMonth.innerText == '00' || visaYear.innerText == '00') {
        date_error.innerText = 'Field cannot be blank.'
        flag=true;
    }
    else if(visaMonth.innerText > '12') {
        date_error.innerText = 'Enter a valid date.'
        flag=true;
    }

    if(visaCvc.innerText == '000') {
        cvc_error.innerText = 'Field cannot be blank.'
        flag=true;
    }


    if(!flag) {

        container.style.display = 'none';
        container_ty.style.display = 'block';

        if(screen.width > 400) {
            container_ty.style.top = '200px'; 
        }
        else {
            container_ty.style.top = '400px';
        }


    }
    
});

function setName() {
    let inputCardName = document.getElementById('CardHolder_Name').value;
    visaName.innerText = inputCardName;

    if(inputCardName == '') {
        visaName.innerText = 'Jane Appleseed';
    }
}

function setNumber() {
    let inputCardNumber = document.getElementById('card_number').value;
    visaNumber.innerText = inputCardNumber;
    
    if(inputCardNumber == '') {
        visaNumber.innerText = '0000 0000 0000 0000';
    }
}

function setMonth() {
    let inputMonth = document.getElementById('date_month').value;
    visaMonth.innerText = inputMonth;

    if(inputMonth == '') {
        visaMonth.innerText = '00';
    }
}

function setYear() {
    let inputYear = document.getElementById('date_year').value;
    visaYear.innerText = inputYear;

    if(inputYear == '') {
        visaYear.innerText = '00';
    }
}

function setCvc() {
    let inputCvc = document.getElementById('cvc').value;

    visaCvc.innerText = inputCvc;

    if(inputCvc == '') {
        visaCvc.innerText = '000';
    }
}

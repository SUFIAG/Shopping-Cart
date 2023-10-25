let subtotal_value = document.getElementById("subtotal_value");
let tax_value = document.getElementById("tax_value");
let total_value = document.getElementById("total_value");

let value00 = document.getElementById("number-phone00");
let increase00 = document.getElementById("increase00");
let decrease00 = document.getElementById("decrease00");
let remove00 = document.getElementById("remove00");
let price00 = document.getElementById("price00");

let value01 = document.getElementById("number-phone01");
let increase01 = document.getElementById("increase01");
let decrease01 = document.getElementById("decrease01");
let remove01 = document.getElementById("remove01");
let price01 = document.getElementById("price01");



value00.addEventListener("change", value00Change);
increase00.addEventListener("click", increase00Click);
decrease00.addEventListener("click", decrease00Click);
remove00.addEventListener("click", remove00Click);

value01.addEventListener("change", value01Change);
increase01.addEventListener("click", increase01Click);
decrease01.addEventListener("click", decrease01Click);
remove01.addEventListener("click", remove01Click);



function value00Change(event) {
    if (value00.value < 0) {
        value00.value = 0;
    }
    update00();
};
function increase00Click(event) {
    let _is = parseInt(value00.value);
    value00.value = String(_is + 1);
    update00();
};
function decrease00Click(event) {
    let _is = parseInt(value00.value);
    value00.value = String(_is - 1);
    if (value00.value < 0) {
        value00.value = 0;
    }
    update00();
};
function remove00Click(event) {
    value00.value = 0;
    update00();
    value00.parentElement.parentElement.parentElement.remove();
};
function update00() {
    let _is = parseInt(value00.value);
    price00.innerText = '$' +String(_is *1219);
    
    let _subtotal = (parseInt(value00.value) *1219) +(parseInt(value01.value) *59);
    let _tax = (_subtotal /100 *10).toFixed(2);
    let _total = _subtotal +parseFloat(_tax);
    subtotal_value.innerText = '$' +_subtotal.toFixed(2);
    tax_value.innerText = '$' +_tax;
    total_value.innerText = '$' +_total.toFixed(2);
};



function value01Change(event) {
    if (value01.value < 0) {
        value01.value = 0;
    }
    update01();
};
function increase01Click(event) {
    let _is = parseInt(value01.value);
    value01.value = String(_is + 1);
    update01();
};
function decrease01Click(event) {
    let _is = parseInt(value01.value);
    value01.value = String(_is - 1);
    if (value01.value < 0) {
        value01.value = 0;
    }
    update01();
};
function remove01Click(event) {
    value01.value = 0;
    update01();
    value01.parentElement.parentElement.parentElement.remove();
};
function update01() {
    let _is = parseInt(value01.value);
    price01.innerText = '$' +String(_is *59);
    
    let _subtotal = (parseInt(value00.value) *1219) +(parseInt(value01.value) *59);
    let _tax = (_subtotal /100 *10).toFixed(2);
    let _total = _subtotal +parseFloat(_tax);
    subtotal_value.innerText = '$' +_subtotal.toFixed(2);
    tax_value.innerText = '$' +_tax;
    total_value.innerText = '$' +_total.toFixed(2);
};

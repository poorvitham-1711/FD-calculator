const interest = document.getElementById("interest");
const amount = document.getElementById("amount");
const duration = document.getElementById("duration");

const interestValue = document.getElementById("interestValue");
const amountValue = document.getElementById("amountValue");
const durationValue = document.getElementById("durationValue");

interest.oninput = function () {
            interestValue.innerText = interest.value + "%";
        };

amount.oninput = function () {
            amountValue.innerText = "₹" + amount.value;
        };

duration.oninput = function () {
            durationValue.innerText = duration.value + " Years";
        };

function submitValues() {
    document.getElementById("displayBox").innerHTML = `
        <b>Selected Values:</b><br>
        Interest: ${interest.value}%<br>
        Amount: ₹${amount.value}<br>
        Duration: ${duration.value} Years
    `;
}

function calculateFD() {
    let P = parseFloat(amount.value);
    let r = parseFloat(interest.value) / 100;
    let t = parseFloat(duration.value);

    // FD Compound Interest Formula
    let maturity = P * Math.pow((1 + r), t);

    document.getElementById("result").innerHTML =
        `<b>Maturity Amount:</b> ₹${maturity.toFixed(3)}`;
}
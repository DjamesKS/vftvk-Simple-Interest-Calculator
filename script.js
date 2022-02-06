// Compute and show the result of calculation
function compute() {
    var principalElement = document.getElementById("principal");
    var result = document.getElementById("result");

    // check if the user entered correct value for the principal
    if (!checkPrincipal(principalElement)) {
        result.innerHTML = "";
        return;
    }

    var principal = principalElement.value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // show the result
    result.innerHTML = "If you deposit <span class=\"highlight\">" + principal + "</span>, \<br\>" +
        "at an interest rate of <span class=\"highlight\">" + rate + "%</span> \<br\>" +
        "You will receive an amount of <span class=\"highlight\">" + interest + "</span>, \<br\>" +
        "in the year <span class=\"highlight\">" + year + "</span> \<br\>";
}

// show a new value for the rate when user adjusts the rate slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

// check if entered value for the principal is positive
function checkPrincipal(principal) {
    if (principal.value == "" || principal.value <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    return true;
}

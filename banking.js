function getInnerValue(inputId) {
    const text = document.getElementById(inputId);
    const number = parseFloat(text.value);
    text.value = '';
    return number;
}

function updateInnerText(elementId, newBalance) {
    const text = document.getElementById(elementId);
    const number = parseFloat(text.innerText);
    text.innerText = number + newBalance;
}

// deposit functionality

document.getElementById('deposit-btn').addEventListener('click', function() {
    //set new value for deposit
    const newBalance = getInnerValue('deposit-input');
    if (!isNaN(newBalance) && newBalance > 0) {
        updateInnerText('neet-deposite', newBalance);
        updateInnerText('total-balance', newBalance);
    } else {
        alert('Invalid Input');
    }

});

//widthdraw functionality

document.getElementById('widthdraw-btn').addEventListener('click', function() {
    // get main balance 
    let mainBalance = document.getElementById('total-balance');
    mainBalance = parseFloat(mainBalance.innerText);
    //get widthdraw amount
    const widthdrawAmount = getInnerValue('widthdraw-input');
    //string and negative number error handaling
    if (!isNaN(widthdrawAmount) && widthdrawAmount > 0) {
        //unsufisient balance error handaling
        if (widthdrawAmount <= mainBalance) {
            // set new value in widthdraw section 
            updateInnerText('widthdraw-money', widthdrawAmount);
            // //update main balance
            updateInnerText('total-balance', -widthdrawAmount);
        } else {
            alert('Unsufisient Balance');
        }
    } else {
        alert('Invalid Input');
    }
});
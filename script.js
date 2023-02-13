const prices = {
    mac : 5,
    pasta : 8,
    tacos : 8,
    enchilada : 10
};

let quantity = {
    mac : 0,
    pasta : 0,
    tacos : 0,
    enchilada : 0
};

function adjustValue(item, increment) {
    if (increment) {
        if (quantity[item] != null) {
            quantity[item] += 1;
            document.getElementById(item + "Quantity").innerHTML = "" + quantity[item];
            updateSubtotal();
        } else {
            alert('Item does not exist.')
        }
    } else {
        if (quantity[item] != null) {
            if (quantity[item] > 0) {
                quantity[item] -= 1;
                document.getElementById(item + "Quantity").innerHTML = "" + quantity[item];
                updateSubtotal();
            }
        } else {
            alert('Item does not exist.')
        }
    }
}

function clearAll() {
    for (let key in quantity) {
        quantity[key] = 0;
        document.getElementById(key + "Quantity").innerHTML = "" + 0;
    }
    updateSubtotal();
}

function updateSubtotal() {
    let total = 0;
    for (let key in prices) {
        total += prices[key] * quantity[key];
    }
    document.getElementById("subtotal").innerHTML = "Subtotal $" + total;
}
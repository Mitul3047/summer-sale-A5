let total = 0;

function handleCLikBtn(target) {
    //  console.log(target.childNodes[5].childNodes[1].innerText)
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    // console.log(li)
    li.style.listStyle = 'number';
    const selectedItemContainer = document.getElementById('selected-items');
    selectedItemContainer.appendChild(li);
    // console.log(target.childNodes[5].childNodes[3].innerText);
    const priceField = target.childNodes[5].childNodes[3].innerText
    const priceValueText = priceField.split(" ")[0];
    const priceValue = parseFloat(priceValueText);
    total = parseFloat(total) + priceValue;
    document.getElementById('purchase-total-price').innerText = total;
    document.getElementById('discount-total').innerText= total; 
    // CUPPON bUTTON
    const couponButton = document.getElementById("btn-coupon")
    if (total >= 200) {
        couponButton.removeAttribute('disabled');
    } else {
        couponButton.setAttribute('disabled', true);
    }
    // PURCHASE BUTTON
    const purchaseBtn = document.getElementById("btn-purchase")
    if (total > 0) {
        purchaseBtn.removeAttribute('disabled');
        document.getElementById("discount-total").innerText= total;
    } else {
        purchaseBtn.setAttribute('disabled', true);
    }
}

// CUPON BUTTON

document.getElementById("btn-coupon").addEventListener('click', function () {
    const discountText = document.getElementById('discount-field');
    const discountTotal = document.getElementById('discount-total');
    const couponCode = document.getElementById("cupon-confirm").value
    if (couponCode === "SELL200") {
        const coupon = document.getElementById('coupon');
        coupon.innerText = 'YOU HAVE RECIVED 20% DISCOUNT';
        const discountValue = discountText.innerText = parseFloat(total * 0.20).toFixed(2);
        const finalTotal = discountTotal.innerText = total - discountValue;
        finalTotal.toFixed(2);
        document.getElementById("cupon-confirm").value= "";
    } else {
        alert("Invalid Coupon")
    }
})

function goHome() {
    // window.location.href = "index.html"
    total = parseFloat(0);
    document.getElementById("selected-items").innerText= "";
    document.getElementById("purchase-total-price").innerText= 0;
    document.getElementById("discount-field").innerText= 0;
    document.getElementById("discount-total").innerText= 0;
    document.getElementById("cupon-confirm").value= "";
    document.getElementById("btn-purchase").setAttribute('disabled', true);
}








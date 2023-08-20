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
    const priceValueText =priceField.split(" ")[0];
    const priceValue = parseFloat(priceValueText);
    total = parseFloat(total) + priceValue;
    document.getElementById('purchase-total-price').innerText= total;
}


// coupon button active
document.getElementById('cupon-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const couponButton = document.getElementById('btn-coupon');
    if (text === 'SELL200') {
        couponButton.removeAttribute('disabled');
    }
    else {
        couponButton.setAttribute('disabled', true);
    }
})
// Coupon title change
document.getElementById('btn-coupon').addEventListener('click', function () {
    const coupon = document.getElementById('coupon');
    coupon.innerText = 'YOU HAVE RECIVED 20% DISCOUNT';
    const discount = document.getElementById('discount-field')
    discount.innerText = totalPrice * 0.20
})


// purchase button active


const print = () => {
    let stockitem = document.getElementById('item').value;
    let image = document.getElementById('img').files[0];
    let qty = document.getElementById('qty').value;
    let rate = document.getElementById('rate').value;
    let amount = document.getElementById('amount').value;

    let r = new FileReader();
    r.readAsDataURL(image);
    r.onloadend = function () {
        document.getElementById('imgval').src = r.result;
    }
    document.getElementById('tvalue').innerHTML += `<tr><td>${stockitem}</td><td><img id='imgval'></td><td>${qty}</td><td>${rate}</td><td>${amount}</td></tr>`;

    document.getElementById('item').value=''
    document.getElementById('img').value=''
    document.getElementById('qty').value=''
    document.getElementById('rate').value=''
    document.getElementById('amount').value=''

}

document.getElementById('print').addEventListener('click', print);

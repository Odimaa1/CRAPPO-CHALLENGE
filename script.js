var menu = document.getElementById('bar');
var links = document.getElementById('links');
var closeBtn = document.getElementById('mark');

menu.onclick = () => {
    links.style.display = 'block';
    menu.style.display = 'none';
    closeBtn.style.display = 'block';
}

closeBtn.onclick = () => {
    links.style.display = 'none';
    menu.style.display = 'block';
    closeBtn.style.display = 'none';
}

var bitcoin = document.getElementById('bitcoin');
var ethereum = document.getElementById('ethereum');
var litecoin = document.getElementById('litecoin');
var btcBtn = document.getElementById('btc-btn');
var ethBtn = document.getElementById('eth-btn');
var lteBtn = document.getElementById('lte-btn');
var mineBtc = document.getElementById('mine-btc');
var mineEth = document.getElementById('mine-eth');
var mineLte = document.getElementById('mine-lte');

bitcoin.onclick = () => {
    // BITCOIN
    bitcoin.style.backgroundColor = '#2B076E';
    bitcoin.style.color = 'white';
    btcBtn.style.display = 'none';
    mineBtc.style.display = 'block';
    // ETHEREUM
    ethereum.style.backgroundColor = 'transparent';
    ethereum.style.color = 'black';
    ethBtn.style.display = 'block';
    mineEth.style.display = 'none';
    // LITECOIN
    litecoin.style.backgroundColor = 'transparent';
    litecoin.style.color = 'black';
    lteBtn.style.display = 'block';
    mineLte.style.display = 'none';
}

ethereum.onclick = () => {
    // BITCOIN
    bitcoin.style.backgroundColor = 'transparent';
    bitcoin.style.color = 'black';
    btcBtn.style.display = 'block';
    mineBtc.style.display = 'none';
    // ETHEREUM
    ethereum.style.backgroundColor = '#2B076E';
    ethereum.style.color = 'white';
    ethBtn.style.display = 'none';
    mineEth.style.display = 'block';
    // LITECOIN
    litecoin.style.backgroundColor = 'transparent';
    litecoin.style.color = 'black';
    lteBtn.style.display = 'block';
    mineLte.style.display = 'none';
}

litecoin.onclick = () => {
    // BITCOIN
    bitcoin.style.backgroundColor = 'transparent';
    bitcoin.style.color = 'black';
    btcBtn.style.display = 'block';
    mineBtc.style.display = 'none';
    // ETHEREUM
    ethereum.style.backgroundColor = 'transparent';
    ethereum.style.color = 'black';
    ethBtn.style.display = 'block';
    mineEth.style.display = 'none';
    // LITECOIN
    litecoin.style.backgroundColor = '#2B076E';
    litecoin.style.color = 'white';
    lteBtn.style.display = 'none';
    mineLte.style.display = 'block';
}
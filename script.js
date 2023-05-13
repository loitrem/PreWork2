const button = document.getElementById('button');
const output = document.getElementById('output');
console.log(button);
button.addEventListener("click",function(){
    const cost = document.getElementById('total').value;
    const percent = document.getElementById('tip').value;
    console.log(cost *(percent/100));
    let tip = (cost *(percent/100)).toFixed(2);
    let temp = `$${tip}`;
    document.getElementById('output').innerHTML = temp;
})
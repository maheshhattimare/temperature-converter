const celsiusBox=document.getElementById('celsiusBox');
const fahrenheitBox=document.getElementById('fahrenheitBox');
const reloadBtn=document.getElementById('reload');

//focus to the celsius input box when page loads
window.addEventListener('load',()=>{
    celsiusBox.focus();
})

//celsius to fahrenheit
celsiusBox.addEventListener('input',()=>{
    fahrenheitBox.value=(celsiusBox.value *(9/5)+32).toFixed(2);
    if(!celsiusBox.value){
        fahrenheitBox.value="";
    }
});

//fahrenheit to celsius
fahrenheitBox.addEventListener('input',()=>{
    celsiusBox.value=(((fahrenheitBox.value-32) * 5) / 9).toFixed(2);
    if(!fahrenheitBox.value){
        celsiusBox.value="";
    }
});
//reload button
reloadBtn.addEventListener('click',()=>{
    celsiusBox.value="";
    fahrenheitBox.value="";
    reloadBtn.classList.add('rotate');
    setTimeout(() => {
        reloadBtn.classList.remove('rotate');
    }, 300);
})

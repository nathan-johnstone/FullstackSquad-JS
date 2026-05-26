const btn = document.querySelector('#button-exercice-setInterval')
const timer = document.querySelector('#timer-title')

btn.addEventListener('click', () =>{
    let counter = 3;
    const intervalID = setInterval(() => {
        if(counter > 0){
            timer.innerHTML = counter;
            counter = counter - 1;
        }else{
            timer.innerHTML = "GO !";
            clearInterval(intervalID);
            console.log('here');
        }}, 1000);
});

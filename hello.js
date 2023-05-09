
let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
                string = "";
                document.querySelector('input').value = string;
            }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})

































// let screen = document.getElementsByClassName('input');
// let buttons = document.querySelectorAll('.button');
// for(item of buttons){
//     item.addEventListener('click',(e)=>{
//         buttonText = e.target.innerHTML;
//         console.log('ButtonText',buttonText);
//         if(buttonText == '*')
//         {
//             buttonText = '=';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if(buttonText == 'c')
//         {
//             screenValue = '';
//             screen.value = screenValue;

//         }
//         else if(buttonText == '=')
//         {
//             screen.value = eval(screenValue);
//         }
//         else{
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     })
// }






// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else{
//         console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//         }
//     })
// })


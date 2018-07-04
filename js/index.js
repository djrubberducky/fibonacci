
// let a,b,result;
//         a=0;
//         b=1;
//         result=b;
//         for(let i=1; i<100; i++)
//         {
//             document.write(result+"<br/>");
//             result=a+b;
//             a=b;
//             b=result;
//         }
let number = parseFloat(prompt('Enter number'));
const result = fibNum(number);
alert(number + ' in the fibonacci sequence holds ' + result);

function fibNum(number) {

    let fibPrev=1;
    let fibPrePrev=1;
    let fibNext;
    
    if(number==1 || number==2){
        return fibPrev;
    } else {

    for(let i=3; i <= number; i++) {
        
        fibNext = fibPrev + fibPrePrev;
        fibPrePrev = fibPrev;
        fibPrev = fibNext;
    }
    
    return fibNext;
   }
} 

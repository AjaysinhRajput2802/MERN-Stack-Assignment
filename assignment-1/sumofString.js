/*
    Assignment 1 - sumofString
    Author: Ajaysinh Rajput
*/

function sumofString(str){
    var sum=0; // to store sum
    var buffer="";

    for(let i=0;i<str.length;i++)
    {
        if(str[i]>='0' && str[i]<='9') // char is digit then add to buffer
            buffer+=str[i];
        else{
            if(buffer.length) // extract number from the buffer and add to the answer
            {
                sum+=parseInt(buffer);
                buffer=""; // reset buffer
            }
        }
    }
    // if there is still some number left in the buffer, add it to the answer
    if(buffer.length) 
        sum+=parseInt(buffer);
    return sum;
}

const str = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";
console.log(`Sum of numbers present in the string is ${sumofString(str)}.`);
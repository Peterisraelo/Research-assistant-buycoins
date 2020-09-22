let num=prompt("Enter the number");
let a=1;
let isprothnum = false;

function ispowertwo(num){
    if (num&& !(num&(num-1))){
        return true;
    }
    else{
        return false;
    }
}


function isproth(num){
    let k=1;
        while (k<(num/k)){
            if((num%k)==0){
                if(ispowertwo((num/k))){
                    return true;
                }
            }
            k=k+2;
        }
    return false;

}

if(isproth(num-1)){
    while(a<num){
        if(((a^((num-1)/2))%num)===1){
            isprothnum = true;
            break;
        }
        else{
            a++;
        }
    }
}else{
    console.log("Number is not proth");
}


if(isprothnum){
  console.log("Success: It is a Proth Prime");
}
else{
  console.log("Error: It is not a Proth Prime");
}
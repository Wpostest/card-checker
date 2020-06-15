const luhnaCheck = (num) =>{
    const str = num.toString();
    const reverseStr = str.split('').reverse().join('');
    let helper = '';

    for(let i in reverseStr){
        helper += i % 2 !== 0 ? reverseStr[i] * 2 : reverseStr[i];
    }

    return helper.split('').map(Number).reduce((a,b) => a + b) % 10 === 0;
}

const supplierCheck = (num) =>{
    const str = num.toString();
    const length = str.length;
    const firstNum = Number.parseInt(str[0]);
    const secoundNum = Number.parseInt(str[1]);

    if(firstNum === 4 && (length === 13 || length === 16)){
        return ['Visa', luhnaCheck(num)];
    }
    else if(firstNum === 5 && secoundNum >= 0 && secoundNum <= 5 && length === 16){
        return ['Mastercard', luhnaCheck(num)];
    }
    else if(firstNum === 3 && (secoundNum === 4 || secoundNum === 7) && length === 15){
        return ['American Express', luhnaCheck(num)];
    }
    else{
        return ['Nieprawidłowy', false];
    }
}

const checkCardNumber = (num) =>{
    if(!Number.isInteger(num)){
        throw new Error('Podana wartość nie jest integer`em');
    }

    const [cardName, isValidate] = supplierCheck(num);

    if(isValidate){
        return cardName;
    }
    else{
        return 'Nieprawidłowy';
    }
}

export {checkCardNumber};
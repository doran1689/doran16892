function tenToSmall()
{
    num = document.toBinary.number2.value;
    base = 2;
    smallNum = "";
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    if (num < 0) {
        return 'Put in a positive number'
    }
    else
    {
        while (num > 0)
        {
            smallNum = num % base + smallNum;
            num = Math.floor(num / 2);
        }
        return smallNum;
    }
}

function smallToTen()
{
    num = document.fromBinary.number.value;
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;
    if (num < 0)
    {
        return 'Put in a positive number'
    }
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    while(numLength > 0)
    {
        var demoninator = Math.pow(10, (numLength-1));
        var currentDigit = Math.floor(num/demoninator);
        if (currentDigit >= 2)
        {
            return 'Only 1\'s and 0\'s'
        }
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        num = num%demoninator;
        numLength--;
    }
    return tenNum;
}

function xToy()
{
    num = document.fromBase.number.value;
    base = document.fromBase.base.value;
    base2 = document.fromBase.base2.value;
    tenNum = 0;
    numLength = num.toString().length;
    smallNum = "";
    if (num > Math.floor(num))
    {
        return 'No decimals'
    }
    if (base > Math.floor(base))
    {
        return 'No decimals'
    }
    if (base2 > Math.floor(base2))
    {
        return 'No decimals'
    }
    if (num <= 0)
    {
        return 'Put in a greater number'
    }
    if (base <= 1)
    {
        return 'Put in a greater base'
    }
    if (base2 <= 1)
    {
        return 'Put in a greater base'
    }
    if (base > 10)
    {
        return 'Put in a smaller base'
    }
    if (base2 > 10)
    {
        return 'Put in a smaller base'
    }
    while(numLength > 0)
    {
        var demoninator = Math.pow(10, (numLength - 1));
        var currentDigit = Math.floor(num / demoninator);
        if (currentDigit >= base)
        {
            return 'Put in the correct base'
        }
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);
        num = num % demoninator;
        numLength--;
    }
    num = tenNum;
    while (num > 0)
    {
        smallNum = num % base2 + smallNum;
        num = Math.floor(num / base2);
    }
    return smallNum;
}
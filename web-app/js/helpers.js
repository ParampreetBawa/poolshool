var getBaseUrl =  function() {
    var href=window.location.href;
    var slashIndex=0;
    for(var index=0; index<3 && index>=0; index++)
    {
        slashIndex=href.indexOf("/",slashIndex+1)
    }
    if (slashIndex<0)
    {
        slashIndex=href.length
    }
    return href.substring(0,slashIndex)


};

var largeNumToString = function(num){
    if (num<1000)
    {
        return ""+num
    }
    else if (num<1000000)
    {
        // BigDecimal val=new BigDecimal(num).divide(1000,2,RoundingMode.HALF_UP)
        var val = parseFloat((num / 1000).toFixed(2));
        return truncate3Digit(val)+"K"
    }
    else if (num<1000000000)
    {
        var val = parseFloat((num / 1000000).toFixed(2));
        return ""+ truncate3Digit(val)+"M"
    }
    else
    {
        return "1B+"
    }
};

var largeNumberToString = function(num){
    //console.log(num);
    if (num<1000)
    {
        return ""+numberWithCommas(num)
    }
    else if (num<1000000000)
    {
        var val = parseFloat((num / 1000000).toFixed(2));
        return ""+ truncate3Digit(val)+"M"
    }
    else
    {
        return "1B+"
    }
};
var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var truncate3Digit=function(val){
    var strVal= ""+val;
    if(strVal.length>3)
    {
        strVal=strVal.substring(0,3)
    }
    if (strVal.indexOf('.') == (strVal.length - 1))
        strVal=strVal.substring(0,strVal.length-1);

    return strVal
};
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
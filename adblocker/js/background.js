function ads(){
    var v = document.querySelectorAll('*[id^="IL"]');
    var len = v.length;
    for (var i=0; i<len; i++)
        v[i].remove();
        
    var v2 = document.getElementsByClassName("noAdLabel");
    var len2 = v2.length;
    for (var i=0; i<len2; i++)
    v2[i].remove();
        
    var v3 = document.querySelectorAll('*[class^="ad"]');
    var len3 = v3.length;
    for (var i=0; i<len3; i++)
        v3[i].remove();
            
    var v4 = document.querySelectorAll('*[id^="google_image"]');
    var len4 = v4.length;
    for (var i=0; i<len4; i++)
        v4[i].remove();
        
    var v5 = document.querySelectorAll('*[id^="ad"]');
    var len5 = v5.length;
    for (var i=0; i<len5; i++)
    v5[i].remove();
    
    var v6 = document.querySelectorAll('*[id^="google_ads"]');
    var len6 = v6.length;
    for (var i=0; i<len6; i++)
        v6[i].remove();

    var v7 = document.querySelectorAll('cl')
}


var contextMenus = {};

contextMenus.createCounterString = 
chrome.contextMenus.create(
    {"title":"ADBLOCK_V"},
    function (){
        if(chrome.runtime.lastError){
            console.log(chrome.runtime.lastError.message);
        }
    }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tabs){
    if(info.menuItemId===contextMenus.createCounterString){
        chrome.tabs.executeScript({
            file: "js/script.js"
        })
    }
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        ads()
    }
  })

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
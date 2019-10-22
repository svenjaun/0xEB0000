
var get = function(url, state, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true);
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4)
            callback(JSON.parse(xmlHttp.responseText), xmlHttp.status);
    }
    xmlHttp.send(null);
}


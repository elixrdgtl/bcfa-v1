function loadHTML(url, componentID) {
    fetch(url)
        .then(function (response) {
            return response.text();
        }).then(function (html) {
            let parser = new DOMParser();
            let dom = parser.parseFromString(html,"text/html");
            document.querySelector(componentID).innerHTML += html;
            console.log(html);
        }).catch(function(e){
            console.log("Fetch failed, error:",e);
        })
}

window.onload = function (e) {    
    console.log("ok");
    loadHTML("pages/header-head.html","#main-container");
    loadHTML("pages/header-navigation.html","#main-container");
    loadHTML("pages/body.html","#main-container");
}
function pageChandler(request) {
    var request = document.querySelector(request);
    for (var i = 0; i < 3; i++) {
        var search = ".section_" + (i + 1);
        var main = document.querySelector(search);
        visibilityMain(main, false);
    }
    visibilityMain(request, true);
}

function visibilityMain(page, action) {
    if (action == true) {
        page.style.display = "block";
    } else {
        page.style.display = "none";
    }
}

function hiddeElement(request,hidde){
    var request = document.querySelector(request);
    visibilityMain(request,hidde);
}
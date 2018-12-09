window.onload = function () {
    var elem = document.querySelector('input[type="range"]');
    var theTemp;

    var rangeValue = function () {
        var newValue = elem.value;
        var target = document.querySelector('.value');
        theTemp = newValue;
        target.innerHTML = newValue;
    }

    elem.addEventListener("input", rangeValue);

    var ws = new WebSocket("192.168.4.1:8080");

    ws.onopen = function (evt) {
        console.log("Connection open ...");
        ws.send(theTemp);
    };

    ws.onmessage = function (evt) {
        console.log("Received Message: " + evt.data);
        ws.close();
    };

    ws.onclose = function (evt) {
        console.log("Connection closed.");
    };
}
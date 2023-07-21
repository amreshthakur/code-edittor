
function runCode() {
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;

    var output = document.getElementById('output');
    output.innerHTML = htmlCode;

    var style = document.createElement('style');
    style.innerHTML = cssCode;
    output.appendChild(style);

    var script = document.createElement('script');
    script.innerHTML = jsCode;
    output.appendChild(script);
};
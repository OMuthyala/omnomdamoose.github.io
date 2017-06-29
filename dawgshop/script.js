document.getElementById('go').onclick = function() {
    var inputText = $('#textinput').val();
    var dawgifiedText = inputText + ", dawg";
    document.getElementById('output').innerHTML = dawgifiedText;
};
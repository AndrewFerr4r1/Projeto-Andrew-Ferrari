function converterDecimal() {
    var decimal = parseInt(document.getElementById("inputDecimal").value);
    var binario = decimal.toString(2);
    var octal = decimal.toString(8);
    var hexa = decimal.toString(16);

    comeco = document.getElementById("resultado").innerHTML = 
    `<table border="1">
        <tr>
            <td>Decimal</td>
            <td>Binário</td>
            <td>Octal</td>
            <td>Hexadecimal</td>
        </tr>
        <tr>    
            <td>${decimal}</td>
            <td>${binario}</td>
            <td>${octal}</td>
            <td>${hexa}</td>
    </table>`

    document.getElementById("inputDecimal").value = '';
    
}

function converterBinario() {
    var binario = parseInt(document.getElementById("inputBinario").value);
    var converterBinario = binario.toString(2);
    var decimal = binario.toString(10);
    var octal = binario.toString(8);
    var hexa = binario.toString(16);

    document.getElementById("resultado").innerHTML =
    `<table border="1">
        <tr>
            <td>Decimal</td>
            <td>Binário</td>
            <td>Octal</td>
            <td>Hexadecimal</td>
        </tr>
        <tr>    
            <td>${decimal}</td>
            <td>${converterBinario}</td>
            <td>${octal}</td>
            <td>${hexa}</td>
    </table>`

    document.getElementById("inputBinario").value = '';
}

function converterOctal() {
    var octal = parseInt(document.getElementById("inputOctal").value);
    var converterOctal = octal.toString(8);
    var decimal = octal.toString(10);
    var binario = octal.toString(2);
    var hexa = octal.toString(16);

    document.getElementById("resultado").innerHTML = 
    `<table border="1">
        <tr>
            <td>Decimal</td>
            <td>Binário</td>
            <td>Octal</td>
            <td>Hexadecimal</td>
        </tr>
        <tr>    
            <td>${decimal}</td>
            <td>${binario}</td>
            <td>${converterOctal}</td>
            <td>${hexa}</td>
    </table>`

    document.getElementById("inputOctal").value = '';
}

function converterHexa() {
    var hexa = parseInt(document.getElementById("inputHexa").value);
    var converterHexa = hexa.toString(16);
    var decimal = hexa.toString(10);
    var binario = hexa.toString(2);
    var octal = hexa.toString(8);

    document.getElementById("resultado").innerHTML = 
    `<table border="1">
        <tr>
            <td>Decimal</td>
            <td>Binário</td>
            <td>Octal</td>
            <td>Hexadecimal</td>
        </tr>
        <tr>    
            <td>${decimal}</td>
            <td>${binario}</td>
            <td>${octal}</td>
            <td>${converterHexa}</td>
    </table>`

    document.getElementById("inputHexa").value = '';
}
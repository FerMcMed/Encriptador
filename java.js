// Función para encriptar el texto
function encryptText(text) {
    // Reemplaza cada letra con una letra encriptada
    return text
        .replace(/e/g, "enter") // Reemplaza 'e' con 'enter'
        .replace(/i/g, "imes")  // Reemplaza 'i' con 'imes'
        .replace(/a/g, "ai")    // Reemplaza 'a' con 'ai'
        .replace(/o/g, "ober")  // Reemplaza 'o' con 'ober'
        .replace(/u/g, "ufat"); // Reemplaza 'u' con 'ufat'
}

// Función para desencriptar el texto
function decryptText(text) {
    // Reemplaza cada secuencia de texto encriptada con la letra original
    return text
        .replace(/enter/g, "e") // Reemplaza 'enter' con 'e'
        .replace(/imes/g, "i")  // Reemplaza 'imes' con 'i'
        .replace(/ai/g, "a")    // Reemplaza 'ai' con 'a'
        .replace(/ober/g, "o")  // Reemplaza 'ober' con 'o'
        .replace(/ufat/g, "u"); // Reemplaza 'ufat' con 'u'
}

// Obtiene los elementos del DOM por su ID
const inputText = document.getElementById('inputText'); // Área de texto para ingresar el texto
const outputText = document.getElementById('outputText'); // Área de texto para mostrar el resultado
const encryptButton = document.getElementById('encryptButton'); // Botón para encriptar
const decryptButton = document.getElementById('decryptButton'); // Botón para desencriptar
const copyButton = document.getElementById('copyButton'); // Botón para copiar el texto
const clearButton = document.getElementById('clearButton'); // Botón para borrar el texto

// Añade un event listener al botón de encriptar
encryptButton.addEventListener('click', () => {
    // Encripta el texto ingresado y muestra el resultado
    const encrypted = encryptText(inputText.value.toLowerCase()); // Convierte a minúsculas y encripta
    outputText.value = encrypted; // Muestra el texto encriptado
});

// Añade un event listener al botón de desencriptar
decryptButton.addEventListener('click', () => {
    // Desencripta el texto mostrado y actualiza el resultado
    const decrypted = decryptText(outputText.value); // Desencripta el texto encriptado
    outputText.value = decrypted; // Muestra el texto desencriptado
});

// Añade un event listener al botón de copiar
copyButton.addEventListener('click', () => {
    // Selecciona el texto en el área de texto y copia al portapapeles
    outputText.select(); // Selecciona el texto del área de texto
    document.execCommand('copy'); // Ejecuta el comando para copiar
    alert('Texto copiado al portapapeles'); // Muestra un mensaje de confirmación
});

// Añade un event listener al botón de borrar
clearButton.addEventListener('click', () => {
    // Limpia los campos de entrada y resultado
    inputText.value = ''; // Limpia el área de texto de entrada
    outputText.value = ''; // Limpia el área de texto de resultado
    inputText.focus(); // Coloca el cursor en el área de texto de entrada
}); 
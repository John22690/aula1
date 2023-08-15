function mostrar() {
    let nome= document.getElementById("nome").value;
    let idade= Number(document.getElementById("idade").value);
    
    document.getElementById("resposta").innerHTML = "Seu nome é: "+ nome+ ". E sua idade é: "+ idade
}
function copyToClipboard() {
    const codeSnippet = document.getElementById('code-snippet');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}
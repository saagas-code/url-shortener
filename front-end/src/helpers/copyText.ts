
const copyText = (text: string) => {
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);

    // Seleciona o texto dentro do elemento de área de transferência
    tempElement.select();
    tempElement.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento temporário
    document.body.removeChild(tempElement);

    // Define o estado para exibir um feedback de sucesso

    // Limpa o feedback após alguns segundos
}

export default copyText
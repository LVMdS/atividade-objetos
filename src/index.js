const prompt = require('prompt-sync')(); 

function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

console.log("Por favor, forneça suas informações:");
const nomeCliente = prompt("Nome: ");
const emailCliente = prompt("Email: ");
const enderecoCliente = prompt("Endereço: ");

let carrinho = [];

// Loop para adicionar produtos ao carrinho
while (true) {
    console.log("\nAdicione um produto ao carrinho:");
    const nome = prompt("Nome do produto: ");
    const preco = parseFloat(prompt("Preço do produto: "));
    const quantidade = parseInt(prompt("Quantidade: "));

    const subtotal = calcularSubtotal(preco, quantidade);

    // Adicionando o produto ao carrinho
    carrinho.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        subtotal: subtotal
});

    const continuar = prompt("Deseja adicionar mais produtos? (s/n): ");
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}

// Exibindo os itens do carrinho
console.log("\nItens no carrinho:");
let totalCompra = 0;
for (const item of carrinho) {
    console.log(`${item.nome} - Preço: R$${item.preco.toFixed(2)} - Quantidade: ${item.quantidade} - Subtotal: R$${item.subtotal.toFixed(2)}`);
    totalCompra += item.subtotal;
}
console.log(`\nTotal da compra: R$${totalCompra.toFixed(2)}`);

console.log("\nInformações do Cliente:");
console.log(`Nome: ${nomeCliente}`);
console.log(`Email: ${emailCliente}`);
console.log(`Endereço: ${enderecoCliente}`);
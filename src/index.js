
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProduto(nome, precoUnitario, quantidade) {
    
    let subtotal = precoUnitario * quantidade;

    // Adicionar o produto ao carrinho como um objeto
    carrinho.push({
        nome: nome,
        precoUnitario: precoUnitario,
        quantidade: quantidade,
        subtotal: subtotal
    });

   
    exibirCarrinho();
}

// Função para remover um produto do carrinho
function removerProduto(index) {
    carrinho.splice(index, 1); 
    exibirCarrinho();
}

// Função para exibir os produtos no carrinho e calcular o valor total da compra
function exibirCarrinho() {
    console.log("\nProdutos no Carrinho:");

    let totalCompra = 0;
    document.getElementById("listaProdutos").innerHTML = '';

    // Iterar sobre cada produto no carrinho
    carrinho.forEach((produto, index) => {
        console.log(`\nProduto ${index + 1}:`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço unitário: R$ ${produto.precoUnitario.toFixed(2)}`);
        console.log(`Quantidade: ${produto.quantidade}`);
        console.log(`Subtotal: R$ ${produto.subtotal.toFixed(2)}`);

        // Somar o subtotal ao total da compra
        totalCompra += produto.subtotal;

        // Adicionar produto à lista no HTML com botão para remover
        let produtoHTML = `<li>
                            <span>Nome: ${produto.nome}</span><br>
                            <span>Preço unitário: R$ ${produto.precoUnitario.toFixed(2)}</span><br>
                            <span>Quantidade: ${produto.quantidade}</span><br>
                            <span>Subtotal: R$ ${produto.subtotal.toFixed(2)}</span>
                            <button onclick="removerProduto(${index})">Remover</button>
                           </li>`;
        document.getElementById("listaProdutos").innerHTML += produtoHTML;
    });


    document.getElementById("total").innerText = `Total da Compra: R$ ${totalCompra.toFixed(2)}`;
}

// Event listener para o formulário de adição de produtos
document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value;
    let precoUnitario = parseFloat(document.getElementById("preco").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    adicionarProduto(nome, precoUnitario, quantidade);
});

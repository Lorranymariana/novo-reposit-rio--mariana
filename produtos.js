const produtos={
    nome:"tablet",
    preco:1300,
    marca: "samsung"};

    for(let chave in produtos){
    console.log (` ${chave}: ${produtos[chave]}`);

    }
console.log(Object.keys(produtos));
console.log(Object.values(produtos));



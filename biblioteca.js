const biblioteca = {
  livros: [],

  adicionarLivros(nome, autor, ano, genero, estoque) {
    const livro = {
      nome,
      autor,
      ano,
      genero,
      disponivel: true,
      alugado: false,
      vezesAlugado: 0,
      estoque: estoque
    };
    this.livros.push(livro);
  },

  mostrarLivros() {
    for (let i = 0; i < this.livros.length; i++) {
      const L = this.livros[i];
      console.log(`${L.nome} - ${L.autor} - ${L.ano} - ${L.genero} - Estoque: ${L.estoque}`);
    }
  },

  alugar(nome) {
    let livroEncontrado = false;
    for (let i = 0; i < this.livros.length; i++) {
      const L = this.livros[i];
      if (L.nome === nome) {
        livroEncontrado = true;
        if (L.disponivel === true && L.estoque > 0) {
          L.disponivel = false;
          L.alugado = true;
          L.estoque -= 1;
          L.vezesAlugado += 1;
          console.log(`\nO livro "${nome}" foi alugado com sucesso!`);
        } else if (L.estoque <= 0) {
          console.log(`\nO livro "${nome}" está sem estoque.`);
        } else {
          console.log(`\nO livro "${nome}" já está alugado.`);
        }
        break; // Para o loop depois de encontrar o livro
      }
    }

    if (!livroEncontrado) {
      console.log(`\nO livro "${nome}" não existe na biblioteca.`);
    }
  },

  devolver(nome) {
    for (let i = 0; i < this.livros.length; i++) {
      const L = this.livros[i];
      if (L.nome === nome) {
        if (L.alugado === true) {
          L.disponivel = true;
          L.alugado = false;
          L.estoque += 1;
          console.log("o livro foi devolvido com sucesso");
          return;
        } else {
          console.log("o livro não está alugado");
          return;
        }
      }
    }
    console.log("o livro não existe na biblioteca");
  },

  remover(nome) {
    let livroEncontrado = false;
    for (let i = 0; i < this.livros.length; i++) {
      const L = this.livros[i];
      if (L.nome.toLowerCase() === nome.toLowerCase()) {
        this.livros.splice(i, 1);
        console.log("O Livro " + L.nome + " foi removido com sucesso!");
        livroEncontrado = true;
        break; 
      }
    }
    if (!livroEncontrado) {
      console.log("Livro não encontrado!");
    }
  }
};

biblioteca.adicionarLivros("Dom Quixote", "Miguel de Cervantes", 1605, "Romance", 2);
biblioteca.adicionarLivros("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia", 3);
biblioteca.adicionarLivros("1984", "George Orwell", 1949, "Ficção Científica", 1);
biblioteca.adicionarLivros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Fantasia", 5);

console.log("Livros na biblioteca:");
biblioteca.mostrarLivros();

biblioteca.alugar("Dom Quixote");
biblioteca.alugar("1984");
biblioteca.alugar("O Senhor dos Anéis");
biblioteca.alugar("Harry Potter e a Pedra Filosofal"); 

console.log("\n--- Status dos Livros Após Aluguéis ---");
biblioteca.mostrarLivros();
biblioteca.devolver("Dom Quixote");
biblioteca.remover("Harry Potter e a Pedra Filosofal");
biblioteca.mostrarLivros()
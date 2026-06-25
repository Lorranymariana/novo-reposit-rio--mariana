const biblioteca = {
  livros: [],

  adicionarLivros(nome, autor, ano, genero) {
    const livro = {
      nome,
      autor,
      ano,
      genero,
      disponivel: true,
      alugado: false,
      vezesAlugado: 0
    };
    this.livros.push(livro);
  },

  mostrarLivros() {
    for (let i = 0; i < this.livros.length; i++) {
      const L = this.livros[i];
      console.log(L.nome + " - " + L.autor + " - " + L.ano + " - " + L.genero);
    }
  }
};

biblioteca.adicionarLivros("Dom Quixote", "Miguel de Cervantes", 1605, "Romance");
biblioteca.adicionarLivros("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
biblioteca.adicionarLivros("1984", "George Orwell", 1949, "Ficção Científica");
biblioteca.adicionarLivros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Fantasia");

console.log(biblioteca.livros);
biblioteca.mostrarLivros();

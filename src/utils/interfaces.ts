interface Produto {
  nome: string;
  valor?: number;
}

interface Cesta {
  nome: string;
  descricao?: string;
  produtos?: Produto[];
}

interface Fazenda {
  nomeDaFazenda: string;
  logo: string;
  cestas?: Cesta[];
}

export { Cesta, Fazenda, Produto };

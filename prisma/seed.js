import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const comidasData = [
  // Pratos Principais
  { nome: 'Pizza Margherita', tipo: 'Prato Principal', preco: 35.50, descricao: 'Clássica pizza Margherita com molho, queijo e manjericão.' },
  { nome: 'Lasanha Bolonhesa', tipo: 'Prato Principal', preco: 42.00, descricao: 'Massa em camadas com molho bolonhesa e queijo.' },
  { nome: 'Hambúrguer Clássico', tipo: 'Prato Principal', preco: 28.00, descricao: 'Hambúrguer de carne com queijo, alface e tomate.' },
  { nome: 'Sushi (Combinado 20 peças)', tipo: 'Prato Principal', preco: 55.00, descricao: 'Seleção de sushi e sashimi frescos.' },
  { nome: 'Feijoada Completa', tipo: 'Prato Principal', preco: 48.90, descricao: 'Tradicional feijoada brasileira com acompanhamentos.' },
  { nome: 'Moqueca de Peixe', tipo: 'Prato Principal', preco: 65.00, descricao: 'Ensopado de peixe com leite de coco e dendê.' },
  { nome: 'Frango Assado com Batatas', tipo: 'Prato Principal', preco: 39.90, descricao: 'Frango suculento assado com batatas coradas.' },
  { nome: 'Bife à Parmegiana', tipo: 'Prato Principal', preco: 45.00, descricao: 'Bife empanado com molho de tomate e queijo gratinado.' },
  { nome: 'Strogonoff de Carne', tipo: 'Prato Principal', preco: 40.00, descricao: 'Tiras de carne ao molho cremoso de cogumelos.' },
  { nome: 'Risoto de Cogumelos', tipo: 'Prato Principal', preco: 52.00, descricao: 'Arroz arbóreo cremoso com mix de cogumelos.' },
  { nome: 'Paella Valenciana', tipo: 'Prato Principal', preco: 75.00, descricao: 'Arroz espanhol com açafrão, frutos do mar e carnes.' },
  { nome: 'Spaghetti Carbonara', tipo: 'Prato Principal', preco: 44.00, descricao: 'Massa com molho de ovos, queijo pecorino e pancetta.' },
  { nome: 'Salmão Grelhado', tipo: 'Prato Principal', preco: 58.00, descricao: 'Posta de salmão grelhado com legumes.' },
  { nome: 'Churrasco Misto (para 1)', tipo: 'Prato Principal', preco: 62.00, descricao: 'Seleção de carnes grelhadas na brasa.' },
  { nome: 'Bacalhau à Brás', tipo: 'Prato Principal', preco: 70.00, descricao: 'Bacalhau desfiado com batata palha, ovos e azeitonas.' },

  // Acompanhamentos e Lanches
  { nome: 'Batata Frita (Porção)', tipo: 'Acompanhamento', preco: 18.00, descricao: 'Porção generosa de batatas fritas crocantes.' },
  { nome: 'Pão de Alho', tipo: 'Acompanhamento', preco: 12.00, descricao: 'Pão com pasta de alho e ervas, assado na brasa.' },
  { nome: 'Salada Caesar', tipo: 'Acompanhamento', preco: 25.00, descricao: 'Alface romana, croutons, parmesão e molho Caesar.' },
  { nome: 'Arroz Branco (Porção)', tipo: 'Acompanhamento', preco: 10.00, descricao: 'Porção de arroz branco soltinho.' },
  { nome: 'Purê de Batata', tipo: 'Acompanhamento', preco: 15.00, descricao: 'Purê de batatas cremoso com manteiga.' },
  { nome: 'Farofa de Bacon', tipo: 'Acompanhamento', preco: 14.00, descricao: 'Farofa de mandioca com bacon crocante.' },
  { nome: 'Coxinha de Frango', tipo: 'Lanche', preco: 8.00, descricao: 'Salgado frito com recheio cremoso de frango.' },
  { nome: 'Pastel de Queijo', tipo: 'Lanche', preco: 7.50, descricao: 'Pastel frito na hora com recheio de queijo.' },
  { nome: 'Pão de Queijo (Unidade)', tipo: 'Lanche', preco: 4.00, descricao: 'Tradicional pão de queijo mineiro.' },
  { nome: 'Kibe', tipo: 'Lanche', preco: 8.00, descricao: 'Salgado de trigo e carne moída.' },
  { nome: 'Sanduíche Natural', tipo: 'Lanche', preco: 15.00, descricao: 'Sanduíche frio com pão integral, frango e salada.' },

  // Sobremesas
  { nome: 'Bolo de Chocolate (Fatia)', tipo: 'Sobremesa', preco: 16.00, descricao: 'Fatia de bolo de chocolate com cobertura.' },
  { nome: 'Pudim de Leite', tipo: 'Sobremesa', preco: 14.00, descricao: 'Pudim de leite condensado com calda de caramelo.' },
  { nome: 'Sorvete (2 bolas)', tipo: 'Sobremesa', preco: 18.00, descricao: 'Duas bolas de sorvete de sua escolha.' },
  { nome: 'Mousse de Maracujá', tipo: 'Sobremesa', preco: 15.00, descricao: 'Mousse cremoso de maracujá com calda.' },
  { nome: 'Brigadeiro (Unidade)', tipo: 'Sobremesa', preco: 3.50, descricao: 'Doce tradicional de chocolate granulado.' },
  { nome: 'Torta de Limão (Fatia)', tipo: 'Sobremesa', preco: 17.00, descricao: 'Fatia de torta com recheio de limão e merengue.' },
  { nome: 'Cheesecake de Frutas Vermelhas', tipo: 'Sobremesa', preco: 20.00, descricao: 'Torta de queijo cremosa com calda de frutas vermelhas.' },
  { nome: 'Brownie com Sorvete', tipo: 'Sobremesa', preco: 22.00, descricao: 'Brownie quente de chocolate com bola de sorvete.' },
  { nome: 'Açaí na Tigela (500ml)', tipo: 'Sobremesa', preco: 24.00, descricao: 'Açaí batido com banana e granola.' },
  { nome: 'Tiramisu', tipo: 'Sobremesa', preco: 21.00, descricao: 'Sobremesa italiana de café, queijo mascarpone e biscoitos.' },

  // Bebidas
  { nome: 'Água Mineral (500ml)', tipo: 'Bebida', preco: 5.00, descricao: 'Água mineral sem gás.' },
  { nome: 'Refrigerante (Lata)', tipo: 'Bebida', preco: 7.00, descricao: 'Lata de refrigerante (vários sabores).' },
  { nome: 'Suco Natural de Laranja (300ml)', tipo: 'Bebida', preco: 9.00, descricao: 'Suco de laranja espremido na hora.' },
  { nome: 'Cerveja Long Neck', tipo: 'Bebida', preco: 12.00, descricao: 'Cerveja nacional (várias marcas).' },
  { nome: 'Taça de Vinho Tinto', tipo: 'Bebida', preco: 25.00, descricao: 'Taça de vinho tinto seco da casa.' },
  { nome: 'Café Espresso', tipo: 'Bebida', preco: 6.00, descricao: 'Café espresso curto e forte.' },
  { nome: 'Caipirinha de Limão', tipo: 'Bebida', preco: 18.00, descricao: 'Drink clássico brasileiro com cachaça, limão e açúcar.' },

  // Frutas (para fins de exemplo)
  { nome: 'Maçã (Unidade)', tipo: 'Fruta', preco: 2.00, descricao: 'Maçã Gala ou Fuji fresca.' },
  { nome: 'Banana (Unidade)', tipo: 'Fruta', preco: 1.50, descricao: 'Banana nanica ou prata.' },
  { nome: 'Cacho de Uva', tipo: 'Fruta', preco: 9.00, descricao: 'Cacho de uva verde sem semente.' },
  { nome: 'Morango (Caixa)', tipo: 'Fruta', preco: 12.00, descricao: 'Caixa de morangos frescos selecionados.' },
  { nome: 'Abacaxi (Unidade)', tipo: 'Fruta', preco: 10.00, descricao: 'Abacaxi pérola doce.' },
  
  // Mais 2 comidas (Total 54)
  { nome: 'Pastel de Carne', tipo: 'Lanche', preco: 7.50, descricao: 'Pastel frito na hora com recheio de carne moída.' },
  { nome: 'Suco de Abacaxi com Hortelã', tipo: 'Bebida', preco: 9.50, descricao: 'Suco natural refrescante de abacaxi com hortelã.' }
];

// Função principal que executa o seed
async function main() {
  console.log('Iniciando o processo de seed...');

  // 1. Limpa o banco de dados (Reset)
  // Isso garante que você não terá duplicatas se rodar a seed de novo
  console.log('Limpando a tabela "comida"...');
  await prisma.comida.deleteMany({});

  // 2. Insere os dados
  console.log('Inserindo 54 comidas...');
  await prisma.comida.createMany({
    data: comidasData,
  });

  console.log('Seed finalizado com sucesso!');
}

// Executa a função 'main' e lida com erros
main()
  .catch((e) => {
    console.error('Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    // 4. Desconecta do banco de dados ao finalizar
    await prisma.$disconnect();
  });
import * as foodModel from "../models/foodModel.js";

export const listarTodos = async (req, res) => {
  try {
    const comidas = await foodModel.encontreTodos();

    if(!comidas || comidas.length === 0) {
      res.status(404).json({
        mensagem: "Não há comidas na lista.",
        comidas
      })
    }

    res.status(200).json({
        total: comidas.length,
        mensagem: "Lista de comidas",
        comidas: comidas
    })

  } catch (error) {
    res.status(500).json({
        error: "Erro interno do servidor.",
        details: error.message,
        status: 500
    });
  }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                erro: 'ID inválido.',
                mensagem: 'O ID fornecido não é um número.'
            });
        }

        const comida = await foodModel.encontreUm(id);

        if (!comida) {
            return res.status(404).json({
                erro:'Comida não encontrada.',
                mensagem: `Verifique o id da comida.`,
                id: id  
            });
        }

        res.status(200).json({
            mensagem: "Comida encontrada com sucesso.",
            comida
        });
        
    } catch (error) {
        res.status(500).json({
            error: "Erro interno do servidor.",
            details: error.message,
            status: 500
        });
    }
}

export const criar = async (req, res) => {
  try {
    const { nome, tipo, preco, descricao } = req.body;

    const dado = { nome, tipo, preco, descricao }

    // Validação
    const camposObrigatorios = ['nome', 'tipo', 'preco', 'descricao'];
    
    const faltando = camposObrigatorios.filter(campo => !dado[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
      });
    }

    const novaComida = await foodModel.criar(req.body)

    res.status(201).json({
      mensagem: 'comida criada com sucesso!',
      comida: novaComida
    })

  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao criar comida',
      detalhes: error.message
    })
  }
}

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const comidaExiste = await foodModel.encontreUm(id);

    if (!comidaExiste) {
      return res.status(404).json({
        erro: 'Comida com esse id não encontrada',
        id: id
      })
    }

    await foodModel.deletar(id);

    res.status(200).json({
      mensagem: 'Comida apagado com sucesso!',
      comidaRemovida: comidaExiste
    })

  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao apagar comida!',
      detalhes: error.message
    })
  }
}

export const atualizar = async (req, res) => { 
  try {
    const id = parseInt(req.params.id);
    const dado = req.body;

    const comidaExiste = await foodModel.encontreUm(id);

    if (!comidaExiste) {
      return res.status(404).json({
        erro: 'Comida com esse id não foi encontrado',
        id: id
      })
    }

    const comidaAtualizada = await foodModel.atualizar(id, dado);

    res.status(200).json({
      mensagem: 'comida atualizado com sucesso!',
      comida: comidaAtualizada
    })

  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao atualizar comida!',
      detalhes: error.message
    })
  }
}
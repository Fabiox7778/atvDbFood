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
        const { id } = parsetInt(req.params.id);
        const comida = await foodModel.encontreUm(id);

        if(!comida) {
            res.status(404).json({
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
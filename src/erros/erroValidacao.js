import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const errorMessage = Object.values(erro.errors)
      .map((erro) => {
        return erro.message;
      })
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${errorMessage}`);
  }
}

export default ErroValidacao;

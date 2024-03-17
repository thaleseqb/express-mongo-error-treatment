import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "O titulo do livro é obrigatório"],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O autor(a) é obrigatório"],
  },
  editora: {
    type: String,
    required: [true, "A editora é um obrigatória"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: "A editora {VALUE} fornecida não é um valor permitido",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 10 && value <= 5000;
      },
      message:
        "O número de páginas deve ester entre 10 e 5000. Valor fornecido foi {VALUE}",
    },
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;

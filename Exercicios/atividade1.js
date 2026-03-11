// Modele as seguintes classes:
// curso: possui nome e carga horaria
// turma: está ligada a um curso e contem uma lista de estudantes (Estudante).
// Não permitir estudantes duplicados na turma. Garantir que toda turma esteja ligada a um curso válido.

// Implementado a classe Curso e seus atributos (nome do curso e sua carga horária)
// a classe é um molde, ela diz "todo objeto do tipo curso terá: nome e cargahoraria", objeto é algo criado a partir de uma classe.
class Curso{
  constructor(nome, cargahoraria){ // o constructor serve para inicializar o objeto, ele recebe os valores e coloca eles nos atributos do objeto
    this.nome = nome; // this significa "este objeto que está sendo criado"
    this.cargahoraria = cargahoraria;
  }
}

// Implementando a classe Estudante e seus atributos (nome e matrícula)
class Estudantes{
  constructor(nome, matricula){
    this.nome = nome;
    this.matricula = matricula;
  }
}


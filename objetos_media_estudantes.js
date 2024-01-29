let studentList = [];
let option = 0;

function student(name, score1, score2) {
  this.name = name;
  this.score1 = score1;
  this.score2 = score2;
  this.average = function () {
    return (this.score1 + this.score2) / 2;
  };
}

while (option != 3) {
  option = Number(prompt(`
  Olá usuário! Digite o número da opção desejada
    
  1. Cadastrar estudante
  2. Exibir resultado do concurso
  3. Sair`
  ));

  switch(option) {
    case 1:
      let name = prompt("Qual o nome do(a) estudante?");
      let score1 = Number(prompt("Qual a nota da primeira prova?"));
      let score2 = Number(prompt("Qual a nota da segunda prova?"));
      studentList.push(new student(name, score1, score2));
      alert("Novo estudante cadastrado");
      break;
    case 2:
      if (studentList.length == 0) {
        alert("Não há estudantes cadastrados");
      } else {
        let approvedTotal = 0;
        for (let i = 0; i < studentList.length; i++) {
          let average = studentList[i].average();
          let resultScore = "";

          if (average < 7) {
            resultScore = `Não foi desta vez ${studentList[i].name}! Tente novamente!`;
          } else if (average >= 7 && average <= 9) {
            resultScore = `Parabéns, ${studentList[i].name}! Você foi aprovado(a) no concurso!`;
            approvedTotal++;
          } else if ( average >= 10 ) {
            resultScore = `Parabéns, ${studentList[i].name}! Você foi aprovado(a) no concurso com NOTA MÁXIMA!`;
            approvedTotal++;
          }
          alert(`A média do(a) estudante ${studentList[i].name} é: ${average} \n${resultScore}`);
        }

        alert(`Total de estudantes aprovados: ${approvedTotal}`);
      }
      break;
    case 3:
      alert("Saindo....");
      break;
    default:
      alert("Opção não reconhecida.");
      break;
  }
}

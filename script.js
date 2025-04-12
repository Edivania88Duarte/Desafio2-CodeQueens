let nome = prompt("Digite o nome do aluno(a):");
let idade = parseInt(prompt("Digita a idade do aluno(a):"));
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno(a):"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno(a):"));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno(a):"));


let mediaAluno = (nota1 + nota2 + nota3) / 3;


let resultado;
if (mediaAluno >= 7) {
    resultado = "Aprovado(a)";
} else {
    resultado = "Reprovado(a)";
}

alert(`Aluno(a): ${nome}
    \nIdade: ${idade}
    \nMédia: ${mediaAluno.toFixed(2)}
    \nResultado: ${resultado}`);
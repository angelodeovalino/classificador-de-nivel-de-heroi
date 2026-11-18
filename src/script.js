// #1 Desafio Classificador de Herói


let nomeHeroi = "Gargamel"
let xp
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let levelHeroi = true// criei uma variável para armazenar o nivel do herói com base no seu xp

for (xp = 0; xp < 2000; xp+=500) {
    console.log("Você derrotou um slime e ganhou 500 de xp!")
} // utilizei o loop for para contabilizar xp

switch(levelHeroi) {
    case xp <= 1000:
        levelHeroi = niveis[0]
        break
    case xp > 1000 && xp <= 2000:
        levelHeroi = niveis[1]
        break
    case xp > 2000 && xp <= 5000:
        levelHeroi = niveis[2]
        break
    case xp > 5000 && xp <= 7000:
        levelHeroi = niveis[3]
        break
    case xp > 7000 && xp <= 8000:
        levelHeroi = niveis[4]
        break
    case xp > 8000 && xp <= 9000:
        levelHeroi = niveis[5]
        break
    case xp > 9000 && xp <= 10000:
        levelHeroi = niveis[6]
        break
    default:
        levelHeroi = niveis[7]
        break
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + levelHeroi + ".") // console.log único
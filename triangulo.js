function criarNovaLinha(linha) {
    let prox_linha = [1]  

    for (let i= 1; i < linha.length; i++) {
        prox_linha.push(linha[i] + linha[i -1])
    }

    prox_linha.push(1)

    return prox_linha
}

function trianguloDePascoal(linhas) {
    if(linhas < 1) {
        throw "O triangulo deve ter pelo menos uma linha!"
    }

    let triangulo= [[1]]

    for (let i = 1; i < linhas; i++) {
        triangulo.push(criarNovaLinha(triangulo[triangulo.length - 1]))
        
    }
    return triangulo
}

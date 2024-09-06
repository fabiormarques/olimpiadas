function fnc_pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada digitado para pesquisar!</p>"
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";

    // Itera sobre cada resultado da pesquisa (cada elemento do array 'dados').
    for (let dado of dados) {
        // Constrói o HTML para um resultado individual, formatando com as informações do objeto 'dado'.
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || 
            dado.descricao.toLowerCase().includes(campoPesquisa)
        ) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não foi encontrado na base de dados!</p>";
    }

    // Atualiza o conteúdo HTML da seção de resultados com os resultados construídos.
    section.innerHTML = resultados;
}
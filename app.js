function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Digite algo relacionado ao conteúdo</p>"
        return
    }
    if(campoPesquisa ==" "){
      section.innerHTML = "<p>Digite algo relacionado ao conteúdo</p>"
      return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
       titulo = dado.titulo.toLowerCase()
       descrição = dado.descrição.toLowerCase()
       tags = dado.tags.toLowerCase()
       // se título includes campoPesquisa
       if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || dado.Poderes.includes(campoPesquisa) || dado.tags.includes(campoPesquisa))
        {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
          <div class="container"> ${dado.imagem}</div>
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <h3>${dado.subtitulo}</h3>
          <p class="poderes">${dado.Poderes}</p>
          <a href=${dado.link} target="blank"> mais informações</a>
        </div>
      `;
         }
       
       }

       if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
       }
  
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;
    
  }


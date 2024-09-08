function pesquisar() {
    
   let section = document.getElementById
   ("resultados-pesquisa");
   
   let campoPesquisa = document.getElementById
   ("campo-pesquisa").value;
 
   if (campoPesquisa == ""){
      
      return

   };

   campoPesquisa = campoPesquisa.toLowerCase();

   let resultados = "";
   let cNome = "";
   let cDescricao = "";

    for (let restaurante of restaurantes) {
        cNome = restaurante.nome.toLowerCase();
        cDescricao = restaurante.descricao.toLowerCase();

        if (cNome.includes(campoPesquisa)) || cDescricao.includes(campoPesquisa) {
            resultados += ` 
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${restaurante.nome}</a>  
                    </h2>
                    <p class="descricao-meta">${restaurante.descricao}}</p>
                    <p class="descricao-meta">${restaurante.endereco}</p>
                    <a href=${restaurante.link} target="_blank">Site</a>    
                </div>            `;
        }   
    }

    section.innerHTML = resultados;
}



console.log("campoPesquisa");



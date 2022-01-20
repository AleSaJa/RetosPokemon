numberPokemon(293,"poke1");
numberPokemon(456,"poke2");
numberPokemon(585,"poke3");

function numberPokemon(number,id){
    let url = `https://pokeapi.co/api/v2/pokemon/`+number;
            fetch(url)
        .then(response => response.json())
        .then(data => {
            let pokemon = document.getElementById(id);
            pokemon.innerHTML = 
                `<img style="height: 35vh" src="${data.sprites.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name.toUpperCase()}</h5>
                    <p class="card-text"></p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action list-group-item-secondary">Name: ${data.name}</li>
                        <li class="list-group-item list-group-item-action list-group-item-secondary">Type: ${data.types[0].type.name}</li>
                        <li class="list-group-item list-group-item-action list-group-item-secondary">Move1: ${data.moves[0].move.name}</li>
                        <li class="list-group-item list-group-item-action list-group-item-secondary">Move2: ${data.moves[1].move.name}</li>
                        <li class="list-group-item list-group-item-action list-group-item-secondary">Move3: ${data.moves[2].move.name}</li>
                    </ul>
                </div>`;
        })
        .catch(error => console.log(error))
}
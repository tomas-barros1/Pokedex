let pokemonDiv = document.getElementById('pokemon');
let pokemonImg = document.createElement('img');
let pokemonType = document.createElement('h1');
let pokemonHeight = document.createElement('h1');
let pokemonName = document.createElement('h1');
let pokemonWeight = document.createElement('h1');
let pokemonNameForm = document.getElementById('pokemonNameForm');
let find = document.getElementById('find');

find.addEventListener('click', async function () {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameForm.value.toLowerCase()}`);
    
    if (response.ok) {
      const data = await response.json();

      pokemonImg.src = data.sprites.front_default;
      pokemonName.innerHTML = `Nome: ${data.name}`;
      pokemonType.innerHTML = `Tipo: ${data.types[0].type.name}`;
      pokemonWeight.innerHTML = `Peso: ${data.weight / 10} kg`;
      pokemonHeight.innerHTML = `Altura: ${data.height / 10} m`;

      pokemonDiv.appendChild(pokemonImg);
      pokemonDiv.appendChild(pokemonName);
      pokemonDiv.appendChild(pokemonType);
      pokemonDiv.appendChild(pokemonWeight);
      pokemonDiv.appendChild(pokemonHeight);
    } 
    else {
      alert('Não foi possível encontrar o Pokémon!')
      pokemonImg.src = 'https://i.pinimg.com/736x/41/34/9b/41349b20dcade9a639847b531d507e3a.jpg'
      pokemonName.innerHTML = "Nome ?"
      pokemonType.innerHTML = "Tipo: ?"
      pokemonWeight.innerHTML = "Peso: ?"
      pokemonHeight.innerHTML = "Altura: ?"
    }  
});

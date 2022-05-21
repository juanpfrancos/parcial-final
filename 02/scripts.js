const container = document.getElementById("tablebody")

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
.then(function(data) {
  let characters = data.results;
  return characters.map(function(character) {
    console.log(character)
    if (character.status == "Alive"){
        const row = `<tr>
            <td>${character.name}</td>
            <td><img src="${character.image}" class="rounded-circle" alt="${character.name}"></td>
            <td>${character.status}</td>
        </tr>`
        container.innerHTML += row
    }

  })
})
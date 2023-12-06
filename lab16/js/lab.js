// authot: Leilah Hodges
// date: 30 November, 2023
// Task: Lab 15, experimenting with using APIs 


//API code formula provided by Wes
$('#action').click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: "https://pokeapi.co/api/v2/pokemon/366/",

        type: "GET",
        // The type of data we expect back
        dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);

        // Display the species name
        var speciesName = data.species.name;

        // Display held items
        var heldItems = data.held_items.map(item => item.item.name).join(', ');

    // Display from ChatGPT
        $('#pokemon-image').html(`<img src="${data.sprites.front_default}" alt="${data.name}">`);
        $('#pokemon-details').html(`
            <h2>${data.name}</h2>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Base Experiemce: ${data.base_experience}</p>
            <p>Species: ${speciesName}</p>
            <p>Held Items: ${heldItems}</p>
            <!-- Add more details as needed -->
        `);

        // allows you to open and close the item when clicking the button
        $('#pokemon-card').toggle()
    })
});
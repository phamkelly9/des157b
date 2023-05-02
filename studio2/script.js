// from glenda: add the IIFE and use strict directive here

async function getData(){
    const myMoods = await fetch('data.json');
    const data = await myMoods.json();
    updateInterface(data);
}
getData();

function updateInterface(jsonData) {
    const keys = Object.keys(jsonData);
    // console.log(keys);

    // from glenda: here is the basic script. You can keep writing individual statements like this or put them into a forEach loop to apply the code all at once. We can talk more on Sunday about it :)

    keys.forEach(function(key){
        console.log(`.${key} p`);
        document.querySelector(`.${key} p`).innerHTML = 
        `<p>Date: ${jsonData[key].date}</p>
        <p>Place: ${jsonData[key].place}</p>
        <p>Dish/drink: ${jsonData[key].dish}</p>
        <p>Rating: ${jsonData[key].rating}</p>`;
    })
}

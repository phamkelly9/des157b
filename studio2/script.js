// let globalData;

async function getData(){
    const myMoods = await fetch('data.json');
    const data = await data.json();
    console.log(data);
    // globalData = data;
    // document.querySelector('.two').innerHTML = outputHTML1(data);
    updateInterface(data);
}
getData();

// function outputHTML1(data) {
//     let html = '<p>';
//     html += `date: ${data.one.date}\ntime: ${data.one.time}\nplace: ${data.one.place}\ndish/drink: ${data.one.dishes/drinks}\nrating: 
//     ${data.one.rating}`;
//     html += '</p>';
//     return html;
// }

getData();

function updateInterface(jsonData) {
    const keys=Object.keys(jsonData);
    console.log(keys);
}
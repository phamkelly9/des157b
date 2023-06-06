Parse.initialize("5QcrVqeODVexkF0PnbxIofIs6VvdClJBHGDR54LB","xtLarTXGrYtIlcNit1vLHzgrwC5I11QE9DnuA3CU"); 
Parse.serverURL = 'https://parseapi.back4app.com/';

// AOS.init();

(function(){
    'use strict';
    console.log('reading js')

    // buttons
    const newBtn = document.getElementById("newbtn");
    const startBtn = document.getElementById("startbtn");

    const addPost = document.getElementById("add-post");
    const postList = document.querySelector("main ol");

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log('clicked new button')
    document.getElementById('name').className = 'onscreen';
    document.getElementById('newbtn').className = 'offscreen';
})

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log('clicked new button')
    document.getElementById('newbtn').className = 'onscreen';
    document.getElementById('usability-item').className = 'offscreen';
    document.getElementById('startbtn').className = 'offscreen';
})

addPost.addEventListener("submit", function(event){
    event.preventDefault();
    addPost.className = "offscreen";
})

// async function displayPosts() {
//     const posts = Parse.Object.extend('Posts');
//     const query = new Parse.Query(posts);

//     // const results = await query.ascending('lname').find();
//     // //console.log(results);

//     try {
//         // const results = await query.ascending('lname').find();

//         results.forEach(function(eachPost) {
//             const id = eachPost.id;
//             const lname = eachPost.get('text');
//             // const fname = eachPost.get('fname');
//             // const email = eachPost.get('email');
//             // const facebook = eachPost.get('facebook');
//             // const twitter = eachPost.get('twitter');
//             // const instagram = eachPost.get('instagram');
//             // const linkedin = eachPost.get('linkedin');
    
//             const theListItem = document.createElement("li");
//             theListItem.setAttribute("id", `r-%{id}`);
//             theListItem.innerHTML = `<div class="post">${text}</div>

//             // <div class="social"> <a href="${facebook}"> <i class="fab fa-facebook-square"></i></a>
//             // <a href="${twitter}"> <i class="fab fa-twitter-square"></i></a>
//             // <a href="${instagram}"> <i class="fab fa-instagram-square"></i></a>
//             // <a href="${linkedin}"> <i class="fab fa-linkedin-square"></i></a></div>
//             // <i class="fas fa-edit" id="e-${id}"></i>
//             // <i class="fas fa-times-circle" id="d-${id}"></i> `;
    
//             postList.append(theListItem);
//         });
//     } catch (error) {
//         console.error('Error while fetching posts', error);
//     }
// };


// displayPosts();
})()

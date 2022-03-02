let url = new URL(window.location.href);
let product_id = url.searchParams.get('id');
let API = `http://localhost:3000/api/products/${product_id}`;



fetch(API)
    .then((item) => item.json())
    .then((item) => {
        console.log(item);
        for (color of item.colors){
            console.log(color)
            let colimg = document.getElementById('colors')
            colimg.innerHTML += `<option value="${color}">${color}</option>`
        }
        document.querySelector('.item__img').innerHTML += `<img src="${item['imageUrl']}" alt="Photographie d'un canapé">`
        document.querySelector('#price').innerHTML += `${item['price']}`
        document.querySelector('#title').innerHTML += `<h1 id="title">${item['name']}</h1>`
        document.querySelector('#description').innerHTML += `<p id="description">${item['description']}</p>`
    });

let addToCart = [product_id, document.getElementById('quantity'), document.getElementById('colors')];
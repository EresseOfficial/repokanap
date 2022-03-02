fetch("http://localhost:3000/api/products/")
.then((reponse) => reponse.json())
.then((reponse) => {
    console.log(reponse);
    for (produit of reponse){

        let img = produit["imageUrl"];
        let name = produit["name"];
        let description = produit["description"];
        let altTxt = produit["altTxt"];
        let id = produit["_id"];
        let items = document.getElementById('items');

        items.innerHTML += `<a href="./product.html?id=${id}">
            <article>
              <img src="${img}" alt="${altTxt}"">
              <h3 class="productName">${name}</h3>
              <p class="productDescription">${description}</p>
            </article>
          </a>`

    }





});





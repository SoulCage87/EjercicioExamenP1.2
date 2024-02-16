fetch("https://fakestoreapi.com/products")
.then((response => response.json()))
.then(data => {
 let card = ''
 for(let productos of data){
    card +=`<div class="col">
    <div class="card">
        <img src="${productos.image}" class="card-img-top" alt="producto">
        <div class="card-body">
            <h5 class="card-title">${productos.title}</h5>
            <p class="card-text">${productos.description}</p>
            <p class="card-text"><small class="text-muted">${productos.price}</small></p>
            <p class="card-text"><small class="text-muted">${productos.category}</small></p>
        </div>
    </div>
</div>`
 }
 document.getElementById("card").innerHTML = card;

});
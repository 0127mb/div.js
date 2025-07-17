    let div =document.querySelector('div')


fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => {
    console.log(data);
data.map((item)=>{
    div.innerHTML += `
    <div>
<img src="${item.image}" alt="">
    <h1>${item.title}</h1>
    <p>${item.ratingn}</p>
    <b>${item.price}</b>
    <button>sotib olish</button>
   
    </div>`
})

  });
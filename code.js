let data=[];

let resultsElement=document.querySelector('.results');

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>
     {data=json;
        console.log(data)
    })

document.querySelector('.inputField').addEventListener('keyup', ()=>{
    let searchTerm=document.querySelector('.inputField').value;

    let resultArray=[];
    if(String(searchTerm).trim().length > 0){
        resultArray=data.filter(product=> String(product.title).includes(searchTerm))
        console.log(resultArray);
        renderProducts(resultArray);
    }else{
        removeElements();
    }
})   

function renderProducts(products){
   document.querySelectorAll('.result').forEach(prod=>{
    prod.remove();
   })

   products.forEach(product=>{
    renderSingleProduct(product)
   })
}


function renderSingleProduct(product){
    let resultDiv=document.createElement('div')
    let resultImage=document.createElement('img')
    let resultTitle=document.createElement('h4')
    let resultPrice=document.createElement('p')
    let resultButton=document.createElement('button')

    resultImage.src=product.image
    resultTitle.innerText=product.title
    resultPrice.innerText=product.price
    resultButton.innerText='Purchase'

    resultDiv.appendChild(resultImage)
    resultDiv.appendChild(resultTitle)
    resultDiv.appendChild(resultPrice)
    resultDiv.appendChild(resultButton)

    resultsElement.appendChild(resultDiv);
}

function removeElements(){
    document.querySelectorAll('.result').forEach(prod=>{
        prod.remove();
    })}


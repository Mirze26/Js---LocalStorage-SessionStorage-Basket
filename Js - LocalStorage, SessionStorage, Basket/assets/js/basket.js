"use strict"




let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));


if (products != null) {
    for (const product of products) {
        tableBody.innerHTML += `<tr>
        <td><img src = "${product.img}" alt="">
        </td>
        <td>
          ${product.name}
        </td>
        <td>
        ${product.description}
        </td>
        <td>
        ${product.price}
        </td>
        <td>
        ${product.count}
        </td>
        </tr>`
    }
}

else{
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-dark").classList.remove("d-none");

}


function getBasketCount (arr){
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }

    document.querySelector("sup").innerText = sum;
}
  
getBasketCount (products)






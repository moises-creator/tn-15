function mostrarNome() {
    console.log("Moisés")
}


const products = ["Fogão", "Televisão", "Sofá"]

for (product of products) {
    console.log(product);
}

const newProducts = products.push("Cama")

console.log("----------------");
console.log(products);
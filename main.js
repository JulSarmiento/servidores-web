const Container = require("./classes/container.class");

const db = "products";

const product = new Container(db);

const productExample = {
    title: 'Collar Elegant',
    price: 152000,
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d'
};

// product.getAll()
//     .then(console.log);

product.saveProduct(productExample)
    .then(console.log);

// product.getbyId(2)
//     .then(console.log);

// product.deleteById(2)
//     .then(console.log("Elemento eliminado"));

// product.deleteAll()
//     .then(console.log("Todos los productos fueron eliminados"));
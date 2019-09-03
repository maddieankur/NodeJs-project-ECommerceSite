const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id){
        //fetch the previous cart
        fs.readFile(p , (err,fileContent) => {
            let cart = {product: [],totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
            const existingProduct = cart.product.find(prod => prod.id === id);
            let updatedProduct;
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updayedProduct.qty+1;
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id , qty:1};
                cart.product = [...cart.products,updatedProduct];
            }
            cart.totalPrice = cart.totalPrice+productPrice;
            fs.writeFile(p,JSON.stringify(cart),err =>{
                console.log(err);
            })
        });
        //add new product/ increase quantity
    }
};
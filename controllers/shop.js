const Product = require('../models/product');
const Cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'product List',
      path: '/product-list',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

exports.getProduct = (req,res,next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product =>{
    res.render('shop/product-detail',{product: product,
    pageTitle: 'Product Details',
    path:'/products'});
  });
}

exports.getIndex = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req,res,next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
};

exports.postCart = (req,res,next) => {
  const prodId = req.body.productId;
  product.findById(prodId,(product) => {
    Cart.addProduct(prodId,product.price);
  })
  res.redirect('/cart');
}

exports.getOrders = (req,res,next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
};

exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout',{
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
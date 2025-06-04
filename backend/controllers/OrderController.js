const orderModel = require('../model/orderModel')
const productModel = require('../model/productModel')

exports.createOrder = async (req,res,next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price*item.qty),0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems,amount,status});

    cartItems.forEach( async (element) => {
        const product = productModel.findById(element.product._id);
        product.stock = product.stock - element.stock ;
        await product.save();
    });

    console.log(amount);
    res.json({
        success : true,
        order
    })
}

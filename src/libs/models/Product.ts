import {Schema,model,models} from "mongoose";

const ProductScheam= new Schema({
  _id: {
    type: String,
    
    required: true
},
      imgSrc: {
        type: String,
        required: true
      },
      fileKey: {
        type: String,
        required: true
      },
      price: {
        type: Number, // Store price as a number
        required: true
      },
      name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      }
})

const Product=models.Product||model("Product",ProductScheam);

export default Product;


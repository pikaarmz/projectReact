import React, { Component } from "react";

// นี่คือ Functional Components
// const ProductItem = (props) => {
//     const {productName, unitPrice} = props;
//     return (
//         <div>
//             <p>Name : {productName} | Price : {unitPrice}</p>

//         </div>
//     )
// }

// นี่คือ Class Components
class ProductItem extends Component { //ต้อง extends Component ของ react ด้วย

    constructor(props) { // method constructor รับ parameter props method นี้ จะถูกเรียกเมื่อ object ของ ProductItem (ชื่อ Class) ถูกสร้างขึ้น
        super(props); // ต้องเรียก super ส่ง props กลับไปให้ class Component ที่ extends มา
    }

    doSomething(productName) {

    }

    render() { // method render เหมือน return ของ functional component
        const { productName, unitPrice, thumbnail } = this.props.product; // เป็น class ต้องอ้างอิง props ผ่าน this
        return (
            <div className='col-md-3 col-sm-6'>
                <img className='img-fluid img-thumbnail' src={thumbnail} />
                <h5 className='mt-2'>{productName}</h5>
                <p className='title text-right'>{unitPrice} บาท</p>
                <button className='btn btn-block btn-secondary title' onClick={() => this.props.onAddOrder(this.props.product)}>  
                    ซื้อ
                </button>
                <hr />
            </div>
        )
    }
}
export default ProductItem;
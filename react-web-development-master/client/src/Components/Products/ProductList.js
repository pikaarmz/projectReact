import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    showProduct() {
        // เขียนได้อีกแบบ ถ้าไม่ใช้เช็คเงื่อนไขแบบ If 
        // return this.props.products && this.props.products.map(products =>(
        //     <ProductItem productName={products.productName} unitPrice={products.unitPrice}/>
        // ))

        if(this.props.products){ // เช็คว่ามีข้อมูลใน Array รึเปล่า
            return this.props.products.map(product =>(
                <ProductItem key={product.productId} product={product} onAddorder={this.props.onAddorder}/>
            ))
        }
    }
    render() {
        
        return(
            //เรียกใช้ method showProduct 
            <div className='row'>
                {this.showProduct()} 
            </div>
        );
    }
}

export default ProductList;
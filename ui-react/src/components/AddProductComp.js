import React, {useState} from 'react';
import "../App.css"
import { getUser } from '../util';
import {toast } from 'react-toastify';
const AddProductComp = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productCompany, setproductCompany] = useState('');

    const setEmpty = () =>  {
        setProductName('');
        setProductPrice('');
        setProductCategory('');
        setproductCompany('');
    }

    const addProduct = async() => {
        console.log(productName, productPrice)
        const user = getUser();
        const productDetails = {
            name: productName,
            price: productPrice,
            category: productCategory,
            userId: user._id,
            company: productCompany
        }
        const productData = await fetch('http://localhost:5000/add-product', {
            method: "POST",
            body: JSON.stringify(productDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const productResponse = await productData.json()
        toast("Product added succefully");
        await setEmpty();
        console.log("productResponse", productResponse)
    }

    return (
        <>
        <div className="form-container">
        <form>
            <div className="form-group">
                <label for="productName">Product Name:</label>
                <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} name="productName" placeholder='Enter Product Name' className='productInputField'/>
            </div>
            <div className="form-group">
                <label for="productPrice">Product Price:</label>
                <input type="text" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} name="productPrice" placeholder='Enter Product Price' className='productInputField' />
            </div>
            <div className="form-group">
                <label for="productCategory">Product Category:</label>
                <input type="text" id="productCategory" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} name="productCategory" placeholder='Enter Product Category' className='productInputField'/>
            </div>
            <div className="form-group">
                <label for="productCompany">Product Company:</label>
                <input type="text" id="productCompany" value={productCompany} onChange={(e) => setproductCompany(e.target.value)} name="productCompany" placeholder='Enter Product Company' className='productInputField'/>
            </div>
            <div className="form-group">
                <input type="button" value="Submit" onClick={addProduct} />
            </div>
        </form>
    </div>
        </>
    )
}


export default AddProductComp;
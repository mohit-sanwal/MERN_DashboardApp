import React from 'react';
import "../App.css"
const AddProduct = () => {
    return (
        <>
        <div class="form-container">
        <form>
            <div class="form-group">
                <label for="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" placeholder='Enter Product Name' className='productInputField'/>
            </div>
            <div class="form-group">
                <label for="productPrice">Product Price:</label>
                <input type="text" id="productPrice" name="productPrice" placeholder='Enter Product Price' className='productInputField' />
            </div>
            <div class="form-group">
                <label for="productCategory">Product Category:</label>
                <input type="text" id="productCategory" name="productCategory" placeholder='Enter Product Category' className='productInputField'/>
            </div>
            <div class="form-group">
                <label for="productCompany">Product Company:</label>
                <input type="text" id="productCompany" name="productCompany" placeholder='Enter Product Company' className='productInputField'/>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
        </>
    )
}


export default AddProduct;
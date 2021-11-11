import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully')
                    reset();
                }
                console.log(data)
            })

    };
    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" {...register("productName", { required: true })} />
                <textarea placeholder="Description" {...register("description", { required: true })} />
                <input placeholder="Product Price" type="number" {...register("price", { required: true })} />
                <input placeholder="Stock" type="number" {...register("availableQuantity", { required: true })} />
                <input placeholder="Image URL" {...register("image", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
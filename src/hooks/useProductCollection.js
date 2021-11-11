import { useEffect, useState } from "react"

const useProductCollection = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return {
        products
    }
}

export default useProductCollection;
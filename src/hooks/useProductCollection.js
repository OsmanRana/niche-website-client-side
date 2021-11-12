import { useEffect, useState } from "react"

const useProductCollection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mighty-bastion-98054.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return {
        products
    }
}

export default useProductCollection;
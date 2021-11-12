import { useEffect, useState } from "react";

const useOrderCollection = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mighty-bastion-98054.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return {
        orders
    }
}

export default useOrderCollection;
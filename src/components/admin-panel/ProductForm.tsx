import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ToastUp } from '@/util/helper';
import axios from 'axios';
import React, { useState } from 'react'
interface Iproducts {

    imgSrc: null | string;
    fileKey: null | string;
    price: "";
    name: "";
    category: ""
}
const ProductForm = () => {

    const [payLoad, setPayLoad] = useState<Iproducts>({
        imgSrc: null,
        fileKey: null,
        price: "",
        name: "",
        category: ""
    });
    const dispatch=useAppDispatch();
     dispatch(setLoading(true))
    axios.post("/api/add_product",payLoad).then((res)=>{ToastUp("successfully ");setPayLoad(res.data)})
    .catch((err)=>console.error(err))
    .finally(()=>dispatch(setLoading(false)))
    return (
        <div>ProductForm</div>
    )
}

export default ProductForm
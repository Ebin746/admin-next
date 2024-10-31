"use client";
import { FormEvent, useState } from "react";
import { UploadButton } from "../../util/uploadthings"; // Ensure this import is correct
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/features/loadingSlice";
import axios from "axios";
import { ToastUp } from "@/util/helper";

const ProductForm = () => {
    const [payLoad, setPayLoad] = useState({
        imgSrc: "",
        fileKey: "",
        price: "",
        name: "",
        category: "",
    });
const dispatch=useDispatch()
    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));
        axios.post("/api/add_product",{...payLoad}).then(()=>{
            ToastUp("successfully Add the product");
        }).catch((err)=>{console.error("there is error:",err)}).finally(()=>{
            dispatch(setLoading(false));
        })
    };

    return (
        <form onSubmit={handleFormSubmit} className='w-full max-w-lg mx-auto bg-white rounded-lg shadow-md p-6'>
            {/* Image Preview */}
            {payLoad.imgSrc ? (
                <img src={payLoad.imgSrc} alt="Uploaded" className='block w-full h-auto rounded-md mb-4' />
            ) : (
                <div className='w-full h-32 bg-gray-200 rounded-md flex items-center justify-center mb-4'>
                    <span className='text-gray-500'>No image uploaded</span>
                </div>
            )}

            {/* Upload Button */}
            <UploadButton
                className='w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-200'
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    setPayLoad({
                        ...payLoad, imgSrc: res[0]?.url,
                        fileKey: res[0]?.url
                    });
                }}
                onUploadError={(error) => {
                    alert(`ERROR! ${error}`);
                }}
            />

            {/* Input Fields */}
            <div className='mt-4'>
                <label className='block text-sm font-semibold text-gray-700'>Name:</label>
                <input
                    type="text"
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    value={payLoad.name}
                    onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
                    required
                />

                <label className='block text-sm font-semibold text-gray-700 mt-4'>Price:</label>
                <input
                    type="number"
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    value={payLoad.price}
                    onChange={(e) => setPayLoad({ ...payLoad, price: e.target.value })}
                    required
                />

                <label className='block text-sm font-semibold text-gray-700 mt-4'>Category:</label>
                <input
                    type="text"
                    className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
                    value={payLoad.category}
                    onChange={(e) => setPayLoad({ ...payLoad, category: e.target.value })}
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type='submit'
                className='mt-6 w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-200'
            >
                Save
            </button>
        </form>
    );
};

export default ProductForm;

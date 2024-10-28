"use client";
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { useState, Dispatch, SetStateAction, FormEvent } from 'react';
import { ToastUp } from '@/util/helper';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface Props {
    setPopUp: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const PopProps = ({ setPopUp, setUpdateTable }: Props) => {
    const productData = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const [inputData, setInputData] = useState({
        name: productData.name,
        category: productData.category,
        price: productData.price,
    });

    const handleFormData = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        axios.put(`/api/edit_products/${productData._id}`, inputData)
            .then(() => {
                ToastUp("Successfully updated the product");
                setUpdateTable((prevState) => !prevState);
            })
            .catch((error) => console.error("Error updating product:", error))
            .finally(() => {
                dispatch(setLoading(false));
                setPopUp(false);
            });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-900 grid place-items-center">
            <div className="bg-white py-8 rounded relative w-[700px] text-center">
                <IoIosCloseCircleOutline
                    onClick={() => setPopUp(false)}
                    className="absolute right-4 top-4 cursor-pointer text-2xl hover:text-red-700"
                />
                <h2 className="text-2xl mb-4">Edit Product</h2>
                <form onSubmit={handleFormData}>
                    <input
                        value={inputData.name}
                        placeholder="Name"
                        onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                        className="border border-black rounded w-full px-4 py-2 mb-4"
                        required
                    />
                    <input
                        value={inputData.category}
                        placeholder="Category"
                        onChange={(e) => setInputData({ ...inputData, category: e.target.value })}
                        className="border border-black rounded w-full px-4 py-2 mb-4"
                        required
                    />
                    <input
                        value={inputData.price}
                        placeholder="Price"
                        onChange={(e) => setInputData({ ...inputData, price: e.target.value })}
                        className="border border-black rounded w-full px-4 py-2 mb-4"
                        required
                    />
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-400 rounded px-4 py-2 text-white">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopProps;

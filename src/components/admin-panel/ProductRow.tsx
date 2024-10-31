import { Dispatch, SetStateAction } from 'react';
import { Iproduct } from '@/app/admin/dashboard/page';
import { useAppDispatch } from '@/redux/hooks';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { setProduct } from '@/redux/features/productSlice';

interface PropsType {
    srNo: number;
    setPopUp: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: Iproduct;
}

const ProductRow = ({ srNo, setPopUp, setUpdateTable, product }: PropsType) => {
    const dispatch = useAppDispatch();

    const OnEdit = () => {
        dispatch(setProduct(product));
        setPopUp(true);
    };

    const Delete = () => {
        // Add delete functionality here
    };

    return (
        <tr className="border-b hover:bg-gray-50 transition duration-300">
               <td className="py-4 px-6 text-gray-700">{srNo}</td>
            <td className="py-4 px-6 text-gray-700">{product.name}</td>
            <td className="py-4 px-6 text-gray-700">${product.price}</td>
            <td className="py-4 px-6">
                <img src={product.imgSrc} alt="product image" className="w-10 h-10 object-cover rounded" />
            </td>
            <td className="py-4 px-6 text-center">
                <div className="flex items-center justify-center space-x-4">
                    <CiEdit onClick={OnEdit} className="cursor-pointer text-blue-600 hover:text-blue-800 text-xl" />
                    <RiDeleteBin5Line onClick={Delete} className="cursor-pointer text-red-600 hover:text-red-800 text-xl" />
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;

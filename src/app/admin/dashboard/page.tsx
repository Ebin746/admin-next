"use client"; 
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { useAppDispatch } from '@/redux/hooks';
import { setLoading } from "@/redux/features/loadingSlice";

export interface Iproduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  price: string;
  name: string;
  category: string;
}

const DashboardPage = () => {
  const [product, setProduct] = useState<Iproduct[]>([]);
  const [usePopUp, setPopUp] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios.get<Iproduct[]>("/api/get_products")
      .then((res) => { setProduct(res.data); })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [updateTable, dispatch]);

  return (
    <Layout>
<div>
   <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
    <div className="text-3xl">All products</div>
     <table className="w-full">
<thead>
  <tr>
    <th>SR No</th>
    <th>Name</th>
    <th>Price</th>
    <th>SR No</th>
  </tr>
</thead>

     </table>
   </div>
</div>
</Layout>
  );
};

export default DashboardPage;

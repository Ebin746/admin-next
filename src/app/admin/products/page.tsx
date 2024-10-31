"use clinet"
import React from 'react'
import ProductForm from '@/components/admin-panel/ProductForm'
import Layout from '../Layout'
const Products = () => {
  return (
  <Layout>
      <div className="h-[calc(100-96px)] w-full gird place-items-center overflow-y-auto">
      <div className="w-full bg-white rounded-lg p-4">
  <ProductForm/>
      </div>
    </div>
  </Layout>

  )
}

export default Products
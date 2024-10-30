import React from 'react'
import ProductForm from '@/components/admin-panel/ProductForm'
import Layout from '../Layout'
const products = () => {
  return (
  <Layout>
      <div className="h-[calc(100-96px)] w-full gird place-items-center overflow-y-auto">
      <div className="w-[100px] bg-white rounded-lg p-4">
  <ProductForm/>
      </div>
    </div>
  </Layout>

  )
}

export default products
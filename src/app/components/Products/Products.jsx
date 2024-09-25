// "use client";
import getProducts from '@/lib/getProducts';
import React, { Suspense } from 'react';
// import { Card, Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link';
export default async function Products() {
    // const { Title, Paragraph } = Typography
    const products = await getProducts();
    // className="flex justify-center items-center min-h-screen bg-gray-100"
    console.log(products?.products, 'products');
    return (
        <Suspense fallback="<h1>Loading products</h1>">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products?.products?.map(product =>
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm" >
                            {/* Product Image */}
                            <div className="relative aspect-square">
                                <Image
                                    src={product?.thumbnail}
                                    // src=''
                                    alt="Product image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-6">
                                <Link href={`/products/${product.id}`}>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600">
                                    {product?.title}
                                </h4>
                                </Link>
                                <p className="text-gray-600 mb-4">
                                    {product?.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-gray-800">{product?.price}</h3>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Suspense>
    );
};

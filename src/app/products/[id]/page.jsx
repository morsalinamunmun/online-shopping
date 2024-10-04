
import getSingleProduct from '@/lib/getSingleProduct';
// import { useGetProductByIdQuery } from '@/redux/features/productsApi';
import { Button} from 'antd';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const { id } = params;
    const product = await getSingleProduct(id);
    // const {data: product} = useGetProductByIdQuery(id);
    console.log(product, 'product')
    return (
        // <div>
        //     <h1>{product?.title}</h1>
        //     <p>{product?.description}</p>
        // </div>

        <div className="container mx-auto px-4 py-8">
            <div className="">
                {/* Product Image */}
                <div className="md:w-36">
                    <Image
                        src={product?.thumbnail}
                        className='w-full'
                        // src=''
                        alt="Product image"
                        layout="fill"
                        // objectFit="cover"
                        // className="transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{product?.title}</h1>

                    <p className="text-2xl font-bold text-primary">{product?.price}</p>

                    <p className="text-gray-600">
                       {product?.description}
                    </p>
                    <Button className="w-80">
                        {/* <ShoppingCart className="mr-2 h-4 w-4" /> */}
                        Add to Cart
                    </Button>

                    <div className="border-t pt-4 mt-4">
                        <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Adjustable height and tilt</li>
                            <li>High-density foam cushion</li>
                            <li>360-degree swivel</li>
                            <li>Weight capacity: 300 lbs</li>
                            <li>Material: Mesh back, fabric seat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

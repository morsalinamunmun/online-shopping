import getProducts from "@/lib/getProducts";

// import React, { useState } from 'react';
const initialProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 59.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
    { id: 3, name: 'Bluetooth Speaker', price: 89.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  ]

const page = () => {
    // const [products, setProducts] = useState(initialProducts)


  // const products = await getProducts();

  // const updateQuantity = (id, newQuantity) => {
  //   setProducts(products.map(product => 
  //     product.id === id ? { ...product, quantity: Math.max(0, newQuantity) } : product
  //   ))
  // }

  // const removeProduct = (id) => {
  //   setProducts(products.filter(product => product.id !== id))
  // }

  // const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    return (
        <div className="container mx-auto p-4 max-w-3xl">
      {/* <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p className="ml-4">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-2 w-8 text-center">{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeProduct(product.id)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div> */}
      <h2 className="text-center text-2xl font-medium ">Carts</h2>
    </div>
    );
};

export default page;
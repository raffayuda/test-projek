"use client";


import Head from "next/head";
import { useState } from "react";

export default function Page() {
    const [selectedStep, setSelectedStep] = useState(1);
  
    // Data untuk step di header
    const steps = [
      { number: 1, title: 'Choose Box', isActive: true },
      { number: 2, title: 'Choose Items', isActive: false },
      { number: 3, title: 'Choose Cards', isActive: false },
      { number: 4, title: 'Done', isActive: false },
    ];
    
    // Data untuk kotak regular
    const regularBoxes = [
      { id: 1, color: 'Cream Regular', image: 'https://boxandtale.com/storage/products/1626/kGz6A97AYI5oitEvASSJh18ZFkvgZrMG2y8sRFm9.jpg', price: 'Rp 110.000' },
      { id: 2, color: 'Black Regular', image: 'https://boxandtale.com/storage/product_1627_images/ProductImage1627_1.jpg', price: 'Rp 110.000' },
      { id: 3, color: 'White Regular', image: 'https://boxandtale.com/storage/product_1856_images/ProductImage1856_0.jpg', price: 'Rp 110.000'  },
      { id: 4, color: 'Navy Regular', image: 'https://boxandtale.com/storage/product_2087_images/ProductImage2087_0.jpg', price: 'Rp 110.000'  },
    ];
    
    // Data untuk kotak large
    const largeBoxes = [
      { id: 5, color: 'White Large', price: 'Rp 145.000', image: 'https://boxandtale.com/storage/product_1624_images/ProductImage1624_0.jpg' },
      { id: 6, color: 'Black Large', price: 'Rp 145.000', image: 'https://boxandtale.com/storage/product_1689_images/ProductImage1689_0.jpg'},
      { id: 7, color: 'Grey Large', price: 'Rp 145.000', image: 'https://boxandtale.com/storage/products/1947/pkXZdf831zVP0IJN07A08TyJyT8fTX9T5Iqi7ITF.jpg' },
    ];
    
    // Data untuk kotak mini dan wood
    const specialBoxes = [
      { 
        id: 8, 
        type: 'PERSONALIZED MINI BOX',
        size: '21x17x7cm',
        color: 'Ivory', 
        image: 'https://boxandtale.com/storage/product_1610_images/ProductImage1610_1.jpg',
        price: 'Rp 85.000'
      },
      { 
        id: 9, 
        type: 'PERSONALIZED WOOD BOX',
        size: '21x25x10cm',
        color: 'Wooden', 
        image: 'https://boxandtale.com/storage/product_1180_images/ProductImage1180_0.jpg',
        isWood: true,
        price: 'Rp 200.000'
      }
    ];

  return (
  <div className="mt-52">
    <div className="min-h-screen bg-[#f8f8f8]">
      <Head>
        <title>Personalized Gift Box</title>
        <meta name="description" content="Create your personalized gift box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 font-serif">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-6xl">
            <div className="relative flex items-center justify-between">
              {/* Progress Bar */}
              <div className="absolute top-1/2 transform -translate-y-1/2 h-1.5 bg-[#898989] w-full"></div>
              
              {/* Steps */}
              <div className="flex items-center w-[80%]  mx-auto justify-between">
              {steps.map((step) => (
                <div key={step.number} className="relative z-10 flex mt-14 items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.number === selectedStep ? 'bg-[#a9947c] text-white' : 'bg-white border border-gray-300 text-gray-500'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-2 text-sm text-gray-600">{step.title}</div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded p-8 mb-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-[#a9947c] mb-4">Choose a Box</h1>
            <p className="text-gray-500 mb-1">
              Welcome to the most convenient way to create a unique and personalized gift box for your special loved ones.
            </p>
            <p className="text-[#a9947c]">Start by choosing the desired color of your gift box!</p>
          </div>

          {/* Regular Box Selection */}
          <div className="mb-12">
            <h2 className="text-xl text-gray-500 font-normal mb-1">PERSONALIZED REGULAR BOX</h2>
            <p className="text-gray-500 mb-4">21x25x10cm</p>
            <div className="border-t border-gray-200 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularBoxes.map((box) => (
                <div key={box.id} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded p-6 mb-3 w-full">
                    <div className={`aspect-square relative flex justify-center items-center`}>
                      <img src={box.image} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">BOX & TALE</p>
                    <p className="text-[#a9947c] text-lg">{box.color}</p>
                    <p className="font-bold font-sans">{box.price}</p>
                  </div>
                  <button className="mt-3 w-full border border-[#a9947c] text-[#a9947c] px-4 py-3 rounded hover:bg-[#a9947c] hover:text-white transition-colors">
                    Choose Box
                  </button>
                </div>
                
              ))}
            </div>
          </div>

          {/* Large Box Selection */}
          <div className="mb-12">
            <h2 className="text-xl text-gray-500 font-normal mb-1">PERSONALIZED LARGE BOX</h2>
            <p className="text-gray-500 mb-4">25x30x12cm</p>
            <div className="border-t border-gray-200 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {largeBoxes.map((box) => (
                <div key={box.id} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded p-6 mb-3 w-full">
                    <div className={`aspect-square relative flex justify-center items-center`}>
                      <img src={box.image} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">BOX & TALE</p>
                    <p className="text-[#a9947c] text-lg">{box.color}</p>
                    <p className="text-black font-bold">{box.price}</p>
                  </div>
                  <button className="mt-3 w-full border border-[#a9947c] text-[#a9947c] px-4 py-3 rounded hover:bg-[#a9947c] hover:text-white transition-colors">
                    Choose Box
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Special Boxes Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialBoxes.map((box) => (
              <div key={box.id} className="mb-12">
                <h2 className="text-xl text-gray-500 font-normal mb-1">{box.type}</h2>
                <p className="text-gray-500 mb-4">{box.size}</p>
                <div className="border-t border-gray-200 mb-8"></div>

                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded p-6 mb-3 w-full">
                    <div className={`aspect-square relative flex justify-center items-center `}>
                      <img src={box.image} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">BOX & TALE</p>
                    <p className="text-[#a9947c] text-lg">{box.color}</p>
                    <p className="text-black font-bold">{box.price}</p>
                  </div>
                  <button className="mt-3 w-full border border-[#a9947c] text-[#a9947c] px-4 py-3 rounded hover:bg-[#a9947c] hover:text-white transition-colors">
                    Choose Box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </main>
    </div>
  </div>
);
}

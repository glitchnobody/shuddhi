import Image from 'next/image';
import product from '../../images/Product/product1.png'

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-customGreen to-customDarkGreen relative pt-24">
            {/* <main className="flex flex-col md:flex-row items-center md:items-start p-8">
                
                <div className="flex md:flex-col md:space-y-2 space-x-2">
                    <Image src={product} alt="Product" width={80} height={112} />
                    <Image src={product} alt="Product" width={80} height={112} />
                    <Image src={product} alt="Product" width={80} height={112} />
                </div>


                
                <div className="flex mx-8 w-[400px] h-[505px]">
                    <Image src={product} alt="Main Product" width={600} height={800} />
                </div>

                
                <div className="lg:text-customTextGreen text-white space-y-6">
                    <h2 className="text-4xl font-semibold">Womens Dress</h2>
                    <p className="text-xl">
                        <span className="line-through">INR 1999</span> <span>INR 1599</span> <span className="text-red-500">40% off</span>
                    </p>
                    <div className="text-lg">Select a Size</div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 border border-customTextGreen">S</button>
                        <button className="px-4 py-2 border border-customTextGreen">M</button>
                        <button className="px-4 py-2 border border-customTextGreen">L</button>
                        <button className="px-4 py-2 border border-customTextGreen">XL</button>
                    </div>
                    <div className="text-white space-y-2 text-sm">
                        <p>💎 LOCK PRICE: Pay 50% and lock for this price</p>
                        <p>🔥 Get this for INR 599</p>
                        <p>🔥 Buy 5 & Get Flat 20% Off!</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-8 py-4 bg-customTextGreen text-white">Add to Cart</button>
                        <button className="px-8 py-4 text-white border border-customTextGreen">Buy Now</button>
                    </div>
                </div>
            </main> */}
            <main className='flex w-full pt-24 px-[83px] gap-[13px]'>
                <div className="flex left  w-[65%] gap-7 ">
                    <div className="one w-1/4  flex flex-col gap-6">
                        <div className='h-[230px]'>
                            <Image src={product} alt="Product" width={80} height={112} className='h-full w-full' />
                        </div>
                        <div className='h-[230px]'>
                            <Image src={product} alt="Product" width={80} height={112} className='h-full w-full' />
                        </div>
                        <div className='h-[230px]'>
                            <Image src={product} alt="Product" width={80} height={112} className='h-full w-full' />
                        </div>
                    </div>
                    <div className="two  w-3/4 h-[737px] ">
                        <Image src={product} alt="Main Product" width={600} height={800} className='h-full w-full' /></div>
                </div>
                <div className="right  w-[35%] ">
                    <h2 className='text-4xl mt-[100px] mb-[150px] font-semibold'>Women&apos;s Dress</h2>
                    <div className='flex mb-[86px] gap-2'>
                        <p className="line-through">INR 1999</p>
                        <p>INR 1599</p>
                        <p className="text-red-500">40% off</p>
                    </div>
                    <div>
                        <div className="text-lg">Select a Size</div>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 border border-customTextGreen">S</button>
                            <button className="px-4 py-2 border border-customTextGreen">M</button>
                            <button className="px-4 py-2 border border-customTextGreen">L</button>
                            <button className="px-4 py-2 border border-customTextGreen">XL</button>
                        </div>
                    </div>
                    <div className='mt-[35px] text-white space-y-2 text-sm'>
                        <p>💎 LOCK PRICE: Pay 50% and lock for this price</p>
                        <p>🔥 Get this for INR 1599</p>
                        <p>🔥 Buy 5 & Get Flat 20% Off!</p>
                    </div>
                    <div className=" mt-[100px] flex space-x-4">
                        <button className="px-8 py-4 bg-customTextGreen text-white">Add to Cart</button>
                        <button className="px-8 py-4 text-white border border-customTextGreen">Buy Now</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

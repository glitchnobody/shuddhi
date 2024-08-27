import Image from 'next/image';
import product from '../../images/Product/product1.png'

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-customGreen to-customDarkGreen relative top-24">
            <main className="flex flex-col md:flex-row items-center md:items-start p-8">
                {/* Sidebar for small images */}
                <div className="flex md:flex-col md:space-y-2 space-x-2">
                    <Image src={product} alt="Product" width={80} height={112} />
                    <Image src={product} alt="Product" width={80} height={112} />
                    <Image src={product} alt="Product" width={80} height={112} />
                    <Image src={product} alt="Product" width={80} height={112} />
                </div>


                {/* Main Product Image */}
                <div className="flex mx-8">
                    <Image src={product} alt="Main Product" width={600} height={800} />
                </div>

                {/* Product Details */}
                <div className="text-customTextGreen space-y-6">
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
                    <div className="space-y-2 text-sm">
                        <p>💎 LOCK PRICE: Pay 50% and lock for this price</p>
                        <p>🔥 Get this for INR 599</p>
                        <p>🔥 Buy 5 & Get Flat 20% Off!</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-8 py-4 bg-customTextGreen text-white">Add to Cart</button>
                        <button className="px-8 py-4 border border-customTextGreen">Buy Now</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

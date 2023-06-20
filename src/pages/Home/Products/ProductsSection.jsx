
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Prestige Cattle Feed',
      description: 'A nutritious feed specially formulated to meet the dietary needs of cattle, providing essential nutrients for growth and maintenance.',
      image: 'https://pellet-making-machine.com/wp-content/uploads/2019/06/Cattle-Feed-Pellet.jpg',
    },
    {
      id: 2,
      name: 'Prestige Boiler Feed',
      description: 'A high-quality feed designed for boilers, ensuring optimal health, growth, and performance by providing a balanced blend of nutrients.',
      image: 'https://blog.blains.com/blog/wp-content/uploads/2016/01/Selecting-the-Right-Chicken-Feed.jpg',
    },
    {
      id: 3,
      name: 'Prestige Layer Feed',
      description: 'An ideal feed for layer hens, containing the right balance of proteins, vitamins, and minerals to promote egg production and overall health.',
      image: 'https://www.kalmbachfeeds.com/wp-content/uploads/2022/08/chicken-eating-henhouse-reserve-chicken-feed-out-of-top-of-feeder.jpg',
    },
    {
      id: 4,
      name: 'Prestige Sonali Feed',
      description: 'A specialized feed formulated for Sonali chickens, supporting their growth, immune system, and overall well-being.',
      image: 'https://knbgroup.com.bd/wp-content/uploads/2021/10/Lab-scale-testing-of-novel-fish-feed-ingredients-768x432.jpg',
    },
    {
      id: 5,
      name: 'Prestige Fish Feed',
      description: 'A high-quality fish feed that provides essential nutrients to enhance fish growth, health, and coloration, resulting in healthy and vibrant fish.',
      image: 'https://www.allaboutfeed.net/app/uploads/2020/12/001_276_rb-image-2756185.jpeg',
    },
    {
      id: 6,
      name: 'Prestige Dog Feed',
      description: 'A balanced and nutritious feed for dogs, promoting healthy digestion, strong bones, shiny coat, and overall vitality for your beloved pets.',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_27/2918166/190701-dog-food-eating-bowl-ac-527p.jpg',
    },
    {
      id: 7,
      name: 'Prestige Cat Feed',
      description: 'A premium cat feed enriched with essential nutrients to support feline health, including a healthy urinary tract, strong muscles, and a glossy coat.',
      image: 'https://www.purina-arabia.com/sites/default/files/2021-03/Article%20teaser%20cat%20feeding.jpg',
    },
    // Add more products here
  ];
  const [products, setProducts] = useState(allProducts.slice(0, 3));
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleSeeMoreClick = () => {
    setProducts(allProducts);
    setShowAllProducts(true);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-center font-bold mb-8 text-[#1A2753]">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform-gpu hover:scale-110 border-b-8 border-b-[#00aaef] pb-12"
            >
              <Link to={`/products/${product.id}`} >
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <h3 className="text-xl text-[#1A2753] font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
              </Link>
              <Link to={`/products/${product.id}`} className="text-[#fff] py-2 px-4 rounded-md absolute bottom-0 left-0 right-0 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-center bg-gradient-to-r from-[#1A2753] via-[#00aaef] to-blue-900 text-xl">
                View Details
              </Link>
            </div>
          ))}
        </div>
        {!showAllProducts && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSeeMoreClick}
              className="bg-[#1A2753] text-lg text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300"
            >
              See More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

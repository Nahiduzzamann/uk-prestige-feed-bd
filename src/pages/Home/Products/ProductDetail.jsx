import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  // Assuming you have a products array with all the product details
  const products = [
    {
      id: 1,
      name: 'Prestige Cattle Feed',
      description: 'High-quality feed for cattle.',
      image: 'https://pellet-making-machine.com/wp-content/uploads/2019/06/Cattle-Feed-Pellet.jpg',
      price: 49.99,
      ingredients: ['Corn', 'Soybean Meal', 'Wheat', 'Minerals', 'Vitamins'],
      usage: 'Feed 2-3 times a day as per the cattle\'s requirements.',
    },
    {
      id: 2,
      name: 'Prestige Boiler Feed',
      description: 'Nutritious feed for boilers.',
      image: 'https://blog.blains.com/blog/wp-content/uploads/2016/01/Selecting-the-Right-Chicken-Feed.jpg',
      price: 29.99,
      ingredients: ['Sorghum', 'Fish Meal', 'Soybean Meal', 'Vitamins', 'Minerals'],
      usage: 'Feed the boilers as per the recommended feeding guidelines.',
    },
    {
      id: 3,
      name: 'Prestige Layer Feed',
      description: 'Specially formulated feed for layers.',
      image: 'https://www.kalmbachfeeds.com/wp-content/uploads/2022/08/chicken-eating-henhouse-reserve-chicken-feed-out-of-top-of-feeder.jpg',
      price: 39.99,
      ingredients: ['Corn', 'Soybean Meal', 'Calcium', 'Phosphorus', 'Vitamins'],
      usage: 'Feed the layers according to their age and production stage.',
    },
    {
      id: 4,
      name: 'Prestige Sonali Feed',
      description: 'Balanced feed for Sonali chickens.',
      image: 'https://knbgroup.com.bd/wp-content/uploads/2021/10/Lab-scale-testing-of-novel-fish-feed-ingredients-768x432.jpg',
      price: 34.99,
      ingredients: ['Corn', 'Soybean Meal', 'Wheat', 'Minerals', 'Vitamins'],
      usage: 'Feed the Sonali chickens as per their growth and production requirements.',
    },
    {
      id: 5,
      name: 'Prestige Fish Feed',
      description: 'Nutritious feed for fish farming.',
      image: 'https://www.allaboutfeed.net/app/uploads/2020/12/001_276_rb-image-2756185.jpeg',
      price: 19.99,
      ingredients: ['Fish Meal', 'Soybean Meal', 'Wheat', 'Minerals', 'Vitamins'],
      usage: 'Feed the fish as per their species and growth stage.',
    },
    {
      id: 6,
      name: 'Prestige Dog Feed',
      description: 'Complete and balanced feed for dogs.',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_27/2918166/190701-dog-food-eating-bowl-ac-527p.jpg',
      price: 24.99,
      ingredients: ['Chicken', 'Rice', 'Wheat', 'Vegetables', 'Vitamins', 'Minerals'],
      usage: 'Feed the dogs according to their size, age, and activity level.',
    },
    {
      id: 7,
      name: 'Prestige Cat Feed',
      description: 'Premium food for cats.',
      image: 'https://www.purina-arabia.com/sites/default/files/2021-03/Article%20teaser%20cat%20feeding.jpg',
      price: 22.99,
      ingredients: ['Fish', 'Chicken', 'Rice', 'Vegetables', 'Vitamins', 'Minerals'],
      usage: 'Feed the cats according to their age, weight, and dietary needs.',
    },
  ];

  // Find the selected product based on the productId from the URL
  const selectedProduct = products.find((product) => product.id == productId);

  if (!selectedProduct) {
    // Handle the case when the product is not found
    return <div className='text-4xl'>Product not found.</div>;
  }

  const { name, description, image, price, ingredients, usage } = selectedProduct;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center">
        <img src={image} alt={name} className="w-64 h-64 object-cover rounded" />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700 mt-4">
          <strong>Price:</strong> ${price}
        </p>
        <h3 className="text-xl font-bold mt-6">Ingredients</h3>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-6">Usage</h3>
        <p className="text-gray-700">{usage}</p>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className= "btn text-blue-500 hover:text-blue-700 font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;

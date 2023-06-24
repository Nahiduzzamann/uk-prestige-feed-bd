
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productName } = useParams();
  const [feedData, setFeedData] = useState([]);
  const [data, setData] = useState([]);

  const url = productName + '.json';
  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);

  return (
    <div className='container mx-auto pb-10 lg:pb-20'>
      <h1 className="text-4xl my-8 text-center font-bold text-[#1A2753]">Cattle Feed</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedData.map((feed) => (
            <div
              key={feed.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <img
                src={feed.image}
                alt={feed.name}
                className="w-40 h-40 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold mb-2 text-center text-[#1A2753]">{feed.name}</h2>
              <p className="text-[#1A2753] mb-4">{feed.description}</p>
              <p className="text-[#1A2753] font-bold mb-2 flex ">Price: <p className='text-black font-normal ml-1'>{feed.price}</p></p>
              <p className="text-[#1A2753] font-bold mb-2 flex">Ingredients: <p className='text-black font-normal ml-1'>{feed.ingredients}</p></p>
              <p className="text-[#1A2753] font-bold mb-4 flex">Usage: <p className='text-black font-normal ml-1'>{feed.usage}</p></p>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default ProductDetail;


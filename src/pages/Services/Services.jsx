import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faClipboard, faHeadset, faShieldAlt, faChalkboardTeacher, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faUtensils} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Customized Feeding Solutions</h2>
          <p className="text-gray-700">
            We offer customized feeding solutions tailored to meet the specific needs of your livestock. Our team of experts will work closely with you to develop a feeding program that optimizes the health and productivity of your animals.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faClipboard} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Nutritional Consultation</h2>
          <p className="text-gray-700">
            Our experienced nutritionists provide professional nutritional consultation services to help you make informed decisions about your animal's diet. We analyze the nutritional requirements of your animals and recommend the best feeding strategies to ensure their optimal health and performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faHeadset} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Technical Support</h2>
          <p className="text-gray-700">
            We offer comprehensive technical support to assist you in maximizing the benefits of our feed products. Our team is available to answer your questions, provide guidance on feeding practices, and address any concerns you may have regarding our products or their usage.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faShieldAlt} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
          <p className="text-gray-700">
            Quality is our top priority. We implement stringent quality control measures at every stage of the production process to ensure that our feed products meet the highest standards of safety, nutrition, and consistency. We are committed to delivering superior quality feed that you can trust.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Livestock Management Training</h2>
          <p className="text-gray-700">
            We provide comprehensive training programs to help you enhance your livestock management skills. Our training covers various aspects such as animal health, nutrition, breeding, and disease prevention. We empower you with the knowledge and tools to effectively manage your livestock for optimal productivity.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-8 border-red-500 m-4">
          <FontAwesomeIcon icon={faHandshake} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Supply Chain Partnership</h2>
          <p className="text-gray-700">
            We establish strong partnerships with farmers, distributors, and suppliers to create a robust supply chain network. Through our partnership program, we provide support and resources to ensure a smooth flow of feed products, enabling you to focus on your core operations and achieve business success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiHeart, FiStar } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

export default function AboutPage() {
  const features = [
    {
      icon: <FaUtensils className="w-8 h-8 text-orange-600" />,
      title: "Master Chefs",
      description: "Experienced chefs from India bringing authentic flavors"
    },
    {
      icon: <FiAward className="w-8 h-8 text-orange-600" />,
      title: "Premium Quality",
      description: "Only the finest ingredients used in every dish"
    },
    {
      icon: <FiHeart className="w-8 h-8 text-orange-600" />,
      title: "Passionate Service",
      description: "Dedicated to providing exceptional dining experiences"
    },
    {
      icon: <FiStar className="w-8 h-8 text-orange-600" />,
      title: "Award Winning",
      description: "Recognized as best Indian restaurant in Michigan"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/images/restaurant-interior.jpg"
          alt="Akshaya Patra Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience the Authentic Taste
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400">
              Of Indian Cuisine
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Akshaya Patra is known as one of the Best Indian Restaurants in Farmington Hills, Michigan, 
                serving the most authentic Indian cuisine. Our mission is to offer flavorful dishes that are 
                fit for kings—our valued customers.
              </p>
              <p>
                We have unique recipes formulated by our master chefs from India, and we are committed to 
                bringing the exquisite taste of India to your table. We never compromise on quality or take 
                shortcuts in our pursuit of authentic flavors.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/chef-cooking.jpg"
              alt="Our chefs preparing food"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Full Width Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-orange-50 rounded-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Commitment
          </h3>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p>
              At Akshaya Patra, each recipe is prepared carefully under constant supervision. This attention 
              to meticulous details ensures our customers enjoy not just good, but the best Indian food 
              cooked to perfection.
            </p>
            <p>
              Among all Farmington Indian restaurants, we believe in discovering new tastes that provide 
              unique experiences for food lovers. Our passionate chefs strive to perfect each recipe for 
              distinctive flavors.
            </p>
            <p className="text-center font-medium text-orange-600">
              Your search for the BEST Indian restaurant in Farmington Hills ends here!
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

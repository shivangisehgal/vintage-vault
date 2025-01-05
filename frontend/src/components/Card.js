import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context, server } from "../index";

const Card = ({ imageSrc, title, description, amount }) => {

  const {isAuthenticated} = useContext(Context)

  const handleCheckout = async () => { 
    if(!isAuthenticated) {
      toast.error("Please login first to proceed with the purchase")
      return
    }
    try {
      const {data : key} = await axios.get(`${server}/payment/getKey`)
      const { data: {order} } = await axios.post(`${server}/payment/checkout`, { amount }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Shivangi Sehgal",
        description: "VintageVault",
        // image: "https://yt3.googleusercontent.com/ytc/AIdro_nzIo4JA8bAnk4FYm_KbKOZDjnUjE7Ohd8-FwO2WpDgJaM=s900-c-k-c0x00ffffff-no-rj",
        order_id: order.id,
        callback_url: `${server}/payment/paymentverification`,
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#121212"
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error("Something went wrong during checkout");
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <Link to="#">
        <img 
          className="rounded-t-lg object-cover h-48 w-full" 
          src={imageSrc} 
          alt={title} 
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{amount}  
          </span>
          <button
            onClick={handleCheckout} 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
            <svg 
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { useEffect, useState } from "react";
import axios from 'axios'; 

const BagItems = () => {
    const [bagItems, setBagItems] = useState([]);

    // Function to fetch bag items
    const fetchBagItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get/bags'); // Adjust the URL as needed
        setBagItems(response.data);
      } catch (error) {
        console.error('Error fetching bag items:', error);
      }
    };

    // Function to delete a bag item
    const deleteBagItem = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/bag/${id}`);
        fetchBagItems(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting bag item:', error);
      }
    };

    // Fetch bag items when the component mounts
    useEffect(() => {
      fetchBagItems();
    }, []); // Empty dependency array to only run once on mount

    let totalMrp = 0;
    let totalDiscount = 0;
    let convenienceFee = 99; // assuming convenience fee is constant
    let totalAmount = 0;
    let countBagItem = 0;

    bagItems.forEach((cart) => {
      totalMrp += cart.originalPrice || 0;
      totalDiscount += cart.price; 
      countBagItem++;
    });

    totalAmount = totalDiscount + convenienceFee;

    return (
      <>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item) => (
              <div className="bag-item-container" key={item._id}>
                <div className="item-left-part">
                  <img className="bag-item-img" src={item.image} alt={item.name} />
                </div>
                <div className="item-right-part">
                  <div className="company">{item.brandName}</div>
                  <div className="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
                  <div className="price-container">
                    <span className="current-price">Rs {item.price}</span>
                    <span className="original-price">Rs {item.originalPrice}</span>
                    <span className="discount-percentage">({item.discount}% OFF)</span>
                  </div>
                  <div className="return-period">
                    <span className="return-period-days">14 days</span> return available
                  </div>
                  <div className="delivery-details">
                    Delivery by <span className="delivery-details-days">10 Oct 2023</span>
                  </div>
                </div>

                <div
                  className="remove-from-cart"
                  onClick={() => deleteBagItem(item._id)}
                >
                  X
                </div>
              </div>
            ))}
          </div>
          <div className="bag-summary">
            <div className="bag-details-container">
              <div className="price-header">PRICE DETAILS ({countBagItem} Items)</div>
              <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">Rs-{totalMrp}</span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-Rs-{totalDiscount}</span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">Rs-99</span>
              </div>
              <hr />
              <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">Rs-{totalAmount}</span>
              </div>
            </div>
            <button className="btn-place-order">
              <div className="css-xjhrni">PLACE ORDER</div>
            </button>
          </div>
        </div>
      </>
    );
};

export default BagItems;

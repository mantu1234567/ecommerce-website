import axios from 'axios'; // Install axios in your frontend project

const ProductCard = ({ product }) => {
  const handleCardItem = async (item) => {
    try {
      const response = await fetch('https://ecommerce-backend-ozlc.onrender.com/api/add/bag', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
      });
      if (!response.ok) {
          throw new Error(`Error saving product: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Product saved:', data);
  } catch (error) {
      console.error('Error saving product:', error);
  }
  
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative w-72">
  <div className="w-full h-60 overflow-hidden rounded-md flex justify-center items-center bg-gray-100">
    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
  </div>
      {/* Rating */}
      <div className="flex items-center space-x-1 text-sm text-gray-700">
        <span className="font-semibold">{product.rating}</span>
        <span>⭐</span>
      </div>
      {/* Product Name */}
      <h3 className="font-semibold text-gray-900">{product.name}</h3>
      {/* Product Description */}
      <p className="text-sm text-gray-500">{product.description}</p>
      {/* Price and Discount */}
      <div className="flex items-baseline space-x-2">
        <span className="text-lg font-semibold text-gray-900">Rs. {product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-sm line-through text-gray-500">Rs. {product.originalPrice}</span>
            <span className="text-sm text-red-600">({product.discount}% OFF)</span>
          </>
        )}
      </div>
      {/* Wishlist and Cart Icons */}
      <div className="flex items-center justify-between">
        <button className="text-gray-600 hover:text-red-500">❤️ WISHLIST</button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          onClick={() => handleCardItem(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

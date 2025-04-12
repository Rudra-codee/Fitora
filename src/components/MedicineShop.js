import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiShoppingCart, FiPlus, FiAlertCircle } from 'react-icons/fi';

const Container = styled.div`
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroText = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  z-index: 1;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    max-width: 500px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const SearchBar = styled.div`
  flex: 1;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  color: #0f172a;
  background-color: #f8fafc;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
`;

const CartButton = styled.button`
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  &:hover {
    background-color: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const CartCount = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ef4444;
  color: white;
  font-size: 12px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SOSButton = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background-color: #ef4444;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #dc2626;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ProductCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 15px;
  transition: all 0.2s;

  &:hover {
    border-color: #0ea5e9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #0f172a;
    margin-bottom: 8px;
  }
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const Price = styled.div`
  .mrp {
    font-size: 12px;
    color: #64748b;
    text-decoration: line-through;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #0f172a;
  }

  .discount {
    font-size: 12px;
    color: #16a34a;
    margin-left: 4px;
  }
`;

const AddButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background-color: #0ea5e9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #0284c7;
  }
`;

const CartModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const BuyNowButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #16a34a;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #15803d;
  }
`;

const MedicineShop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Shelcal 500mg Strip Of 15 Tablets',
      image: '/images/shelcal.jpg',
      mrp: 158.69,
      price: 123.71,
      discount: '22%'
    },
    {
      id: 2,
      name: 'Abzorb Total Skin Relief Dusting Powder',
      image: '/images/abzorb.jpg',
      mrp: 160.00,
      price: 136.00,
      discount: '15%'
    },
    {
      id: 3,
      name: 'Liveasy Wellness Calcium Magnesium',
      image: '/images/liveasy.jpg',
      mrp: 599.00,
      price: 251.58,
      discount: '58%'
    },
    {
      id: 4,
      name: 'Evion 400mg Strip Of 20 Capsule',
      image: '/images/evion.jpg',
      mrp: 86.87,
      price: 69.50,
      discount: '20%'
    },
    {
      id: 5,
      name: 'Revital H Men Multivitamin',
      image: '/images/revital.jpg',
      mrp: 600.00,
      price: 517.89,
      discount: '39%'
    },
    {
      id: 6,
      name: 'Dr. Morepen Gluco One BG 03 Glucometer Test Strips',
      image: '/images/glucometer.jpg',
      mrp: 849.00,
      price: 517.89,
      discount: '39%'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSOS = () => {
    alert('Emergency services have been notified. Help is on the way!');
  };

  return (
    <Container>
      <Header>
        <HeroImage>
          <img src="/images/medicine-banner.jpg" alt="Medicine Shop Banner" />
          <HeroText>
            <h1>Your Health, Your Future</h1>
            <p>Get all your medicines and health essentials delivered at your doorstep</p>
          </HeroText>
        </HeroImage>
      </Header>

      <SearchSection>
        <SearchBar>
          <SearchIcon>
            <FiSearch size={20} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search for medicines and health products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        <CartButton onClick={() => setShowCart(true)}>
          <FiShoppingCart size={20} />
          Cart
          {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
        </CartButton>
        <SOSButton onClick={handleSOS}>
          <FiAlertCircle size={20} />
          SOS Emergency
        </SOSButton>
      </SearchSection>

      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductInfo>
              <h3>{product.name}</h3>
              <PriceSection>
                <Price>
                  <div className="mrp">MRP ₹{product.mrp}</div>
                  <div className="price">
                    ₹{product.price}
                    <span className="discount">({product.discount})</span>
                  </div>
                </Price>
                <AddButton onClick={() => addToCart(product)}>
                  <FiPlus size={20} />
                </AddButton>
              </PriceSection>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>

      {showCart && (
        <>
          <Overlay onClick={() => setShowCart(false)} />
          <CartModal>
            <h2>Your Cart ({cart.length} items)</h2>
            {cart.map((item, index) => (
              <div key={index} style={{ margin: '15px 0', padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                <div>{item.name}</div>
                <div>₹{item.price}</div>
              </div>
            ))}
            <div style={{ fontWeight: 600, margin: '15px 0' }}>
              Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </div>
            <BuyNowButton onClick={() => alert('Proceeding to checkout...')}>
              Buy Now
            </BuyNowButton>
          </CartModal>
        </>
      )}
    </Container>
  );
};

export default MedicineShop; 
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isCartVisible = useSelector((state) => state.main.isCarVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://joke-fcdf0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    }
    );
  },[cart]);

  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

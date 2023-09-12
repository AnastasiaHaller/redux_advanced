import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "1",
    price: 7,
    title: "Super Product 1",
    description: "Due to its high quality, this product will last you a very long time."
  },
  {
    id: "2",
    price: 8,
    title: "Super Product 2",
    description: "Due to its high quality, this product will last you a very long time."
  },
  {
    id: "3",
    price: 9,
    title: "Super Product 3",
    description: "Due to its high quality, this product will last you a very long time."
  },
];

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Our store has the highest quality products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

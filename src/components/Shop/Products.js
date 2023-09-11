import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Our store has the highest quality products</h2>
      <ul>
        <ProductItem
          title="Super Product"
          price={7}
          description="Due to its high quality, this product will last you a very long time."
        />
      </ul>
    </section>
  );
};

export default Products;

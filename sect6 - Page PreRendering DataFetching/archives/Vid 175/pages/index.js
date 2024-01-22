// Section 6, Vid 174 - NextJS Pre-render by Default

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {/* Map the products array where for each product, we output it 
      in a list item. */}
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// Run any code that will never be visible on the client side.
// This function will get executed first and pass the props to HomePage
export async function getStaticProps() {
  return {
    props: {
      // Define a 'products' property on the 'props' object
      // This property is an array of objects, where each object represents a product
      // Each product object has an 'id' property and a 'title' property
      products: [
        { id: "p1", title: "Product 1" }, // First product
        { id: "p2", title: "Product 2" }, // Second product
        { id: "p3", title: "Product 3" }, // Third product
      ],
    },
  };
}

export default HomePage;

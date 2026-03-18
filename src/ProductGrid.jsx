import ProductCard from "./ProductCard";
import "./assets/styles.css";

function ProductGrid() {

  const products = [

    {
      id: 1,
      title: "Shoes",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      id: 2,
      title: "Watch",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
      id: 3,
      title: "Bag",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },

    {
      id: 4,
      title: "Phone",
      price: "₹9999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    }

  ];

  return (

    <div className="grid">

      {products.map((p) => (

        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          image={p.image}
        />

      ))}

    </div>
  );
}

export default ProductGrid;
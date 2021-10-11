import { IProduct } from "../types";
import { ProductCard } from "./";

const ProductsList = ({ products }: { products: IProduct[] }) => (
  <div className="products">
    {products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductsList;

import {
  createProduct,
  getSellerProduct,
  getAllProducts,
} from "../service/product.api";

import { useDispatch } from "react-redux";
import { setSellerProducts, setProducts } from "../state/product.slice";

export const useProduct = () => {
  const dispatch = useDispatch();

  async function handleCreateProduct(fromData) {
    const data = await createProduct(fromData);
    return data.product;
  }
  async function handleGetSellerProducts() {
    const data = await getSellerProduct();
    dispatch(setSellerProducts(data.products));
    return data.products;
  }
  async function handleGetAllProducts() {
    const data = await getAllProducts();
    dispatch(setProducts(data.products));
  }

  return { handleCreateProduct, handleGetSellerProducts, handleGetAllProducts };
};

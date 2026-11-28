import {
  createProduct,
  getSellerProduct,
  getAllProducts,
  getProductById,
  addProductVariant,
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
  async function handleGetProductById(productId) {
    const data = await getProductById(productId);
    return data.product;
  }
  async function handleAddProductVariant(productId, newProductVariant) {
    const data = await addProductVariant(productId, newProductVariant);

    return data;
  }

  return {
    handleCreateProduct,
    handleGetSellerProducts,
    handleGetAllProducts,
    handleGetProductById,
    handleAddProductVariant,
  };
};

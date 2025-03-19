import { useEffect, useState } from "react";
import { IProduct } from "../../types/product";
import { ProductService } from "../../services/product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const ProductSchema = z.object({
  name: z.string().min(2, { message: "Name must have at least 2 characters" }),
  description: z
    .string()
    .min(2, { message: "Description must have at least 2 characters" }),
  productCode: z
    .string()
    .min(2, { message: "Product Code must have at least 2 characters" }),
  price: z.number().min(1, { message: "Price must be greater than 0" }),
  image: z
    .string()
    .min(2, { message: "Image must have at least 2 characters" }),
});
const ListProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IProduct>({ resolver: zodResolver(ProductSchema) });

  const handleShowModal = (product?: IProduct) => {
    setIsShowModal(true);
    if (!product) {
      setSelectedProduct(null);
      return;
    }
    setSelectedProduct(product);
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("productCode", product.productCode);
    setValue("price", product.price);
    setValue("image", product.image);
  };

  const handleHiddenModal = () => {
    setIsShowModal(false);
    reset();
  };

  const onSubmit = async (data: IProduct) => {
    if (selectedProduct) {
      const updateProductResponse = await ProductService.updateProduct(
        selectedProduct.id,
        data
      );
      if (!updateProductResponse) return;
      // fetchProduct();
      setProducts(
        products.map((product) =>
          product.id === updateProductResponse.id
            ? updateProductResponse
            : product
        )
      );
    } else {
      const addProductResponse = await ProductService.addProduct(data);
      if (!addProductResponse) {
        return;
      }
      toast.success('Add Product successfully');
      // fetchProduct();
      setProducts([...products, addProductResponse]);
    }
    handleHiddenModal();
  };

  const handleDelete = async (id: number) => {
    const isConfirm = window.confirm("Ban co chac muon xoa khong?");
    if (!isConfirm) return;
    await ProductService.deleteProduct(id);
    // fetchProduct();
    setProducts(products.filter((product) => product.id !== id));
  };

  const fetchProduct = async () => {
    const data = await ProductService.getAllProduct();
    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="w-full mb-1">
          <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      className="w-5 h-5 mr-2.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span
                      className="ml-1 text-sm font-medium text-gray-400 md:ml-2"
                      aria-current="page"
                    >
                      Products
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              All products
            </h1>
          </div>
          <div className="items-center block sm:flex md:divide-x md:divide-gray-100">
            <form className="mb-4 sm:pr-3 sm:mb-0" action="#" method="GET">
              <label className="sr-only">Search</label>
              <div className="relative mt-1 sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Search for products"
                />
              </div>
            </form>
            <div className="flex items-center w-full sm:justify-end">
              <button
                onClick={() => handleShowModal()}
                type="button"
                data-modal-toggle="add-product-modal"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:ml-auto"
              >
                <svg
                  className="w-6 h-6 mr-2 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add product
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 xl:gap-4">
        <div className="h-full p-4 mb-4 bg-white rounded-lg shadow sm:p-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product-Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4">{product.productCode}</td>
                    <td className="px-6 py-4">{product.price}</td>
                    <td>
                      <button
                        onClick={() => handleShowModal(product)}
                        className="inline-flex items-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-lg hover:bg-blue-700 hover:scale-105"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="px-4 py-2 ml-2 font-bold text-white transition duration-300 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-700 hover:scale-105"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal */}
      {isShowModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 p-6 bg-white rounded-lg shadow-lg md:w-1/2 ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">
                  {selectedProduct && selectedProduct.id ? "Edit" : "Add"} sản
                  phẩm
                </h2>
                <button
                  onClick={handleHiddenModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.description && (
                    <span style={{ color: "red" }}>
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Code
                  </label>
                  <input
                    {...register("productCode")}
                    type="text"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.productCode && (
                    <span style={{ color: "red" }}>
                      {errors.productCode.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    price
                  </label>
                  <input
                    {...register("price", { valueAsNumber: true })}
                    type="number"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.price && (
                    <span style={{ color: "red" }}>{errors.price.message}</span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <input
                    {...register("image")}
                    type="text"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.image && (
                    <span style={{ color: "red" }}>{errors.image.message}</span>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleHiddenModal}
                    type="button"
                    className="px-4 py-2 mr-2 font-bold text-white bg-gray-500 rounded-lg hover:bg-gray-700"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                  >
                    Lưu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListProduct;

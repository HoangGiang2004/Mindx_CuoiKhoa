import React from "react";

interface IProduct {
  id: number;
  name: string;
  description: string;
  productCode: string;
  price: number;
  image: string;
}

const Home = () => {
  const products: IProduct[] = [
    {
      id: 1,
      name: "Samsung",
      description:
        "Apple Trade In.Nhận 1.000.000đ–22.200.000đ điểm tín dụng để sử dụng khi mua iPhone mới.",
      productCode: "Samsung-1",
      price: 1000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 2,
      name: "Iphone",
      description: "Apple Trade In.Nhận 1.000.000đ–22.200.000đ điểm tín dụng để sử dụng khi mua iPhone mới.",
      productCode: "Iphone-1",
      price: 2000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Nokia",
      description: "Apple Trade In.Nhận 1.000.000đ–22.200.000đ điểm tín dụng để sử dụng khi mua iPhone mới.",
      productCode: "Nokia-1",
      price: 5000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 4,
      name: "Xiaomi",
      description: "Apple Trade In.Nhận 1.000.000đ–22.200.000đ điểm tín dụng để sử dụng khi mua iPhone mới.",
      productCode: "Xiaomi-1",
      price: 3000,
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    }
  ];
  return (
    <>
      <div className="grid gap-10 p-2 m-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={product.image} alt="" />
            </a>
            <div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

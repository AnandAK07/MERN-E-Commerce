import { useEffect, useState } from "react";
import { MainCarousel } from "../components/home/MainCarousel"
import Pagination from "../components/home/Pagination"
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([])


  const handleProduct = async () => {
    try {
      const data = await axios(`${process.env.REACT_APP_DUMMY_JSON_URL}/products`)
      setProducts(data.data.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleProduct();
  }, [])
  return (
    <>
      <MainCarousel />
      <Pagination />
      <div className="my-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => {
          return i < 8 ? <div key={i} className="mx-14 max-w-80 overflow-hidden  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img className="rounded-t-lg object-cover object-center group-hover:opacity-75" src={product.thumbnail} alt="" />
            </div>
            <div className="flex  flex-col justify-center items-center p-2">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
              <Link to={'/product'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div> : <></>
        })}
      </div>
    </>
  )
}

export default HomePage;
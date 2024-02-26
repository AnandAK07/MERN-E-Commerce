import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../redux/productReducer/action'
import { Link } from 'react-router-dom'


export const Product = ({ mobileFiltersOpen, category, range, discount, stock, sortingOrder, currentPage, limit }) => {
    const dispatch = useDispatch();
    const { product, loading, success, error } = useSelector((store) => store.productReducer)


    const filteredProducts = product.filter(product => {
        const stockMatch = stock === '' || (stock === 'in_stock' && product.stock >= 1) || (stock === 'out_of_stock' && product.stock < 1);
        const categoryMatch = category.length === 0 || category.includes(product.category)
        const discountMatch = discount === '' || product.discountPercentage >= discount;
        const priceRangeMatch = range === '' || isPriceInRange(product.price, range);

        return stockMatch && categoryMatch && discountMatch && priceRangeMatch;
    });

    // Function to check if a price falls within a given range
    function isPriceInRange(price, range) {
        const [min, max] = range.split('-').map(Number);
        return price >= min && price <= max;
    }


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortingOrder === 'Price: Low to High') {
            return a.price - b.price;
        } else if (sortingOrder === 'Price: High to Low') {
            return b.price - a.price;
        } else if (sortingOrder === 'Best Rating') {
            return b.rating - a.rating;
        } else {
            return a.title.localeCompare(b.title)
        }
    });



    const indexOfLastProduct = currentPage * 12;
    const indexOfFirstProduct = indexOfLastProduct - 12;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(product.length / 12);
    useEffect(() => {
        getAllProducts(dispatch, (mobileFiltersOpen, category, sortingOrder, currentPage, limit))
    }, [])

    return (

        <>
            {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {currentProducts.map((product) => (
                        <Link to={`/product/${product._id}`} key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.thumbnail}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className='flex align-center justify-between'>
                                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                                <h4 className="mt-4 text-sm text-gray-700">{product.brand}</h4>
                            </div>
                            <div className='flex justify-between'>
                                <p className="text-lg font-medium text-gray-900">₹{product.price}</p>
                                <p className="line-through text-lg font-medium text-gray-400">₹{Math.round((product.price) / (1 - (product.discountPercentage / 100)))}</p>
                                <p className='text-sm mt-1 font-medium text-green-600'>
                                    {Math.round(product.discountPercentage)}% off
                                </p>
                                <p>{product.rating}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* </div > */}
        </>
    )
}


import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Product } from './Product'
import { singleFilter } from './filterData'
import {Pagination}  from '../product/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/productReducer/action'

const sortOptions = [
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'smartphones', label: 'smartphones', checked: false },
            { value: 'laptops', label: 'laptops', checked: false },
            { value: 'fragrances', label: 'fragrances', checked: false },
            { value: 'skincare', label: 'skincare', checked: false },
            { value: 'groceries', label: 'groceries', checked: false },
            { value: 'home-decoration', label: 'home-decoration', checked: false },
            { value: 'furniture', label: 'furniture', checked: false },
            { value: 'tops', label: 'tops', checked: false },
            { value: 'womens-dresses', label: 'womens-dresses', checked: false },
            { value: 'womens-shoes', label: 'womens-shoes', checked: false },
            { value: 'mens-shirts', label: 'mens-shirts', checked: false },
            { value: 'mens-shoes', label: 'mens-shoes', checked: false },
            { value: 'mens-watches', label: 'mens-watches', checked: false },
            { value: 'womens-watches', label: 'womens-watches', checked: false },
            { value: 'womens-bags', label: 'womens-bags', checked: false },
            { value: 'womens-jewellery', label: 'womens-jewellery', checked: false },
            { value: 'sunglasses', label: 'sunglasses', checked: false },
            { value: 'automotive', label: 'automotive', checked: false },
            { value: 'motorcycle', label: 'motorcycle', checked: false },
            { value: 'lighting', label: 'lighting', checked: false }
        ],
    }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const getUrl = (apiUrl, search, filter, sortingOrder, currentPage) => {
    if (search) {
        apiUrl = apiUrl + `?=${search}`
    }
    if (filter) {
        apiUrl = apiUrl + `?category=${filter}`
    }
    if (sortingOrder) {
        apiUrl = apiUrl + `?_sort=price&_order=${sortingOrder}`
    }
    return apiUrl;
}

export const CategoryFilters = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [category, setCategory] = useState([]);
    const [range, setRange] = useState('');
    const [discount, setDiscount] = useState('');
    const [stock, setStock] = useState('');
    const [sortingOrder, setSortingOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('')
    const limit = 12;


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


    // Define your handleCategory function
    const handleCategory = (categoryValue, isChecked) => {
        if (isChecked) {
            // If checkbox is checked, add the category to the array
            setCategory(prevCategories => [...prevCategories, categoryValue]);
        } else {
            // If checkbox is unchecked, remove the category from the array
            setCategory(prevCategories => prevCategories.filter(cat => cat !== categoryValue));
        }
    };

    const handleRadioFilterChange = (e, id) => {
        if (id === 'price') {
            setRange(e.target.value);
        } else if (id === 'discount') {
            setDiscount(e.target.value);
        } else if (id === 'stock') {
            setStock(e.target.value)
        }
    }



    useEffect(() => {
        getAllProducts(dispatch, (mobileFiltersOpen, category, sortingOrder, currentPage, limit))
    }, [])
    return (
        <>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        onChange={e => handleCategory(option.value, e.target.checked)}
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}

                                    {singleFilter.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            {/* <span className="font-medium text-gray-900">{section.name}</span> */}
                                                            <FormLabel style={{ color: 'black' }} id="demo-radio-buttons-group-label">{section.name}</FormLabel>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            <FormControl>
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    defaultValue="female"
                                                                    name="radio-buttons-group"
                                                                >
                                                                    {section.options.map((option, optionIdx) => (
                                                                        <>
                                                                            <FormControlLabel onChange={(e) => handleRadioFilterChange(e, section.id)} value={option.value} control={<Radio />} label={option.label} />
                                                                        </>
                                                                    ))}
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </div>
                                                    </Disclosure.Panel>

                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="min-h-screen mx-16 max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mr-5">Products</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        onClick={() => { setSortingOrder(option.name); console.log(option.name) }}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>

                            {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                onChange={e => handleCategory(option.value, e.target.checked)}
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}

                            {singleFilter.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    {/* <span className="font-medium text-gray-900">{section.name}</span> */}
                                                    <FormLabel style={{ color: 'black' }} id="demo-radio-buttons-group-label">{section.name}</FormLabel>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue="female"
                                                            name="radio-buttons-group"
                                                        >
                                                            {section.options.map((option, optionIdx) => (
                                                                <>
                                                                    <FormControlLabel onChange={(e) => handleRadioFilterChange(e, section.id)} value={option.value} control={<Radio />} label={option.label} />
                                                                </>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </Disclosure.Panel>

                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product grid */}
                        <div className="lg:col-span-3">{/* Your content */}
                            <Product currentProducts={currentProducts} />
                        </div>
                    </div>
                </section>
            </main>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} currentProducts={currentProducts} indexOfFirstProduct={indexOfFirstProduct} indexOfLastProduct={indexOfLastProduct} />
        </>
    )
}

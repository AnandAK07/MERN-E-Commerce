// export const color = ["White", "Black", "Red", "Marun", "Being", "Pink", "Green", "Yellow"]
export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
        ],
    },
]


export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "1-49", label: "1-49" },
            { value: "49-99", label: "49-99" },
            { value: "99-199", label: "99-199" },
            { value: "199-399", label: "199-399" },
            { value: "399-999", label: "399-999" },
            { value: "999-1999", label: "999-1999" },
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "0", label: "0% And Above" },
            { value: "5", label: "5% And Above" },
            { value: "10", label: "10% And Above" },
            { value: "15", label: "15% And Above" },
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ]
    }
]
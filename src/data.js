let xAxisData = [
    {
        name: 'Jan',
        'Sale': 112_000
    },
    {
        name: 'Feb',
        'Sale': 101_000
    },
    {
        name: 'Mar',
        'Sale': 85_000
    },
    {
        name: 'Apr',
        'Sale': 49_000
    },
    {
        name: 'May',
        'Sale': 92_000
    },
    {
        name: 'Jun',
        'Sale': 95_000
    },
    {
        name: 'Jul',
        'Sale': 83_000
    },
    {
        name: 'Agu',
        'Sale': 78_000
    },
    {
        name: 'Sep',
        'Sale': 50_000
    },
    {
        name: 'Oct',
        'Sale': 56_000
    },
    {
        name: 'Nov',
        'Sale': 98_000
    },
    {
        name: 'Dec',
        'Sale': 152_000
    },
]


const newMembers = [
    {
        id: 1,
        username: 'Mohammad Amin',
        title: 'Web Developer',
        img: 'images/man3.jpg'
    },
    {
        id: 2,
        username: 'Ali',
        title: 'Web Developer',
        img: 'images/man3.jpg'
    },
    {
        id: 3,
        username: 'Arash',
        title: 'Weblog',
        img: 'images/man3.jpg'
    },
    {
        id: 4,
        username: 'Maryam',
        title: 'Seo Eng',
        img: 'images/man3.jpg'
    }
]

const transactions = [
    {
        id: 1,
        customer: 'Vahid Mohammadi',
        date: '12 Feb 2025',
        amount: 230,
        status: 'Declined',
        img: 'images/man3.jpg'
    },
    {
        id: 2,
        customer: 'Mohammad Kazemi',
        date: '19 Feb 2025',
        amount: 150,
        status: 'Approved',
        img: 'images/man3.jpg'
    },
    {
        id: 3,
        customer: 'Sasan Miri',
        date: '25 Feb 2025',
        amount: 45,
        status: 'Pending',
        img: 'images/man3.jpg'
    },
    {
        id: 4,
        customer: 'Sara Mohammadi',
        date: '29 Feb 2025',
        amount: 30,
        status: 'Approved',
        img: 'images/man3.jpg'
    },
]


let userRows = [
    {
        id: 1, 
        username: 'Arash Askari',
        avatar: 'images/man3.jpg',
        status: 'active',
        transaction: '$350',
        email: 'arash@gmail.comm'
    },
    {
        id: 2, 
        username: 'Armin Khorasani',
        avatar: 'images/man3.jpg',
        status: 'not-active',
        transaction: '$410',
        email: 'armin@gmail.comm'
    },
    {
        id: 3, 
        username: 'Ali Kermani',
        avatar: 'images/man3.jpg',
        status: 'active',
        transaction: '$740',
        email: 'ali@gmail.comm'
    },
    {
        id: 4, 
        username: 'Mohammad Fakhr',
        avatar: 'images/man3.jpg',
        status: 'active',
        transaction: '$80',
        email: 'mmd@gmail.comm'
    },
    {
        id: 5, 
        username: 'Abbas Molaee',
        avatar: 'images/man3.jpg',
        status: 'not-active',
        transaction: '$630',
        email: 'abbas@gmail.comm'
    },
]

let products = [
    {
        id: 1,
        title: 'Asus Laptop',
        avatar: '/images/laptop.jpg',
        price: 1200,
        active: 'Yes',
        inStock: 'Yes',
        sales: 9000
    },
    {
        id: 2,
        title: 'HP Laptop',
        avatar: '/images/laptop.jpg',
        price: 950,
        active: 'Yes',
        inStock: 'Yes',
        sales: 5400
    },
    {
        id: 3,
        title: 'Dell Laptop',
        avatar: '/images/laptop.jpg',
        price: 800,
        active: 'Yes',
        inStock: 'Yes',
        sales: 40000
    },
    {
        id: 4,
        title: 'Acer Laptop',
        avatar: '/images/laptop.jpg',
        price: 1100,
        active: 'Yes',
        inStock: 'Yes',
        sales: 92000
    },
]


const productsData = [
    {
        name: 'Jan',
        sales: 4000
    },
    {
        name: 'Feb',
        sales: 3500
    },
    {
        name: 'Mar',
        sales: 7000
    }
]

export {xAxisData, newMembers, transactions, userRows, products, productsData};
// scripts.js

const menuItems = [
    { code: 'B1001', name: 'Classic Burger (Large)', price: 750, category: 'burgers' },
    { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500, category: 'burgers', discount: 0.15 },
    { code: 'B1003', name: 'Turkey Burger', price: 1600, category: 'burgers' },
    { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400, category: 'burgers' },
    { code: 'B1005', name: 'Chicken Burger (Regular)', price: 800, category: 'burgers', discount: 0.20 },
    { code: 'B1006', name: 'Cheese Burger (Large)', price: 1000, category: 'burgers' },
    { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600, category: 'burgers' },
    { code: 'B1008', name: 'Bacon Burger', price: 650, category: 'burgers', discount: 0.15 },
    { code: 'B1009', name: 'Shawarma Burger', price: 800, category: 'burgers' },
    { code: 'B1010', name: 'Olive Burger', price: 1800, category: 'burgers' },
    { code: 'B1012', name: 'Double-Cheese Burger', price: 1250, category: 'burgers', discount: 0.20 },
    { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200, category: 'burgers' },
    { code: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600, category: 'burgers', discount: 0.10 },
    { code: 'B1015', name: 'Paneer Burger', price: 900, category: 'burgers' },
    { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000, category: 'submarines' },
    { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500, category: 'submarines' },
    { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800, category: 'submarines', discount: 0.03 },
    { code: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400, category: 'submarines' },
    { code: 'B1020', name: 'Grinder Submarine', price: 2300, category: 'submarines' },
    { code: 'B1021', name: 'Cheese Submarine', price: 2200, category: 'submarines' },
    { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900, category: 'submarines', discount: 0.16 },
    { code: 'B1023', name: 'Special Horgie Submarine', price: 2800, category: 'submarines' },
    { code: 'B1024', name: 'MOS Special Submarine', price: 3000, category: 'submarines' },
    { code: 'B1025', name: 'Steak Fries (Large)', price: 1200, category: 'fries' },
    { code: 'B1026', name: 'Steak Fries (Medium)', price: 600, category: 'fries' },
    { code: 'B1027', name: 'French Fries (Large)', price: 800, category: 'fries' },
    { code: 'B1028', name: 'French Fries (Medium)', price: 650, category: 'fries' },
    { code: 'B1029', name: 'French Fries (Small)', price: 450, category: 'fries' },
    { code: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600, category: 'fries' },
    { code: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600, category: 'pasta', discount: 0.15 },
    { code: 'B1032', name: 'Chicken Penne Pasta', price: 1700, category: 'pasta' },
    { code: 'B1033', name: 'Ground Turkey Pasta Bake', price: 2900, category: 'pasta', discount: 0.10 },
    { code: 'B1034', name: 'Creamy Shrimp Pasta', price: 2000, category: 'pasta' },
    { code: 'B1035', name: 'Lemon Butter Pasta', price: 1950, category: 'pasta' },
    { code: 'B1036', name: 'Tagliatelle Pasta', price: 2400, category: 'pasta', discount: 0.01 },
    { code: 'B1037', name: 'Baked Ravioli', price: 2000, category: 'pasta', discount: 0.01 },
    { code: 'B1038', name: 'Fried Chicken (Small)', price: 1200, category: 'chicken' },
    { code: 'B1039', name: 'Fried Chicken (Regular)', price: 2300, category: 'chicken', discount: 0.10 },
    { code: 'B1040', name: 'Fried Chicken (Large)', price: 3100, category: 'chicken', discount: 0.05 },
    { code: 'B1041', name: 'Hot Wings (Large)', price: 2400, category: 'chicken' },
    { code: 'B1042', name: 'Devilled Chicken (Large)', price: 900, category: 'chicken' },
    { code: 'B1043', name: 'BBQ Chicken (Regular)', price: 2100, category: 'chicken' },
    { code: 'B1044', name: 'Pepsi (330ml)', price: 990, category: 'beverages', discount: 0.05 },
    { code: 'B1045', name: 'Coca-Cola (330ml)', price: 1230, category: 'beverages' },
    { code: 'B1046', name: 'Sprite (330ml)', price: 1500, category: 'beverages', discount: 0.03 },
    { code: 'B1047', name: 'Mirinda (330ml)', price: 850, category: 'beverages', discount: 0.07 }
];

document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    console.log('DOM fully loaded and parsed');
});

function displayMenu() {
    const categories = ['burgers', 'submarines', 'fries', 'pasta', 'chicken', 'beverages'];
    categories.forEach(category => {
        const categoryDiv = document.getElementById(category);
        const items = menuItems.filter(item => item.category === category);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ${item.price} LKR (Code: ${item.code})`;
            if (item.discount) {
                itemElement.textContent += ` - Discount: ${(item.discount * 100).toFixed(0)}%`;
            }
            categoryDiv.appendChild(itemElement);
        });
    });
}

let cart = [];

function addToCart() {
    const itemCode = document.getElementById('item-code').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const item = menuItems.find(item => item.code === itemCode);

    if (item && quantity > 0) {
        const cartItem = cart.find(cartItem => cartItem.code === itemCode);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...item, quantity });
        }
        updateCart();
    } else {
        alert('Invalid item code or quantity.');
    }
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - ${item.quantity} x ${item.price} LKR`;
        if (item.discount) {
            const discountAmount = item.price * item.quantity * item.discount;
            total += (item.price * item.quantity) - discountAmount;
            itemElement.textContent += ` - Discount: -${discountAmount.toFixed(2)} LKR`;
        } else {
            total += item.price * item.quantity;
        }
        cartElement.appendChild(itemElement);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}


function checkout() {
    if (cart.length > 0) {
        const customerId = prompt('Enter Customer ID for this order:');
        const customer = customers.find(customer => customer.id === customerId);
        if (customer) {
            const orderTotal = parseFloat(document.getElementById('total').textContent);
            const order = { id: generateOrderId(), customerId: customer.id, total: orderTotal, items: [...cart] };
            orders.push(order);
            alert('Checkout successful!');
            cart = [];
            updateCart();
        } else {
            alert('Customer not found. Please add the customer first.');
        }
    } else {
        alert('Cart is empty.');
    }
}

function generateOrderId() {
    return `ORD${Date.now()}`;
}

let customers = [];

function addCustomer() {
    const customerId = document.getElementById('customer-id').value;
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;

    if (customerId && customerName && customerPhone) {
        customers.push({ id: customerId, name: customerName, phone: customerPhone });
        updateCustomerList();
        document.getElementById('customer-form').reset();
    } else {
        alert('Invalid customer details.');
    }
}

function updateCustomerList() {
    const customerListElement = document.getElementById('customer-list');
    customerListElement.innerHTML = '';
    customers.forEach(customer => {
        const customerElement = document.createElement('li');
        customerElement.textContent = `ID: ${customer.id} - Name: ${customer.name} - Phone: ${customer.phone}`;
        customerListElement.appendChild(customerElement);
    });
}


function generateReport() {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = '<h3>Monthly Report</h3>';
    // Add logic to generate and display the report
}
// scripts.js

let orders = [];

function generateReport() {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = '<h3>Monthly Sales Report</h3>';

    let totalSales = 0;
    orders.forEach(order => {
        totalSales += order.total;
    });

    const reportElement = document.createElement('p');
    reportElement.textContent = `Total Sales: ${totalSales.toFixed(2)} LKR`;
    reportOutput.appendChild(reportElement);

    // Display top customers
    const topCustomers = getTopCustomers();
    if (topCustomers.length > 0) {
        const topCustomersElement = document.createElement('ul');
        topCustomersElement.innerHTML = '<h3>Top Customers</h3>';
        topCustomers.forEach(customer => {
            const customerElement = document.createElement('li');
            customerElement.textContent = `ID: ${customer.id} - Name: ${customer.name} - Total Orders: ${customer.totalOrders}`;
            topCustomersElement.appendChild(customerElement);
        });
        reportOutput.appendChild(topCustomersElement);
    }
}

function getTopCustomers() {
    const customerOrderCounts = customers.map(customer => {
        const totalOrders = orders.filter(order => order.customerId === customer.id).length;
        return { ...customer, totalOrders };
    });

    customerOrderCounts.sort((a, b) => b.totalOrders - a.totalOrders);

    return customerOrderCounts.slice(0, 5); // Return top 5 customers
}




import Client from './class/client';
import OrderItem from './class/orderItem';
import Order from './class/order';

const client1 = new Client('John');
const client2 = new Client('Jane');

const orderItem1 = new OrderItem('Pão de queijo', 3);
const orderItem2 = new OrderItem('Misto quente', 7);
const orderItem3 = new OrderItem('Café expreso', 5);
const orderItem4 = new OrderItem('Café com leite', 4);

const order1 = new Order(client1, [orderItem1, orderItem3], 'Dinheiro');
const order2 = new Order(client2, [orderItem2, orderItem4], 'Cartão');

const closedOrder1 = order1.calculateOrder();
const closedOrder2 = order2.calculateOrder();

console.log('--- Order 1:');
console.log('Client: ', order1.client.name);
console.log('Items: ', order1.items);
console.log('Payment method: ', order1.paymentMethod);
console.log('Discount: ', order1.discount);
console.log('Total: ', closedOrder1);

console.log('--- Order 2:');
console.log('Client: ', order2.client.name);
console.log('Items: ', order2.items);
console.log('Payment method: ', order2.paymentMethod);
console.log('Discount: ', order1.discount);
console.log('Total: ', closedOrder2);

console.log('===> crying');
order1.discount = 0.3;
order2.discount = 0.5;

console.log('--- Order 1:');
console.log('Discount: ', order1.discount);
console.log('Total: ', order1.calculateOrder());

console.log('--- Order 2:');
console.log('Discount: ', order2.discount);
console.log('Total: ', order2.calculateOrder());
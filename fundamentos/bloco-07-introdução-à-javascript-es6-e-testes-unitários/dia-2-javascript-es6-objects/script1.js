// EXERCÍCIOS DO DIA
// PARTE I
//

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// EXERCÍCIO 1:
const customerInfo = (order) => 
  `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, APT: ${order.address.apartment}.`;
console.log(customerInfo(order));

// EXERCÍCIO 2:
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;  
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${order.order.drinks.coke.type} é R$ ${order.payment.total.toFixed(2).replace('.', ',')}.`;
}
console.log(orderModifier(order));
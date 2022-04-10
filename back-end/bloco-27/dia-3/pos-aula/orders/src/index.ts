import Student from './class/studentClass';
import Lesson from './class/lessonClass';
import Teacher from './class/teacherClass';
import Employee from './class/employeeClass';
import Order from './class/order';
import OrderItem from './class/orderItem';

const carolinaStudent = new Student({
  name: 'Carolina da Silva',
  birthday: new Date('2005/03/17'),
});
const lucasStudent = new Student({
  name: 'Lucas Peixoto Salgueiro',
  birthday: new Date('2006/07/19'),
});

const math = new Lesson('Matemática');
const history = new Lesson('História');

const marta = new Employee({
  person: {
    name: 'Marta da Silva',
    birthday: new Date('1980/03/30'),
  },
  info: {
    salary: 2000,
    admissionDate: new Date('2019/04/01'),    
  },
});

const joao = new Employee({
  person: {
    name: 'João Antônio da Costa',
    birthday: new Date('1982/04/21'),
  },
  info: {
    salary: 3000,
    admissionDate: new Date('2015/03/01'),
  },
});

const martaMathTeacher = new Teacher({
  employee: marta,
  lesson: math,
});

const joaoHistoryTeacher = new Teacher({
  employee: joao,
  lesson: history,
});

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolinaStudent, [sandwiche, juice, dessert], 'dinheiro', 0.10);
const lucasOrder = new Order(lucasStudent, [sandwiche, juice], 'dinheiro', 0.10);
const martaOrder = new Order(martaMathTeacher, [sandwiche, juice], 'cartão');
const joaoOrder = new Order(joaoHistoryTeacher, [sandwiche, juice, dessert], 'cartão');

console.log('Pedido da Carolina: ', carolinaOrder);
console.log('Pedido do Lucas: ', lucasOrder);
console.log('Pedido da Marta: ', martaOrder);
console.log('Pedido do João: ', joaoOrder);
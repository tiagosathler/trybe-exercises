enum weekDay {
  sunday = 0,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
};

enum rainbow {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul',
  indigo = 'anil',
  violet = 'violeta',
};

enum action {
  salvar,
  imprimir,
  abrir,
  visualizar,
  fechar,
};

enum cardinal {
  north = 'N',
  east = 'E',
  south = 'S',
  west = 'W',
};

let myCardinal: cardinal = cardinal.north;
let myAction: action = action.salvar;
let myColor: rainbow = rainbow['indigo'];
let myDay: weekDay = weekDay['sunday'];

console.log(myCardinal, myAction, myColor, myDay);
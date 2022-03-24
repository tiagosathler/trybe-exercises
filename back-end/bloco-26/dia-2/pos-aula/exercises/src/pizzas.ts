type Slices = 4 | 6 | 8;

type Common = "Calabrase" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelo";
type Sweet = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

export interface Pizza {
  flavor: string;
  slices: Slices;
}

export interface CommonPizzas extends Pizza {
  flavor: Common;
};

export interface VegetarianPizzas extends Pizza {
  flavor: Vegetarian;
};

export interface SweetPizzas extends Pizza {
  flavor: Sweet;
  slices: 4;
};

export const main = ():void => {
  const calabresa: Pizza = {
    flavor: 'Calabresa',
    slices: 8,
  };
  
  const margherita: Pizza = {
    flavor: 'Margherita',
    slices: 6,
  };

  const nutela: Pizza = {
    flavor: 'Nutela',
    slices: 4,
  };
  
  const common1: CommonPizzas = {
    flavor: 'Calabrase',
    slices: 4,
  };

  const common2: CommonPizzas = {
    flavor: 'Frango',
    slices: 6,
  };

  const common3: CommonPizzas = {
    flavor: 'Pepperoni',
    slices: 8,
  };

  const vegetarian1: VegetarianPizzas = {
    flavor: 'Marguerita',
    slices: 4,
  };

  const vegetarian2: VegetarianPizzas = {
    flavor: 'Palmito',
    slices: 6,
  };

  const vegetarian3: VegetarianPizzas = {
    flavor: 'Cogumelo',
    slices: 8,
  };

  const sweet1: SweetPizzas = {
    flavor: 'Nutela',
    slices: 4,
  };

  const sweet2: SweetPizzas = {
    flavor: 'Goiabada com Queijo',
    slices: 4,
  };

  const sweet3: SweetPizzas = {
    flavor: 'Marshmallow',
    slices: 4,
  };
  
  console.log(calabresa, margherita, nutela, common1, common2, common3, vegetarian1, vegetarian2, vegetarian3, sweet1, sweet2, sweet3);
};
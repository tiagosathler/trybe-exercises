export default class OrderItem {
  private _product: string;

  private _price: number;

  constructor(
    product: string,
    price: number,
  ) {
    this._product = product;
    this._price = price;
  }

  public get product(): string {
    return this._product;
  }

  public set product(product: string) {
    if (product.length < 3) { 
      throw new Error('Product must be at least 3 characters long');
    }
    this._product = product;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    if (price < 0) {
      throw new Error('Price must be positive');
    }
    this._price = price;
  }
}
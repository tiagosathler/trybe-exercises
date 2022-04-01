import OrderItem from './orderItem';
import Client from './client';

export default class Order {
  private _items: OrderItem[] = [];

  private _client: Client;

  private _paymentMethod: string;

  private _discount = 0;

  constructor(
    client: Client,
    items: OrderItem[],
    paymentMethod: string,
    discount = 0,
  ) {
    this.discountValidate(discount);
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
  }

  private discountValidate(discount: number): void {
    if ((discount < 0) || (discount > 1)) {
      throw new Error('Discount must be between 0 and 1');
    }
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }

  public set client(client: Client) {
    this._client = client;
  }

  public get items(): OrderItem[] {
    return this._items;
  }

  public set items(items: OrderItem[]) {
    if (this._items.length === 0) {
      throw new Error('Order must have at least one item');
    }
    this._items = items;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }

  public set paymentMethod(paymentMethod: string) {
    if (paymentMethod.length < 3) {
      throw new Error('Payment method must be at least 3 characters long');
    }
    this._paymentMethod = paymentMethod;
  }

  public get discount(): number {
    return this._discount;
  }

  public set discount(discount: number) {
    this.discountValidate(discount);
    this._discount = discount;
  }

  public addItem(item: OrderItem): void {
    this._items.push(item);
  }

  public removeItem(item: OrderItem): void {
    const { product } = item;
    const filtered = this._items.filter((i) => i.product.toLowerCase() !== product.toLowerCase());
    this._items = filtered;
  }

  public calculateOrder(): number {
    const total = this._items.reduce((acc, item) => acc + item.price, 0);
    if (this._discount > 0) {
      return total * (1 - this._discount);
    }
    return total;    
  }
}
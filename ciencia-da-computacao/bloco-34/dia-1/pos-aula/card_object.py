from src.card import Order, CreditCard

my_card = CreditCard("MasterCard", "0000 0000 0000 0000", "MAY", "26", "123")
my_order = Order([{"product": "Sandália", "amount": 1, "price": 10}], my_card)

print(my_order.items)
print(my_card.name, my_card.number, my_card.month, my_card.year)

def fueling(consumption: tuple):

    GAS_PRICE = 2.5
    ETH_PRICE = 1.9

    if consumption[1] == "G":
        total = GAS_PRICE * consumption[0]
        if consumption[0] <= 20:
            return total * 0.97
        else:
            return total * 0.95
    else:
        total = ETH_PRICE * consumption[0]
        if consumption[0] <= 20:
            return total * 0.96
        else:
            return total * 0.94


client = tuple(21, "G")
print(client)
# print(fueling(tuple(21, "G")))

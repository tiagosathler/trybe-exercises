def invert_print_name(name: str):
    name_in_list = list()

    for char in name:
        name_in_list.append(char)

    while len(name_in_list) > 0:
        print("".join(name_in_list))
        name_in_list.pop()


invert_print_name("PEDRO")

from src.classes.linked_list import LinkedList

# Para testar, apenas rode o arquivo com: `python3 linked_list_content.py` :)
if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())
    # saída: True

    linked_list.insert_first(1)
    print(
        linked_list
    )  # saída: LinkedList(len=1 node=Node(node=1 next=None))

    linked_list.insert_first(2)
    print(linked_list)
    # saída: LinkedList(len=2 node=Node(node=2 next=Node(node=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list)
    # saída:
    # LinkedList(len=3 node=Node(
    #   node=2 next=Node(node=1 next=Node(node=3 next=None))))

    linked_list.remove_last()
    print(linked_list)
    # saída:
    # LinkedList(len=2 node=Node(node=2 next=Node(node=1 next=None)))

    linked_list.remove_first()
    print(linked_list)
    # saída: LinkedList(len=1 node=Node(node=1 next=None))

    linked_list.insert_at(5, 1)
    print(linked_list)
    # saída: LinkedList(len=2 node=Node(node=1 next=Node(node=5 next=None)))

    linked_list.remove_at(0)
    print(linked_list)
    # saída: LinkedList(len=1 node=Node(node=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)

    print(linked_list)
    print(linked_list.get_element_at(4))
    # saída: Node(node=8 next=None)

    linked_list.clear()
    print(linked_list)

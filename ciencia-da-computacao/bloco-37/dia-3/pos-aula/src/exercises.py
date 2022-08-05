from src.classes.linked_list import LinkedList

# Para testar, apenas rode o arquivo com: `python3 linked_list_content.py` :)
if __name__ == "__main__":
    linked_list = LinkedList()

    print(f"1. {linked_list.is_empty()}")
    # saída:
    # 1. True

    linked_list.insert_first(1)
    print(f"2. {linked_list}")
    # saída:
    # 2. LinkedList(len=1 nodes=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(f"3. {linked_list}")
    # saída:
    # 3. LinkedList(len=2 nodes=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(f"4. {linked_list}")
    # saída:
    # LinkedList(len=3 nodes=Node(
    #   node=2 next=Node(node=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(f"5. {linked_list}")
    # saída:
    # 5. LinkedList(len=2 nodes=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(f"6. {linked_list}")
    # saída:
    # 6. LinkedList(len=1 nodes=Node(node=1 next=None))

    linked_list.insert_at(5, 1)
    print(f"7. {linked_list}")
    # saída:
    # 7. LinkedList(len=2 nodes=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(f"8. {linked_list}")
    # saída:
    # 8. LinkedList(len=1 nodes=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)

    print(f"9. {linked_list}")
    # saída:
    # 9. LinkedList(len=5, nodes=
    #       Node(value=5, next=
    #       Node(value=6, next=
    #       Node(value=7, next=
    #       Node(value=8, next=
    #       Node(value=9, next=None))))))

    print(f"10. {linked_list.get_element_at(4)}")
    # saída:
    # 10. Node(value=9 next=None)

    print(f"11. {linked_list.get_element_at(10)}")
    # saída:
    # 11. None

    print(f"12. {linked_list.index_of(9)}")
    # saída:
    # 12. 4

    print(f"13. {linked_list.index_of(100)}")
    # saída:
    # 13. -1

    linked_list.insert_last(8)
    linked_list.insert_last(9)
    print(f"14. {linked_list}")
    # saída:
    # 14. LinkedList(len=5, nodes=
    #       Node(value=5, next=
    #       Node(value=6, next=
    #       Node(value=7, next=
    #       Node(value=8, next=
    #       Node(value=9, next=
    #       Node(value=8, next=
    #       Node(value=9, next=None))))))))

    linked_list.delete_duplicates()
    print(f"15. {linked_list}")
    # saída:
    # 15. LinkedList(len=5, nodes=
    #       Node(value=5, next=
    #       Node(value=6, next=
    #       Node(value=7, next=
    #       Node(value=8, next=
    #       Node(value=9, next=None))))))

    linked_list.clear()
    print(f"16. {linked_list}")
    # saída:
    # 16. LinkedList(len=0, nodes=None)

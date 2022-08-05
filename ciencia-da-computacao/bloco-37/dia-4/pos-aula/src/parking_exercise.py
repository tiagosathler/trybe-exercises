from src.classes.stack import Stack


def add_vehicle() -> None:
    plate_number = input("plate number: ")
    garage.push(plate_number)
    print("Vehicle " + plate_number + " parked")


def remove_vehicle() -> None:
    vehicle_plate = input("plate number: ")
    street = Stack()
    removed = False
    while not garage.is_empty():
        parked_plate = garage.pop()
        if parked_plate == vehicle_plate:
            print("Vehicle " + vehicle_plate + " removed")
            removed = True
        else:
            street.push(parked_plate)

    while not street.is_empty():
        street_vehicle = street.pop()
        garage.push(street_vehicle)

    if not removed:
        print("There is no vehicle parked with this plate")


def list_vehicles() -> None:
    print("Parked vehicles: " + str(garage))


if __name__ == "__main__":
    """
    Complexidade: O(n) por causa do loop - pop = O(1) e push = O(1)
    """
    garage = Stack()

    option = None

    options = {
        "1": add_vehicle,
        "2": remove_vehicle,
        "3": list_vehicles,
    }

    while option != "4":
        print("Operations: ")
        print("1. Add vehicle")
        print("2. Remove a vehicle")
        print("3. Parked vehicles")
        print("4. Close the program")
        option = input("Option: ")

        if option not in "1234":
            print("Invalid option. Please enter a valid option.")

        elif option == "4":
            print("Finishing The garage Plus 2000!")

        else:
            options[option]()
            print("------------")

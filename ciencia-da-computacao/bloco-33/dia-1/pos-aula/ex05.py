def calculate_mount_of_ink(area: float):
    """Calculate how many cans of paints are needed and the total price"""
    if area <= 0:
        return None

    INK_COVER = 3   # m² / l

    INK_PRICE = 80   # R$

    INK_VOLUME = 18   # l

    volume = area / INK_COVER

    paint_cans = volume // INK_VOLUME

    if volume % INK_VOLUME > 0:
        paint_cans += 1

    total_price = paint_cans * INK_PRICE

    return (paint_cans, total_price)


print(calculate_mount_of_ink(5))
print(calculate_mount_of_ink(55))
print(calculate_mount_of_ink(2))
print(calculate_mount_of_ink(230))

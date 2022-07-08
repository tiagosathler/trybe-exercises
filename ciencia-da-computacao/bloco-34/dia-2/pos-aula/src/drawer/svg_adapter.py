from src.drawer.png_interface import PngInterface


class SvgAdapter(PngInterface):
    def __init__(self, svg):
        self.svg = svg

    def draw(self):
        print(f"Drawing {self.svg.get_image()}")

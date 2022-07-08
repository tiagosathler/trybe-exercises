from src.drawer.png_interface import PngInterface


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.path} with {self.format}")

class SvgImage:
    def __init__(self, svg_path):
        self.path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.path} with {self.format}"

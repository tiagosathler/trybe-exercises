from src.drawer.png_image import PngImage
from src.drawer.svg_image import SvgImage
from src.drawer.svg_adapter import SvgAdapter

png_image = PngImage("src/png_image.png")
svg_image = SvgImage("src/svg_image.png")
svg_adapter = SvgAdapter(svg_image)


png_image.draw()
svg_adapter.draw()

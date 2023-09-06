from PIL import Image

def crop_image_into_half(image):
    try:
        # Open the input image
        # image = Image.open(input_image_path)

        # Get the width and height of the image
        width, height = image.size

        # Calculate the midpoint to split the image
        midpoint = width // 2

        # Crop the image into two halves
        left_half = image.crop((0, 0, midpoint, height))

        
        print("Image cropped into halves successfully.")
        return left_half
    except Exception as e:
        print(f"Error: {e}")



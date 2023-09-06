# An object of Flask class is our WSGI application.
from flask import Flask
from PIL import Image
 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
 
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
# def crop_image_into_half(image):
#     try:
#         # Open the input image
#         # image = Image.open(input_image_path)

#         # Get the width and height of the image
#         width, height = image.size

#         # Calculate the midpoint to split the image
#         midpoint = width // 2

#         # Crop the image into two halves
#         left_half = image.crop((0, 0, midpoint, height))

        
#         print("Image cropped into halves successfully.")
#         return left_half
#     except Exception as e:
#         print(f"Error: {e}")

        
def hello_world():
    return 'Hello World'
 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
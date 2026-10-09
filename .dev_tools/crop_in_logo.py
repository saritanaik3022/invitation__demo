import cv2

footer = cv2.imread('src/assets/footer_crop.png')
# The purple logo in the crop:
# Let's crop it: around y: 80 to 135, x: 320 to 375
logo = footer[78:134, 320:375]
cv2.imwrite('src/assets/in_logo.png', logo)
print("Saved in_logo.png, shape:", logo.shape)

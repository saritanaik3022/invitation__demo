import cv2

# Bride photo crop:
img11 = cv2.imread('frame_11.png')

# Let's inspect the bounding box of the bride photo:
# In frame 11:
# The photo top-left is around y: 415, x: 377
# The photo bottom-right is around y: 686, x: 564
bride_photo = img11[414:687, 377:565]
cv2.imwrite('src/assets/ananya_portrait.png', bride_photo)
print(f"Ananya portrait size: {bride_photo.shape}")

# Groom photo crop:
img13 = cv2.imread('frame_13.png')
# In frame 13:
# Groom photo top-left is around y: 556, x: 1330
# Groom photo bottom-right is around y: 828, x: 1517
groom_photo = img13[555:828, 1330:1518]
cv2.imwrite('src/assets/aarav_portrait.png', groom_photo)
print(f"Aarav portrait size: {groom_photo.shape}")

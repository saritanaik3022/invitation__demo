import cv2

img13 = cv2.imread('frame_13.png')
groom_clean = img13[640:827, 1331:1516]
cv2.imwrite('src/assets/aarav_portrait.png', groom_clean)
print("Updated Aarav portrait, size:", groom_clean.shape)

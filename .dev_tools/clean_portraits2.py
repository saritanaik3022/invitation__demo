import cv2

img11 = cv2.imread('frame_11.png')
# Clean inner photo (no frame lines at top):
# 432 is safely inside the photo
bride_clean = img11[432:685, 378:563]
cv2.imwrite('src/assets/ananya_portrait.png', bride_clean)

img13 = cv2.imread('frame_13.png')
# 598 is safely inside the photo
groom_clean = img13[598:827, 1331:1516]
cv2.imwrite('src/assets/aarav_portrait.png', groom_clean)

print("Saved pixel-perfect clean portraits")

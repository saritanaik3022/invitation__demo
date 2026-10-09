import cv2

img11 = cv2.imread('frame_11.png')
# Clean inner photo:
bride_clean = img11[426:686, 378:563]
cv2.imwrite('src/assets/ananya_portrait.png', bride_clean)

img13 = cv2.imread('frame_13.png')
# Let's inspect Aarav's portrait
groom_clean = img13[567:827, 1331:1516]
cv2.imwrite('src/assets/aarav_portrait.png', groom_clean)

print("Saved clean portraits")

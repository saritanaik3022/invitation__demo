import cv2

# In frame 11:
# The bride photo is located on the left side of the profile section.
img11 = cv2.imread('frame_11.png')
# Let's crop around the bride photo in frame 11:
# The screen is 1892 wide, 942 high.
# In frame 11, the bride photo is approximately x: 350 to 650, y: 350 to 800.
# Let's find the inner photo rectangle inside the gold frames:
# We can crop a generous region first and save it, and also save the exact crop:

crop_bride = img11[360:720, 360:580]
cv2.imwrite('src/assets/bride_crop_raw.png', crop_bride)

img13 = cv2.imread('frame_13.png')
# In frame 13, Aarav's photo is on the right side:
# approximately x: 1300 to 1550, y: 500 to 880
crop_groom = img13[500:860, 1330:1550]
cv2.imwrite('src/assets/groom_crop_raw.png', crop_groom)

print("Saved raw crops")

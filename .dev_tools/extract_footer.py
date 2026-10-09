import cv2

video_path = 'reference_recording.mp4'
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Frame 40s (around 40.5s):
frame_no = int(40.5 * fps)
cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
ret, frame = cap.read()
if ret:
    # Save the footer region
    # Frame size is 1892x942
    footer_crop = frame[600:942, 600:1300]
    cv2.imwrite('src/assets/footer_crop.png', footer_crop)
    cv2.imwrite('frame_footer.png', frame)
    print("Saved footer frame and crop")
cap.release()

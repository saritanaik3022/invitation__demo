import cv2
import os

video_path = 'reference_recording.mp4'
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

print(f"Video FPS: {fps}, Resolution: {width}x{height}, Frames: {total_frames}")

def save_frame(time_sec, out_path):
    frame_no = int(time_sec * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(out_path, frame)
        print(f"Saved {out_path} at {time_sec}s")
        return frame
    else:
        print(f"Failed to read frame at {time_sec}s")
        return None

f11 = save_frame(11.0, 'frame_11.png')
f13 = save_frame(13.0, 'frame_13.png')

cap.release()

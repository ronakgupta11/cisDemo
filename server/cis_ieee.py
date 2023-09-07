
# from google.colab import drive
# drive.mount('/content/drive')

"""# Installing and Importing libraries"""

# !pip install ultralytics==8.0.114

# !pip install opencv-python==4.7.0.72
# !pip install supervision==0.1.0

# !pip install easyocr

from IPython import display
display.clear_output()

import ultralytics
ultralytics.checks()

from IPython import display
display.clear_output()


import supervision
print("supervision.__version__:", supervision.__version__)

from supervision.draw.color import ColorPalette
from supervision.geometry.dataclasses import Point
from supervision.video.dataclasses import VideoInfo
from supervision.video.source import get_video_frames_generator
from supervision.video.sink import VideoSink
from supervision.notebook.utils import show_frame_in_notebook
from supervision.tools.detections import Detections, BoxAnnotator
from supervision.tools.line_counter import LineCounter, LineCounterAnnotator

import os
HOME = os.getcwd()
print(HOME)

# Commented out IPython magic to ensure Python compatibility.
# %cd {HOME}
# !git clone https://github.com/ifzhang/ByteTrack.git
# # %cd {HOME}/ByteTrack

# # workaround related to https://github.com/roboflow/notebooks/issues/80
# !sed -i 's/onnx==1.8.1/onnx==1.9.0/g' requirements.txt

# !pip3 install -q -r requirements.txt
# !python3 setup.py -q develop
# !pip install -q cython_bbox
# !pip install -q onemetric
# # workaround related to https://github.com/roboflow/notebooks/issues/112 and https://github.com/roboflow/notebooks/issues/106
# !pip install -q loguru lap thop

from IPython import display
display.clear_output()


import sys
sys.path.append(f"{HOME}/ByteTrack")


import yolox
print("yolox.__version__:", yolox.__version__)

from yolox.tracker.byte_tracker import BYTETracker, STrack
from onemetric.cv.utils.iou import box_iou_batch
from dataclasses import dataclass


@dataclass(frozen=True)
class BYTETrackerArgs:
    track_thresh: float = 0.25
    track_buffer: int = 30
    match_thresh: float = 0.8
    aspect_ratio_thresh: float = 3.0
    min_box_area: float = 1.0
    mot20: bool = False

from typing import List

import numpy as np


# converts Detections into format that can be consumed by match_detections_with_tracks function
def detections2boxes(detections: Detections) -> np.ndarray:
    return np.hstack((
        detections.xyxy,
        detections.confidence[:, np.newaxis]
    ))


# converts List[STrack] into format that can be consumed by match_detections_with_tracks function
def tracks2boxes(tracks: List[STrack]) -> np.ndarray:
    return np.array([
        track.tlbr
        for track
        in tracks
    ], dtype=float)


# matches our bounding boxes with predictions
def match_detections_with_tracks(
    detections: Detections,
    tracks: List[STrack]
) -> Detections:
    if not np.any(detections.xyxy) or len(tracks) == 0:
        return np.empty((0,))

    tracks_boxes = tracks2boxes(tracks=tracks)
    iou = box_iou_batch(tracks_boxes, detections.xyxy)
    track2detection = np.argmax(iou, axis=1)

    tracker_ids = [None] * len(detections)

    for tracker_index, detection_index in enumerate(track2detection):
        if iou[tracker_index, detection_index] != 0:
            tracker_ids[detection_index] = tracks[tracker_index].track_id

    return tracker_ids

"""## Importing Models and Paths"""

from ultralytics import YOLO
license_plate_detector = YOLO('/content/drive/MyDrive/CIS_IEEE/best.pt' )
coco_model = YOLO('yolov8n.pt')

SOURCE_VIDEO_PATH="/content/drive/MyDrive/CIS_IEEE/IMG_1198.MOV"
TARGET_VIDEO_PATH = "/content/drive/MyDrive/CIS_IEEE/Traffic.mp4"
FINAL_VIDEO_PATH = "/content/drive/MyDrive/CIS_IEEE/Final.mp4"



"""# Infrence"""

# dict maping class_id to class_name
CLASS_NAMES_DICT = coco_model.model.names
# class_ids of interest - car, motorcycle, bus and truck
CLASS_ID = [2, 3, 5, 7]

print(type(detections.xyxy))

print(ans)

LINE_START = Point(20, 500)
LINE_END = Point(1280-20, 500)

VideoInfo.from_video_path(SOURCE_VIDEO_PATH)

import easyocr
reader=easyocr.Reader(['en'])

def crop_image(image: np.ndarray, xyxy: np.ndarray) -> np.ndarray:
    """
    Crops the given image based on the given bounding box.

    Args:
        image (np.ndarray): The image to be cropped, represented as a numpy array.
        xyxy (np.ndarray): A numpy array containing the bounding box coordinates
            in the format (x1, y1, x2, y2).

    Returns:
        (np.ndarray): The cropped image as a numpy array.

    Examples:
        ```python
        >>> import supervision as sv

        >>> detection = sv.Detections(...)
        >>> with sv.ImageSink(target_dir_path='target/directory/path') as sink:
        ...     for xyxy in detection.xyxy:
        ...         cropped_image = sv.crop_image(image=image, xyxy=xyxy)
        ...         sink.save_image(image=image)
        ```
    """

    xyxy = np.round(xyxy).astype(int)
    x1, y1, x2, y2 = xyxy
    cropped_img = image[y1:y2, x1:x2]
    return cropped_img

# Commented out IPython magic to ensure Python compatibility.

generator = get_video_frames_generator(SOURCE_VIDEO_PATH)
# create instance of BoxAnnotator
box_annotator = BoxAnnotator(color=ColorPalette(), thickness=4, text_thickness=4, text_scale=2)
# acquire first video frame
iterator = iter(generator)
frame = next(iterator)
# model prediction on single frame and conversion to supervision Detections
results = coco_model(frame)
detections = Detections(
    xyxy=results[0].boxes.xyxy.cpu().numpy(),
    confidence=results[0].boxes.conf.cpu().numpy(),
    class_id=results[0].boxes.cls.cpu().numpy().astype(int)
)
for xyxy in detections.xyxy:
  cropped_frame = crop_image(image=frame, xyxy=xyxy)
  results2=license_plate_detector(cropped_frame)
  detections2 = Detections(
  xyxy=results2[0].boxes.xyxy.cpu().numpy(),
  confidence=results2[0].boxes.conf.cpu().numpy(),
  class_id=results2[0].boxes.cls.cpu().numpy().astype(int)
        )
  for xyxy2 in detections2.xyxy:
    cropped_frame2 = crop_image(image=cropped_frame, xyxy=xyxy2)
    show_frame_in_notebook(cropped_frame2, (16, 16))
  show_frame_in_notebook(cropped_frame, (16, 16))





# format custom labels
labels = [
    f"{CLASS_NAMES_DICT[class_id]} {confidence:0.2f}"
    for _, confidence, class_id, tracker_id
    in detections
]
# annotate and display frame
frame = box_annotator.annotate(frame=frame, detections=detections, labels=labels)


# %matplotlib inline
show_frame_in_notebook(frame, (16, 16))

for detection in detections.xyxy:
  print(detection)

from tqdm.notebook import tqdm
from google.colab.patches import cv2_imshow
import cv2



byte_tracker = BYTETracker(BYTETrackerArgs())

video_info = VideoInfo.from_video_path(SOURCE_VIDEO_PATH)

generator = get_video_frames_generator(SOURCE_VIDEO_PATH)

line_counter = LineCounter(start=LINE_START, end=LINE_END)

box_annotator = BoxAnnotator(color=ColorPalette(), thickness=4, text_thickness=4, text_scale=2)
line_annotator = LineCounterAnnotator(thickness=4, text_thickness=4, text_scale=2)
arr=[]

with VideoSink(TARGET_VIDEO_PATH, video_info) as sink:

    for frame in tqdm(generator, total=video_info.total_frames):


        results = coco_model(frame)
        detections = Detections(
            xyxy=results[0].boxes.xyxy.cpu().numpy(),
            confidence=results[0].boxes.conf.cpu().numpy(),
            class_id=results[0].boxes.cls.cpu().numpy().astype(int)
        )

        mask = np.array([class_id in CLASS_ID for class_id in detections.class_id], dtype=bool)
        detections.filter(mask=mask, inplace=True)

        tracks = byte_tracker.update(
            output_results=detections2boxes(detections=detections),
            img_info=frame.shape,
            img_size=frame.shape
        )
        tracker_id = match_detections_with_tracks(detections=detections, tracks=tracks)

        detections.tracker_id = np.array(tracker_id)
        # filtering out detections without trackers
        mask = np.array([tracker_id is not None for tracker_id in detections.tracker_id], dtype=bool)
        detections.filter(mask=mask, inplace=True)

        for xyxy in detections.xyxy:
          cropped_frame = crop_image(image=frame, xyxy=xyxy)
          results2=license_plate_detector(cropped_frame)
          detections2 = Detections(
          xyxy=results2[0].boxes.xyxy.cpu().numpy(),
          confidence=results2[0].boxes.conf.cpu().numpy(),
          class_id=results2[0].boxes.cls.cpu().numpy().astype(int)
        )
          for xyxy2 in detections2.xyxy:
            cropped_frame2 = crop_image(image=cropped_frame, xyxy=xyxy2)
            res=reader.readtext(cropped_frame2)
            show_frame_in_notebook(cropped_frame2, (16, 16))

            if res not in arr:
              arr.append(res)
          # show_frame_in_notebook(cropped_frame, (16, 16))


###

        # format custom labels
        labels = [
            f"#{tracker_id} {CLASS_NAMES_DICT[class_id]} {confidence:0.2f}"
            for _, confidence, class_id, tracker_id
            in detections
        ]


        line_counter.update(detections=detections)

        frame = box_annotator.annotate(frame=frame, detections=detections, labels=labels)
        line_annotator.annotate(frame=frame, line_counter=line_counter)

        sink.write_frame(frame)

arr

for xyxy in detections:
  print(xyxy)
---
title: Scene recording
description: How the scene recording is setup and what are the outputs
sidebar:
    order: 2
---

## Recording and logging

All the settings for the 

Recording generally stands for capturing the data associated with the camera travelling along the predetermined track. You can either record video or record screenshots at particular intervals. 

### Scene Analysis

The scene analysis is a component attached to the Recorder and it is responsible for scanning the scene and reporting all the information about the objects of interest placed there. Please see the detailed output in the [XXXx](XXX) section.

![Untitled](../../../assets/img/Untitled_31.png)

You can set the scene Analysis parameters in the FPS recorder to better suite you need. 

- Scan Distance: To what distance should be the objects considered
- Default Precision: This determines how many scanning raycasts are thrown from the camera

Debug parameters

- Draw Hits
- Draw debug
- Debug line thickness
- Print Hists


### Recording video

The video recording is a bit more involved. As the real time rendering might not be possible, the video data is generally split into two processes

- Video rendering
- Smooth movement data extraction

The FSPRecorder object is responsible only for the data loggign and extraction, not for the video 

### Recording screenshots

Recording screenshots is a straightforward process, but you might need to change a few settings first.

You can simply start a level in the editor and then press E to get to the menu. You then

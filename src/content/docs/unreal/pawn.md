---
title: Pawn and camera
sidebar:
    order: 4
---

You only need to edit the pawn if you want to set the camera track or change the camera. The camera track is described in the [camera track section](/unreal/camera-tracks/), so this section is only dedicated to the camera.

## Camera settings

The pawn uses cinematic camera component, which is set in the BP_FSP_Pawn blueprint. You can change the camera settings in the details panel of the camera component. It is a regular component and it will affect the screenshots and vide taken by the FSPRecorder. 

![Alt text](../../../assets/img/image-2.png)

It is especially important to select proper FOV and focus point, as the plugin does not automatically refocus . I recommend setting the F stop to 11 and the focus distance to 1000, but you can experiment with the settings to get the best results close to the quality of photography usually used in your research.
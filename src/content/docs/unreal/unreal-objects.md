---
title: Plugin objects
sidebar:
    order: 10
---

### GM_FSP (Game mode)

Game mode sets the classes of objects it searches for during the level setup. You generally do not need to change anything if you dont need any specific changes made to the logging or player movement, data recording,

This blueprint class inherits from the C++ FSPGameMode class, which defines the parameters to be set in the blueprint, but you generally want to use the GM_FSP

![Untitled](../../../assets/img/Untitled_10.png)

### BP_FSPPawn

The pawn blueprint allows riding on a track, projecting UI. Although it is created in runtime by the GameMode in case no Pawn is present in the level, you need to put it into the level. 

Then, in the FSP Track Component, you select the track you need To be followed

![Untitled](../../../assets/img/Untitled_11.png)

If everything goes well,  you should be able to press play and run around the spline with the top 

![Untitled](../../../assets/img/Untitled_12.png)

Default pawn class inheriting from the c++ FSPPawn class

To set the duration of the automated travel, you can change the FSP Track duration on the Track Rider component. It is in seconds. You can click “Go” to simulate the speed 

![Untitled](../../../assets/img/Untitled_13.png)

### BP_FSP_CameraTrack

![Untitled](../../../assets/img/Untitled_14.png)

![Untitled](../../../assets/img/Untitled_15.png)

### FSPRecorder

Fsp recorder is responsible for recording the screenshots and video and providing analysis

![Untitled](../../../assets/img/Untitled_16.png)
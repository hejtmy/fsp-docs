---
title: Data output description
sidebar:
    order: 1
---

The recorder outputs four files with each recording. The files are stored in the `logs` folder in the project root. The files are:
- screen-position log
- scene-analysis log
- position log
- object positions

## Screen position log

This log records in each screenshot or each loggging frequency position of all objects in the render screen. It is possible that the object is not visible in this recording, the information needs to be corroborated with scene analysis log. 

- *time*: Time of recording
- *iAnalysis*: screenshot number or frame number in video
- *object*: Object name as defined in the FSPObject component
- screen_x, screen_y: position on the screen normalized to [0,1] coordinates

```
time;iAnalysis;object;screen_x;screen_y
53641.4492;0;Cabinet_Hallway;0.7332;0.8378
53641.4492;0;Fridge_Kitchen;0.3474;0.5931
53641.4492;0;Drawers_PianoRoom;0.3053;0.6293
53641.4492;0;Drawers_Hallway;0.4293;0.6689
53641.4492;0;Rug_LivingRoom;0.9666;0.6988
53641.4492;0;Curtain_Kitchen;0.5740;0.4554
```

## Scene analysis log

Scene analysis presents data as analyzed by the SceneAnalyzer actor. It returns number of hits the raycasting solution collected on any given object. 

- *time*: Time of recording
- *iAnalysis*: screenshot number or frame number in video
- *object*: Object name as defined in the FSPObject component
- *nHits*: Number of raycasting hits that landed on the object. For details, please see [recording section](/unreal/recording/).

```
time;iAnalysis;object;nHits
53641.4492;0;nothing;1090
53643.6133;1;nothing;1090
53645.6641;2;nothing;1090
53647.7148;3;nothing;1090
53649.7500;4;nothing;921
53649.7500;4;Drawers_Hallway;5
53649.7500;4;Lamp_Hallway;3
53649.7500;4;Painting_LivingRoom;4
53649.7500;4;Cabinet_Hallway;119
53649.7500;4;Mirror_Hallway;38
```

## Position log

The position log allows researchers in corroboration with the object log to dermine distance to individual objects within the environement or determine specific visual engle.

- *time*: Time of recording
- *iAnalysis*: screenshot number or frame number in video
- *position*: position of the camera in the (x;y;z) Unreal coordinates. Determines position of the camera on the spline

```
time;iAnalysis;position
53641.4375;0;(-397.8549,981.9936,238.3423)
53643.6094;1;(-396.0476,944.1797,238.3423)
53645.6562;2;(-394.8348,906.2006,238.3423)
53647.7070;3;(-394.4400,868.0286,238.3423)
53649.7422;4;(-395.0952,829.8076,238.3423)
53651.4844;5;(-397.0592,791.7571,238.3423)
53653.5039;6;(-400.6785,753.7963,238.3423)
```

## Object positions

This log is only saved when the recording starts. It outputs the positions of the objects in the Unreal space

- *object*: Object name as defined in the FSPObject component
- *position*: position of the object in the (x;y;z) Unreal coordinates.

```
object;position
Cabinet_Hallway;(-207.2653,555.8868,78.0863)
Fridge_Kitchen;(-695.0253,-720.3743,78.0855)
Drawers_PianoRoom;(-690.5968,-238.0364,78.0861)
Drawers_Hallway;(-446.2837,66.8741,78.0863)
Rug_LivingRoom;(209.2747,247.4559,78.0691)
Curtain_Kitchen;(-77.8007,-884.6749,323.9108)
Curtain_LivingRoom;(583.5696,293.0364,336.4871)
```
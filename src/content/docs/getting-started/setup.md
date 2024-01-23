---
title: Package installation
sidebar:
    order: 1
    label: Installation and requirements
---

## Requirements

The FSP currently runs in Unreal 4.27. The 5.2+ support is planned, but due to code changes in widgets and editor plugins might take some time.

## Installation

**Download**: Obtain the Fake Scene Presenter package from the [github page](https://github.com/hejtmy/FSP_Unreal). You can either donwload the zip, or make it a submodule inside your unreal project.

**Unreal Engine Integration**: Follow standard procedures for integrating plugins into your Unreal Engine project [How to work with plugins](https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/Plugins/). We recommend implementing it to a project, rather than as a global package. Remember to restart UE if you import the package with a project running.  You should see that the package is installed in plugins.

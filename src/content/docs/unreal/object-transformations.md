---
title: Object setup and transformations
sidebar:
    order: 1
---
## Objects

To each object to be tracked you need to attach FSPObject Component

![Untitled](../../../assets/img/Untitled_19.png)

Within the components you need to change the `Object Name`and potentially the transformation group, but we’ll cover that later. Object name determines how the object will look in the automated logs, so make sure you use a unique one.

![Untitled](../../../assets/img/Untitled_20.png)

![Untitled](../../../assets/img/Untitled_21.png)

That the object is attached should be visible in the Editor FSP mode

![Untitled](../../../assets/img/Untitled_22.png)

And the objects are automatically attached to the FSP Manager

![Untitled](../../../assets/img/Untitled_23.png)


## Transformations

If you want certain changes to happen to objects automatically, you can use transformations. Simply add a transformation component to your FSP object. Currently three different transformations are available (visibility, material and transform). You can apply multiple transformations at the same time.

Details about how to set each one will be covered in each separate section. You can see how the transformation looks by clicking the Apply Transformations button on the FSPObject.

![Untitled](../../../assets/img/Untitled_24.png)

Transformations are controlled by the FSP Editor Mode . You can

- Reset all objects - returns all object states to the original
- Transform all objects in a group-  applies transformations to all objects in the group given by the (see below)

![Untitled](../../../assets/img/Untitled_25.png)

### Transformation groups

In most experiments, you want each screenshot to feature only a single change. But there might be several objects transforming in each location. For this reason, you have the opportunity to separate the individual transformations into groups.

## Applying transformations

![Untitled](../../../assets/img/Untitled_26.png)

### Material transformation

Material transformation takes original and a new material as parameters to be set.

![Untitled](../../../assets/img/Untitled_27.png)

### Transform Transformation

Transform takes 

![Untitled](../../../assets/img/Untitled_28.png)

### Visibility transformation

This has only a single parameter to set 

![Untitled](../../../assets/img/Untitled_29.png)

## Applying transformation

You can apply all transformations on a particular set of objects in the fsp ediotr mode by selecting the group of transformation you want and then click on transform all objects

![Untitled](../../../assets/img/Untitled_30.png)
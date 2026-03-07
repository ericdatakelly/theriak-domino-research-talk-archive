---
layout: topic
title: "Tip for P-T paths from loop/drive files"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2016-05-13
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=23"
---

## EricKelly
*2016-05-13 15:23 UTC*

I discovered this recently and thought I'd share...

If you just want to run theriak along a non-linear path in P-T space, you can make a loop file that includes many PT points rather than specifying start and end points and a number of steps between those points.  The default step size is 1 unless you specify otherwise.  Here are some examples of loop files that run in TD:

File 1
As described in the guide, this has a staring point, an ending point, and 5 steps from start to end.

```
REMOVE  GARNET  100
TP  555  5390
TP  556  5395  5
```

File 2
Or you can add points and specify steps between those points.

```
REMOVE  GARNET  100
TP  555  5390
TP  556  5395  5
TP  557  5400  5
TP  558  5405  5
TP  559  5410  5
```

File 3
Or just put a series of PT points in without steps between

```
REMOVE  GARNET  100
TP  555  5390
TP  556  5395
TP  557  5400
TP  558  5405
TP  559  5410
```

---

## opxcpx
*2016-06-07 15:43 UTC*

Super useful, thanks!

Chris

---

## FabrizioS
*2022-03-23 10:50 UTC*

And if I wanted to remove certain phases from a '.' calculation type in domino, should I edit the THERIN file or the database ?

---

## ZhiqiangZhou
*2025-07-25 13:38 UTC*

> **FabrizioS wrote:**
> And if I wanted to remove certain phases from a '.' calculation type in domino, should I edit the THERIN file or the database ?

If you mean you want to exclude one phase from '.' calculation, you can just find the phase in the database and disable it. If it's a solution phase, turn the 'MINERAL DATA', 'SOLUTION DATA', and 'MARGULES PARAMETER' into 'MuNERAL DATA', 'SuLUTION DATA', and 'MuRGULES PARAMETER', respectively (or just use '!' before lines of the end-member or even the whole phase). If it's a pure phase, simply type '!' before every lines of the phase.

Cheers,

Zhou

---

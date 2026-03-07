---
layout: topic
title: "Solution models for pumpellyite and stilpnomelane"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2024-04-16
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=100"
---

## Jinxue Du
*2024-04-16 08:03 UTC*

Hello, all
I am now working on a low-T pseudosection using database of TS55s Holland and Powell (1998). Massonne and Willner (2008) reported thermodynamic data and solution models for pumpellyite and stilpnomelane as the attached images. I tried to transform them to the TS55s format which can be used in Theriak-domino 2019 as below. however, I am not sure if they are OK or not. Would someone help me to have a check of the codes?

![1713254103515.png]({{ '/assets/attachments/57_1713254103515.png' | relative_url }})

![1713253968200.png]({{ '/assets/attachments/58_1713253968200.png' | relative_url }})

Thanks very much for your reading.

```
**** MINERAL DATA *****    from Massonne and Willner (2008)
Fe-pump      SI(6)AL(5)FE(1)CA(4)O(28)H(7)    fpum          4nh
 ST            0.0  -14031116.500       654.0000        29.7200
 C1       1568.5        -10207.2    -26900000.    3560562000.     0.00000
 VHP     0.000050000         1615.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.00015
Fe2Fe3-pump     SI(6)AL(4)FE(2)CA(4)O(28)H(7)    ffpu          4nh
 ST            0.0  -13593958.438       687.0000        30.1000
 C1       1574.92     -10268.960    -24553960.    3154003000.    0.
 VHP     0.000050000         1615.0       0.0000      0.00        0.00000
 VH2    10.0000         4.0000     -0.00015
Fe-stilp      SI(67)AL(5)FE(48)K(5)O(252)H(120)      fstlp          4nh
 ST              0.0  -99906127.860      7364.0000       303.7000
 C1       15936.51   -124844.000   -181141800.000   28601030000.    0.00000
 VHP     0.000059600          490.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000073500
Mg-stilp     SI(67)AL(5)MG(48)K(5)O(252)H(120)    mstlp    4nh
 ST              0.0  -116866607.810    5911.0000       296.5000
 C1       15032.19   -104513.000   -248561600.000   33742430000.    0.00000
 VHP     0.000059600          490.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000073500
Mn-stilp    SI(67)AL(5)MN(48)K(5)O(252)H(120)    mnstl          4nh
 ST              0.0  -105940953.360    7642.0000       313.3000
 C1       12238.78   -96778.000    -181141800.000    28334130000.    0.00000
 VHP     0.000059600          490.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000073500
*****  SOLUTION DATA  *****
STILP     (IDEAL,SITE)48   M(1):mstlp,fstlp,mnstl
  Mg-stilp   mstlp
  Fe-stilp   fstlp
  Mn-stilp   mnstl
!end
!=================================================================================
*****  SOLUTION DATA  *****
Pump      (IDEAL,SITE)   M(1):Mg,Fe,F3
  pumpellyite     Mg
  Fe-pump   Fe
  Fe2Fe3-pump   F3
!End
```

---

---
layout: topic
title: "Solution model of Zr-bearing rutile"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2019-12-06
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=51"
---

## Jinxue Du
*2019-12-06 03:15 UTC*

Tomkins et al. (2007) reported a solution model for Zr-bearing rutile as below,

```
%– – – – – – – – – – – – –– – – – – – – – –
% rutile: TiO2 – ZrO2 solid solution
% z = prop of ZrO2 in rutile
ru 2
z(ru) 0.01 % starting for calcs
% proportions of end-members
p(ru) 1  1    1   1    -1   z
p(zrru) 1  1   0  1     1    z
 
% intercation energy
Sf
w 10 0 0
% ‘‘site fractions’’
2
xti 1 1 1 1 -1 z
xzr 1 1 0 1 1 z
% ideal mixing activities
ru 1 1 xti 1
zrru 1 1 xzr 1
make 1 bdy 1 % ZrO2 in rutile is: bdy
DQF 52.84  -0.01829  -0.074  % modified by this a +bT+cP
%– – – – – – – – – – – – –– – – – – – – – –
```

 
Would someone help me transform it to the format which can be used in Theriak-domino 2019?
Thanks very much for your reading.

Jinxue Du.

TOMKINS, H.S., R. POWELL and D.J. Ellis, The pressure dependence of the zirconium-in-rutile thermometer. Journal of Metamorphic Geology, 2007. 25(6): p. 703-713.

---

## YiBing Li
*2019-12-20 08:52 UTC*

Hi, 
The following is solution model of Zr -bearing rutile model I code by the info you provided, it works well in my Theriak-Domino 2018 version. Please let me know if you find some errors in the code.

```
!=========================================================================================
!========================================================================== AX MODEL ZrRu
! ref -3
! Auto-converted from Tomkins et al. (2007),Solution model of Zr-bearing rutile.
! note: coded by Blakelee. Fri 20 Dec 2019 15:30:43 
!
!. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
!  Required dataset phase components for COM's: {}
**** MINERAL DATA ****
ru                    TI(1)O(2)                                ru           code
 ST              0.0      -944360.0           50.5          1.882
 C3             90.4         0.0029            0.0         -623.8           0.00
 V11       0.0000224         2220.0           4.24        -0.0019           0.00
zrru                   ZR(1)O(2)                               zrru          code
 ST              0.0     -52840.0           -18.29          -0.074
 COM      bdy+[1]
!. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
!. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
**** SOLUTION DATA ****
ZrRu    (-SITE,MARGULES)      M(1):Ti,Zr
  ru              Ti
  zrru            Zr
**** MARGULES PARAMETERS ****
ru - zrru
12          10000.0        0        0
!END AX MODEL ZrRu
!-----------------------------------------------------------------------------------------
```

cheers,
Blakelee,PHD student

---

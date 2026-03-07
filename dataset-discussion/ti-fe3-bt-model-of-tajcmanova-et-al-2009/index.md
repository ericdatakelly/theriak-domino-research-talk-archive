---
layout: topic
title: "Ti-Fe3+ Bt Model of Tajcmanova et al. (2009)"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2016-02-19
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=22"
---

## EricKelly
*2016-02-19 19:43 UTC*

I would like to try the Tajcmanova et al. biotite model with the tc55c2d dataset (released 03.01.2012).  

Tajcmanova et al. (2009):
J. metamorphic Geol., 2009, 27, 153–165
<https://doi.org/10.1111/j.1525-1314.2009.00812.x>

Does anyone have this?

Thanks,
Eric

---

## pierre.lanari
*2016-02-20 05:29 UTC*

Hi Eric, 

Here is the solid solution model for biotite from Lucie. We checked this model with Rob Berman about two weeks ago and it works fine. 

Cheers,

Pierre   

```
!===============================================================================
!====================================== PHASE COMPONENTS FOR SOLUTION MODEL BIOTI
!=======================================model of Tajcmanova et al. 2009=======
!----------------------------checked vs Perplex coding Feb,2016 (SWOT 16)
**** MINERAL DATA ****
! ---- -------------------------------------------------------------------------
br                 MG(1)H(2)O(2)                               br            use
 ST              0.0    -924920.000        64.5000         2.4630
 C3        158.40000     -0.0040760     -1052300.0      -1171.300           0.00
 VHP     0.000130000          485.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000150000
! ---- -------------------------------------------------------------------------
phl                K(1)MG(3)AL(1)SI(3)H(2)O(12)               phl            use
 ST              0.0   -6219160.000       328.0000        14.9640
 C3        770.30000     -0.0369390     -2328900.0      -6531.600           0.00
 VHP     0.000057900          513.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000150000
! ---- -------------------------------------------------------------------------
ann                K(1)FE(3)AL(1)SI(3)H(2)O(12)               ann            use
 ST              0.0   -5151670.000       418.0000        15.4320
 C3        815.70000     -0.0348610        19800.0      -7466.700           0.00
 VHP     0.000057900          513.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000150000
! ------------------------------------------------------------------------------
east               K(1)AL(1)MG(2)AL(2)SI(2)H(2)O(12)              east            use
 ST              0.0   -6338170.000       318.0000        14.7380
 C3        785.50000     -0.0380310     -2130300.0      -6893.700           0.00
 VHP     0.000057900          513.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000150000
! ------------------------------------------------------------------------------
mnbi               K(1)MN(3)AL(1)SI(3)H(2)O(12)              mnbi            use
 ST              0.0   -5462840.000       433.0000        15.2640
 C3        809.90000     -0.0592130     -1514400.0      -6998.700           0.00
 VHP     0.000057900          513.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000150000
! ---- -------------------------------------------------------------------------
obi               K(1)MG(2)FE(1)AL(1)SI(3)O(12)H(2)    obi          use
 ST              0.0      -6800.000         0.0000         0.0000
COM    phl[2/3]ann[1/3]
!COM above with annite, not annite2 explicitly stated by Tajcmanova et al. 2009
! ---- -------------------------------------------------------------------------
tbi               K(1)MG(2)TI(1)AL(1)SI(3)O(12)    tbi          use
 ST              0.0      84000.000       11.5000         0.0000
COM    phl[1]br[-1]ru[1]
! ---- -------------------------------------------------------------------------
fbi               K(1)MG(2)FE(1)AL(2)SI(2)O(12)H(2)    fbi          use
 ST              0.0       6000.000         0.0000         0.0000
COM    east[1]cor[-0.5]hem[0.5]
!--------------------------------------------------------------------------------
!--------------------------------------------------------------------------------
**** SOLUTION DATA ****
BIOTI    (-SITE,MARGULES)    M1(1):Mg,Fe,Al,F3,Mn - M2(2):Mg,Fe,Ti,Mn - T1(2):Si,Al - v(2):OH,O
    phl              Mg - Mg,Mg - Al,Si - OH,OH
    ann              Fe - Fe,Fe - Al,Si - OH,OH
    obi              Fe - Mg,Mg - Al,Si - OH,OH
    east             Al - Mg,Mg - Al,Al - OH,OH
    tbi              Mg - Mg,Ti - Al,Si - O,O
    fbi              F3 - Mg,Mg - Al,Al - OH,OH
    mnbi             Mn - Mn,Mn - Al,Si - OH,OH
*** MARGULES PARAMETER ***
phl - ann
12    12000   0   0
phl - obi
12    4000   0   0
phl - east
12    10000   0   0
ann - obi
12    8000   0   0
ann - east
12    3000   0   0
obi - east
12    7000   0   0
!
!
```

---

## EricKelly
*2016-02-20 17:01 UTC*

Thanks, Pierre!

---

## EricKelly
*2016-05-13 14:59 UTC*

I originally tried the Tajcmanova et al (2009) model with the tc55c2d dataset and Doug Tinkham's tc55_p07 dataset, and had some success with the p07 dataset.  I'm returning to the problem and wondering what others have found.  Did you successfully apply this model to pelitic systems using TD, and what other solution models did you include to compliment it?

Thanks,
Eric

---

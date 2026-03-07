---
layout: topic
title: "dataset modifications"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2015-10-29
post_count: 5
original_url: "https://research-talk.org/viewtopic.php?t=13"
---

## sina
*2015-10-29 16:58 UTC*

What bothers me often and where I have absolutely no knowledge about is, how much can I alter the datasets without producing nonsense? That is, my main concern is, lets say in the Holland & Powell dataset, what if I e.g. don't trust the solution for Mn in biotite: am I allowed to exclude the Mn in biotite from the solution or would the result get inconsistent / wrong if I do so? My best guess is that if I alter anything concerning the solution model for a phase, it will result in utter nonsense (?) but sometimes I would like to exclude some of the solutions for (more exotic) things as e.g. Fe3+ or Mn in biotite etc.

---

## DougTinkham
*2015-10-30 16:52 UTC*

> What bothers me often and where I have absolutely no knowledge about is, how much can I alter the datasets without producing nonsense? That is, my main concern is, lets say in the Holland & Powell dataset, what if I e.g. don't trust the solution for Mn in biotite: am I allowed to exclude the Mn in biotite from the solution or would the result get inconsistent / wrong if I do so? My best guess is that if I alter anything concerning the solution model for a phase, it will result in utter nonsense (?) but sometimes I would like to exclude some of the solutions for (more exotic) things as e.g. Fe3+ or Mn in biotite etc.
 

Hi Sina, 

Whether or not you can simply exclude phase components from a model is dependent on how the a-x model is formulated and the chemical system you are working in. Where you can run in to problems are with the reciprocal style solution models because the models are formulated with a linearly independent set of phase components.

Take KFMASH biotite for example. The incorporation of octahedral Al is done using the eastonite phase component, and there is therefore no siderophyllite component in the model (it would be a linearly dependent member as it can be constructed from eastonite, annite, and phlogopite). If you wanted to do a calculation using biotite in the KFASH system, you would need to rewrite the entire model in terms of the components phl-ann-sdph because if you simply eliminate eastonite from the existing model, the model would not allow any octahedral Al because you would not have a phase component that incorporates octahedral Al.  

Extend that rationale to Mn-bearing systems, and you can easily determine if eliminating a Mn member is possible or not. For most phases, you can simply remove the Mn member and you will be fine, but always make sure first by looking at the substitution vectors and the phase components present.

Doug

---

## sina
*2015-11-03 13:15 UTC*

Dear Doug,

thank you for your answer, it is very helpful.

Best,

Sina

---

## jakub_haifler
*2021-01-11 21:28 UTC*

EDIT: I have fixed it. This is discussed in the next post. 

Hi everybody. 
I attempted to implement a thermodynamic model of a Ca-Mg-Fe carbonate (Franzolin et al., 2011) into Theriak-Domino to model solvi in the ternary composition space at variable P, T. I coded (I think I did) the solution model in a similar manner like the models added by D. Tinkham, such as e.g. augitic clinopyroxene after Green et al. (2016).  
Unfortunately, the calculations by means of THERTER (Ca-Mg-Fe space) or THERBIN (Ca-Mg subspace) gave disastrous results. The calculations run to completition, although warnings such as  or  appeared. However, the plotted tie-lines make absolutely no sense. 
THERBIN gave relatively meaningful result for a CaCO3-FeCO3 subsystem, although the position of the solvus was not exactly the same as in the publication of Franzolin et al. This imply that the trouble may be caused particularly by definition of the linearly dependent end-members. 
My calculation failed with mineral data taken from both, Holland and Powell (1998+) and Holland and Powell (2011) datasets. 
Furthermore, I tested the solution model of Ca-Mg carbonate after Holland and Powell (2003), which is coded in the dataset tcdb55… - it nicely reproduced the shape of the solvus in the X-T diagram from the paper.   
I would like to ask well experienced users of whether they could have a look at the coding to find the cause of the error. 
Or does somebody know whether it is possible to load the A-X model from the dataset and to output the Margules parameters, van Laar coefficients or site occupancies on screen to check whether they are correctly input? 
Thank you very much. Jakub Haifler
EDIT: THE CODE IS FIXED, endmember data are from tc5. See next post for tc6-based code.

```
25
     O         AL        BA        C         CA        CL        CO
     CU        F         FE        H         K         MN        MG
     NA        NI        P         S         SI        SR        TI
     ZN        ZR        B         E
  15.99940  26.98154 137.32700  12.01100  40.07800  35.45270  58.93320
  63.54600  18.99840  55.84700   1.00794  39.09830  54.93085  24.30500
  22.98977  58.69000  30.97362  32.06600  28.08550  87.62000  47.88000
  65.39000  91.22400  10.81000   1.00000
   0.0       1.5       1.0       2.0       1.0       0.0       1.0
   1.0       0.0       1.0       0.5       0.5       1.0       1.0
   0.5       1.0       1.0       0.0       2.0       1.0       2.0
   1.0       2.0       0.0       0.0
**** MINERAL DATA *****  Holland and Powell (1998+)
calcite              CA(1)O(3)C(1)    cc            1nh
 ST              0.0   -1207470.000        92.5000         3.6890
 C3        140.90000      0.0050290      -950700.0       -858.400           0.00
 VHP     0.000044000          760.0      1240.0000          10.00        0.04000
 VH2         10.0000         4.0000   -0.000114000
magnesite            MG(1)O(3)C(1)    mag           1nh
 ST              0.0   -1111360.000        65.1000         2.8030
 C3        186.40000     -0.0037720            0.0      -1886.200           0.00
 VHP     0.000064800         1460.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000219000
siderite             FE(1)O(3)C(1)    sid           1nh
 ST              0.0    -761440.000        95.0000         2.9380
 C3        168.40000      0.0000000            0.0      -1483.600           0.00
 VHP     0.000110000         1200.0         0.0000           0.00        0.00000
 VH2         10.0000         4.0000   -0.000180000
!==================================
! Calcite - magnesite - siderite - dolomite - ankerite (Franzolin et al., 2011), added by Jakub Haifler
!==================================
odol                  MG(0.5)CA(0.5)O(3)C(1)    dol2           1nh
 ST              0.0      -1000.000         0.0000         0.0000
 COM   calcite[0.5]magnesite[0.5]
oank                  MG(0.25)FE(0.25)CA(0.5)O(3)C(1)    oank           1nh
 ST              0.0      -750.000         0.0000         0.0000
 COM   calcite[0.5]magnesite[0.25]siderite[0.25]
***** SOLUTION DATA *****
CARB_EF    (SITE,MARGULES)1/4  M1(2):Ca,Mg,Fe - M2a(1):Ca,Mg,Fe - M2b(1):Ca,Mg,Fe
   calcite       Ca,Ca - Ca - Ca      0.25     0.000929     0          
   magnesite     Mg,Mg - Mg - Mg      1        0             0
   siderite      Fe,Fe - Fe - Fe      0.01     0.000666     0
   odol          Ca,Ca - Mg - Mg      0.95     0             0
   oank          Ca,Ca - Fe - Mg      0.929    0             0
!
*****  MARGULES PARAMETERS  *****
calcite - magnesite
12     28000    0.00    0.00
calcite - odol
12     11200    0.00    0.00
magnesite - odol
12     14000    0.00    0.00
calcite - siderite
12     20503    0.00    0.00
oank - siderite
12     73650    50.0    0.00
calcite - oank
12     12730    10.0    0.00
magnesite - siderite
12     10000    0.00    0.00
siderite - odol
12     51190    30.0    0.00
odol - oank
12     -5000    0.00    0.00
magnesite - oank
12     30000    0.00    0.00
```

THERIN input for calculating CaCO3-MgCO3 binary plot.

```
0   CA(10)C(10)O(30)MG(10)C(10)O(30)   *
```

The disastrous output: 

![carb_error.jpg]({{ '/assets/attachments/29_carb_error.jpg' | relative_url }})

---

## jakub_haifler
*2021-01-14 00:47 UTC*

Hi everyone. 
In my previous post, I asked for some help with coding of a solid solution model of Ca-Mg-Fe carbonate callibrated by Franzolin et al. (2011). Fortunately, I fixed the problem, so I share the code below. 
The difficulties I had occurred due to incorrect sign in van Laar parameters, namely αS. I think, it may be quite interesting to discuss this a little bit, as a temperature-related fraction of van Laar coefficient is quite uncommon in the dataset. 
Franzolin et al. (2011) in their Table 2 reported positive WS parameters for mixing of siderite and dolomite and two more pairs, which means that Margules parameter Wsid-odol decreases with increasing temperature, because W=WH-WS*T+WV*P. The equation for alpha’s is similar to the equation for W’s. Given that αH of Cc a Sid are much lower numbers compared to the other endmembers, I assume that the term –αS*T should be positive and grows with increasing temperature, which means negative αS. This agrees with the minus signs of the coefficients in the Table 2 of Franzolin et al. (2011).  However, in Theriak-Domino, the equation is as follows: 
α= α0 **+ αT** *T + αP *P (page 71 in the guide), so that the coefficients must be positive.
Franzolin et al. (2011) reported (page 223) that they used Holland’s and Powell’s dataset updated in 2002, which should correspond to tc5... in TD. I used THERBIN and THERTER together with tc5 to calculate binary and ternary diagrams (Figs. 6, 7, 8) in the paper by Franzolin et al. (2011). Fig. 6 shows perfect agreement, Fig. 7 relatively good agreement (miscibility gaps are somewhat larger close to the CaMg(CO3)2 – Ca(Mg0.5Fe0.5)(CO3)2 join (=linearly dependent endmembers) in my version. However, Fig. 8a is poorly reproduced using tc5 dataset. 
By contrast, the dataset tc6... gave quite nice agreement between the original and the reproduced diagrams. The diagrams are shown here, you may compare them with the original paper:

![franzolin.jpg]({{ '/assets/attachments/30_franzolin.jpg' | relative_url }})

Here I attach the code for the solid solution model. Thermodynamic data of endmembers are taken from the tc6 database:

```
26
     O         AL        BA        C         CA        CL        CO
     CU        F         FE        H         K         MN        MG
     NA        NI        P         S         SI        SR        TI
     ZN        ZR        B         CR        E
  15.99940  26.98154 137.32700  12.01100  40.07800  35.45270  58.93320
  63.54600  18.99840  55.84700   1.00794  39.09830  54.93085  24.30500
  22.98977  58.69000  30.97362  32.06600  28.08550  87.62000  47.88000
  65.39000  91.22400  10.81000  51.99610   1.00000
   0.0       1.5       1.0       2.0       1.0       0.0       1.0
   1.0       0.0       1.0       0.5       0.5       1.0       1.0
   0.5       1.0       1.0       0.0       2.0       1.0       2.0
   1.0       2.0       0.0       0.0
!
****  MINERAL DATA  *****    Holland and Powell (2011)
calcite              CA(1)O(3)C(1)    cc            1nh
 ST              0.0   -1207760.000        92.5000         3.6890
 C3        140.90000      0.0050290      -950700.0       -858.400           0.00
 V11     0.000025200         733.00         4.0600      -0.005500           1.00
 LA1         1240.00        10.0000        0.04000
magnesite            MG(1)O(3)C(1)    mag           1nh
 ST              0.0   -1110920.000        65.5000         2.8030
 C3        186.40000     -0.0037720            0.0      -1886.200           0.00
 V11     0.000033800        1028.00         5.4100      -0.005300           0.00
siderite             FE(1)O(3)C(1)    sid           1nh
 ST              0.0    -762220.000        93.3000         2.9430
 C3        168.40000      0.0000000            0.0      -1483.600           0.00
 V11     0.000043900        1200.00         4.0700      -0.003400           0.00
!==================================
! Calcite - magnesite - siderite - dolomite - ankerite (Franzolin et al., 2011), added by Jakub Haifler
!==================================
****  MINERAL DATA  *****
odol                  MG(0.5)CA(0.5)O(3)C(1)    odol           1nh
 ST              0.0      -1000.000         0.0000         0.0000
 COM   calcite[0.5]magnesite[0.5]
oank                  MG(0.25)FE(0.25)CA(0.5)O(3)C(1)    oank           1nh
 ST              0.0      -750.000         0.0000         0.0000
 COM   calcite[0.5]magnesite[0.25]siderite[0.25]
*****  SOLUTION DATA  *****
CARB_EF    (SITE,MARGULES)1/4  M1(2):Ca,Mg,Fe - M2a(1):Ca,Mg,Fe - M2b(1):Ca,Mg,Fe
   calcite       Ca,Ca - Ca - Ca      0.25     0.000929     0          
   magnesite     Mg,Mg - Mg - Mg      1        0             0
   siderite      Fe,Fe - Fe - Fe      0.01     0.000666     0
   odol          Ca,Ca - Mg - Mg      0.95     0             0
   oank          Ca,Ca - Fe - Mg      0.929    0             0
!
*****  MARGULES PARAMETERS  *****
calcite - magnesite
12         28000      0.00      0.00
calcite - odol
12         11200      0.00      0.00
magnesite - odol
12         14000      0.00      0.00
calcite - siderite
12         20503      0.00      0.00
oank - siderite
12         73650      50.0      0.00
calcite - oank
12         12730      10.0      0.00
magnesite - siderite
12         10000      0.00      0.00
siderite - odol
12         51190      30.0      0.00
odol - oank
12         -5000      0.00      0.00
magnesite - oank
12         30000      0.00      0.00
```

A fixed code using data from tc5 dataset is attached in my previous post. The disastrous diagram in the previous post was created before the correction, now both the codes I input nicely reproduce Fig. 6 in Franzolin et al. (2011). 

Jakub

---

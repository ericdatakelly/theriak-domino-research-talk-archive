---
layout: topic
title: "Difference between TheriakDomino and Thermocalc"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2019-04-04
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=45"
---

## Jinxue Du
*2019-04-04 09:25 UTC*

To compare the results of TheriakDomino 2019 + tcds62c and Thermocalc 3.45 + tc-ds62.txt + tc-6axNCKFMASHTOm45.txt, I calculated P-T pseudosections for a metabasite 
(The bulk composition is 
```
SI(54.922)AL(7.913)AL(7.913)CA(11.465)MG(8.523)FE(11.240)K(0.691)K(0.691)NA(3.975)NA(3.975)MN(0.031)H(80)O(210.748)
```
). 
I found that in the P-T pseudosections, the stabilities of most assemblages are consistent between TheriakDomino and Thermocalc. However, the stablilities of quartz-bearing assemblages are different with each other, especially, the transition between coesite and quartz (Please go to the download link, <http://www.yourfilelink.com/get.php?fid=1958632>). For the trainsition of coesite and quartz, the results of Theriak/Domino 2019 + tcdb55c2d and Thermocalc 3.33 + tc-ds55s.txt, however, are consistent with each other. I wonder how the difference developed and how to cover it.

The thermodynamic data of coesitie and quartz are,

```
input for thermocalc:
       q   1  1   1.0000 10   2.0000  0
          -910.72   0.04143   2.2690
         0.0929   -0.000000642    -714.9   -0.7161
         0.0000000   730.00     6.00   -0.00820    1    847   0.00495    0.1188
    coe   1  1   1.0000 10   2.0000  0
          -907.00   0.03960   2.0640
         0.1078   -0.000003279    -190.3   -1.0416
         0.0000123   979.00     4.19   -0.00430    0
 
input for domino 2019:
Quartz               SI(1)O(2)    q             1nh
 ST              0.0    -910720.000        41.4300         2.2690
 C3         92.90000     -0.0006420      -714900.0       -716.100           0.00
 V11     0.000000000         730.00         6.0000      -0.008200           1.00
 LA1          847.00         4.9500        0.11880

 
Coesite              SI(1)O(2)    coe           1nh
 ST              0.0    -907000.000        39.6000         2.0640
 C3        107.80000     -0.0032790      -190300.0      -1041.600           0.00
 V11     0.000012300         979.00         4.1900      -0.004300           0.00
```

---

## Jinxue Du
*2019-04-08 11:28 UTC*

I calculated the transition line of coesite and quartz with Thermocalc 3.40 +tc-ds61.txt, Thermocalc 3.40 + tc-ds62.txt, Thermocalc 3.45 +tc-ds62.txt, Domino 2019 + tcds61c and Domino 2019 + tcds62c, respectively. I found that the results of Thermocalc 3.40 +tc-ds61.txt, Thermocalc 3.45 +tc-ds62.txt and Domino 2019 + tcds61c are identical, and the reults of Thermocalc 3.40 + tc-ds62.txt and Domino 2019 + tcds62c are identical. I also found the description “Due to changes in the way that Thermocalc handles end-members with internal order-disorder, versions 3.40 and 3.45 produce calculations that are non-identical, though the differences are not significant. (End-members with internal order-disorder can be identified from Holland & Powell, 2011, Tables 2b and 2c).” in the tc-NCKFMASHTO-readme.txt file of Thermocalc 3.45. That is, Thermocalc changed the way handling end-members with internal order-disorder from Thermocalc 3.40 to Thermocalc 3.45, but due to having no sense about what and how they changed, Domino 2019 handles order-disorder in an older way as Thermocalc 3.40.

---

## Erik Duesterhoeft
*2019-04-09 07:40 UTC*

Very interesting. Thank you for your effort. It seems that they change something fundamental in the Landau approach, because thermodynamic data for coesite and quartz do not change (or do they ???). However, I wonder why thermocalc 3.40 +tc-ds61.txt and Thermocalc 3.45 +tc-ds62.txt are identical, as you told us above that the internal, hard-coded approach changed. Is it just a typo ?
If you want to learn more about the history of Landau implementation in Thermocalc, I recommend following:

<https://www.researchgate.net/publication/258618395_Discrepancies_of_mineral_volumes_predicted_by_thermodynamic_databases/download>

<https://www.esc.cam.ac.uk/research/research-groups/research-projects/tim-hollands-software-pages/thermocalc-1/landaunote>

---

## Jinxue Du
*2019-04-09 09:07 UTC*

> I calculated the transition line of coesite and quartz with Thermocalc 3.40 +tc-ds61.txt, Thermocalc 3.40 + tc-ds62.txt, Thermocalc 3.45 +tc-ds62.txt, Domino 2019 + tcds61c and Domino 2019 + tcds62c, respectively. I found that the results of Thermocalc 3.40 +tc-ds61.txt, Thermocalc 3.45 +tc-ds62.txt and Domino 2019 + tcds61c are identical, and the reults of Thermocalc 3.40 + tc-ds62.txt and Domino 2019 + tcds62c are identical. I also found the description “Due to changes in the way that Thermocalc handles end-members with internal order-disorder, versions 3.40 and 3.45 produce calculations that are non-identical, though the differences are not significant. (End-members with internal order-disorder can be identified from Holland & Powell, 2011, Tables 2b and 2c).” in the tc-NCKFMASHTO-readme.txt file of Thermocalc 3.45. That is, Thermocalc changed the way handling end-members with internal order-disorder from Thermocalc 3.40 to Thermocalc 3.45, but due to having no sense about what and how they changed, Domino 2019 handles order-disorder in an older way as Thermocalc 3.40.

I am sorry that all "Thermocalc 3.40" above should be corrected to "Thermocalc 3.36". However, ther results of Thermocalc 3.40 and Thermocalc 3.45 are identical.

---

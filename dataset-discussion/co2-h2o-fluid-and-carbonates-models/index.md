---
layout: topic
title: "CO2-H2O Fluid and Carbonates models"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2018-11-27
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=35"
---

## tyler
*2018-11-27 00:44 UTC*

Hi All,

I am a postdoc working on carbonate bearing greenschist facies metabasites. I want to use DS55 in NCKFMASHTO. I have been rearranging datasets/models and am looking for some feedback. What I am hoping for is a dataset5 version that includes phases for metabasites (i.e., amphibole), carbonates (ideally, Ca-Mg-Fe ternary), and a CO2-H2O fluid. 

tcdb55c2d has a carbonate (Cc-Dol-Mag) solution coded, but no CO2-H2O fluid or mineral phases such as amphibole that I require.

tcds55_p07 from Doug Tinkham has amphibole but not carbonate or fluid models.

td-6axNCKFMASHTOm45.txt, also from Doug Tinkham, has a fluid (fluidb) but no carbonate models.

I was able to copy and paste the fluidb code from 6axNCKFMASHTOm45 and  CCDO  from tcdb55c2d into tcds55_p07 

I have done a few tests with THERIAK and the results seem alright. I am going to do some more tests, but I was hoping that someone is able to confirm these edits are alright. I am little skeptical as to why these solutions were not included in the first place...is there an underlying reason? I am also assuming that the fluid model would be the same in ds6 and 5, so it is alright to directly copy across.

Finally, does anyone know of a ternary carbonate (Ca-Mg-Fe) model that has been coded into TD?

Looking forward to the responses,

Tyler Ambrose

Postdoc UBC Vancouver

---

---
layout: topic
title: "new version"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2017-02-05
post_count: 8
original_url: "https://research-talk.org/viewtopic.php?t=25"
---

## Capi
*2017-02-05 09:10 UTC*

<http://titan.minpet.unibas.ch/minpet/theriak/prog170204/>

---

## JanUlmius
*2017-03-24 15:46 UTC*

After using Theriak-Domino för several years I tried to install and run Theriak-Domino version 170204. However, the output with the original dataset tcds62c or Doug Tinkham's dataset td-tcds62-6axmn-03 is mysterious, Except some of the expected lines, the diagram contains alternating horisontal areas with and without quartz. The diagram is also full of points, and takes a long time to run. I tested on different computers with different fortran compilators with the same result. However when using the dataset tddb55c2d or tcds55_p07 with T-D version 170204 it works as expected. Has anyone observed this behaviour and is there any remedy?

---

## DougTinkham
*2017-04-01 13:30 UTC*

It would be helpful to tell us the chemical system you are working in and the P-T range you are working at. Ideally you would also post the composition  as listed in your THERIN or therin.txt input file. Otherwise it is difficult to address your question.

---

## JanUlmius
*2017-04-04 08:31 UTC*

I have used the composition from Fig 7 of White et al 2014 (Mn): 

```
SI(53.86)AL(20.27)CA(1.25)MG(4.14)FE(4.8)F3(0.8)K(4.69)NA(2.85)TI(0.62)MN(0.23)H(40)O(?)
```
 using the dataset td-tcds62-6axmn-03. 

The DOMINO output can be found in: <https://www.dropbox.com/sh/oi48mnobqumlh34/AAAuJEpIXrYmX_xPb6hAId0Ca?dl=0>. The agreement with Fig 7 of White et al 2014 is not very good and especially the lower right corner contains horizontal lines separating areas with and without quartz. A phase F3 is also indicated over the whole diagram with the initial amount of Fe although F3 is also included in solution phases.

---

## Erik Duesterhoeft
*2017-04-05 11:53 UTC*

Hi Jan,

The point is that no F3 is included in the f3-phases (****   MINERAL DATA  **** - block). You have to change FE to F3 for all f3-phases, if you want to activate ferric members. For example:

```
f3clin1      FE(1)MG(5)AL(1)SI(3)H(8)O(18)      to F3(1)MG(5)AL(1)SI(3)H(8)O(18)
```

or

```
mt         FE(3)O(4)    to      FE(1)F3(2)O(4)
```

and all the other phases, namely: ctdo1, mt, imt, dmt, hem1, fmu3,kho1, fmu2,fbi1,ospr1, msto1,fopx1

---

## DougTinkham
*2017-04-05 18:28 UTC*

> Hi Jan,
> 
> The point is that no F3 is included in the f3-phases (****   MINERAL DATA  **** - block). You have to change FE to F3 for all f3-phases, if you want to activate ferric members. For example:

Hi Erik:

Actually, this is not how I would proceed in this case. That file was specifically set up following the traditional way of specifying ferric iron in TD. That way involves treating all Fe, whether it is ferrous or ferric, with one Fe system component, namely FE, and inputting the proper amount of oxygen so that the iron in ferric phases actually is ferric. Unfortunately, the system composition specified by Jan assumes that ferric iron is inded a different system component than ferrous iron, which is wrong for the a-x file being used.

Two solutions to this problem for Jan. 1) Do as you indicate and change the composition of all database members that contain ferric iron as you specified. That is tedious and error-prone for many users. 2) Use the file as intended, by removing F3 entirely from the system composition and adding that F3 amount to FE. Then, instead of using O(?), put in an absolute amount of O that dictates the amount of FE to be treated as ferric. Please see the last paragraph of this website that discusses this complexity: <http://dtinkham.net/peq.html>

---

## DougTinkham
*2017-04-07 01:43 UTC*

> I have used the composition from Fig 7 of White et al 2014 (Mn):

I have looked into the new version of domino on capi's website. For some compositions I am seen lack of convergence to the equilibrium solution and I think I know why, and it is slow. I will soon make available for download some executables for Mac that are slightly older that work well with ds6. It might be some time before I would be able to compile for PC.

Below is an example that reproduces well an MnNCKFMASHTO section from White et al. 2014 using these executables. The black dashed line are from domino and the red lines are from White et al. 2014 Mn Metapelite paper, Fig. 7 (JMG). There are a few very minor discrepancies but it is a very good match.

![350-5_Fig7_TD_TC_Comparison2.png]({{ '/assets/attachments/4_350-5_Fig7_TD_TC_Comparison2.png' | relative_url }})

---

## JanUlmius
*2017-05-03 10:11 UTC*

I have performed some more tests using the compilated TD-version on Erik Duesterhoeft's web page (however it also seems to be version 04.02.2017). It gives the same diagram for White et al 2014 Fig 7 as presented by Doug (post #5) (black dashed lines) except for some difference for the mt lines. The mt lines in the lower part and the ab fields at the top of the diagram are also present. There is also a difference in calculation time ( 8 hours vs close to 6 h). When recalculating the TC diagram (red lines) of White et al 2014 Fig 7 including ab at the top and mt at the lower part you get a very good match between TD and TC (except for the mt lines in the middle and a g line in lower left corner). Also the co-existing hem-ilm field at the top cannot be fully reproduced by TD.

![350-8_White2014fig7_TC-TD_comp.png]({{ '/assets/attachments/5_350-8_White2014fig7_TC-TD_comp.png' | relative_url }})

---

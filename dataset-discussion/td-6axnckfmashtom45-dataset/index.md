---
layout: topic
title: "td-6axNCKFMASHTOm45 Dataset"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2019-03-15
post_count: 11
original_url: "https://research-talk.org/viewtopic.php?t=44"
---

## Mohammad_Miri
*2019-03-15 15:49 UTC*

Hi,

I want to use td-6axNCKFMASHTOm45 dataset to stdudy melt reactions and assembelages in some amphibolite and meta-gabbro samples with excess SiO2 and H2O. The bulk composition is 

```
SI(57.2)TI(2.15)AL(11.5)FE(9.5)NA(3)MG(10.2)CA(13)K(0.8)O(170)
```

but Theriak does not make the stabe phases and instead shows amounts of the oxides. This is the first time I use this dataset and I do not know what wrong is with my THERIN file or the dataset.

Would you please help me?

---

## Jacob
*2019-03-15 20:22 UTC*

I was not able to replicate this specific problem, but part of the issue may be related to ferric iron unless you've already removed the solution phases that have some proportion of ferric iron. See the section from Doug Tinkhams website on using ferric-free systems in ds-6:

<http://dtinkham.net/peq.html>

I was able to get Theriak/Domino to run fine using the following input: 

```
SI(57.2)TI(2.15)AL(11.5)FE(9.5)NA(3)MG(10.2)CA(13)K(0.8)O(?)O(0.01)
```

I am not an expert so perhaps others could be of more help, but I would start by trying something like that.

---

## Tao PENG
*2019-03-15 20:46 UTC*

Did you notice that in your THERIN, there's no H component?

Because H2O is excess in your system, you need to include H in your input.

maybe you can try this `SI(57.2)TI(2.15)AL(11.5)FE(9.5)NA(3)MG(10.2)CA(13)K(0.8)H(30)O(?)`

---

## Tao PENG
*2019-03-15 20:59 UTC*

Sorry, it's not because of missing H. It's because of missing "*" at the end of your input line. 

```
SI(57.2)TI(2.15)AL(11.5)FE(9.5)NA(3)MG(10.2)CA(13)K(0.8)O(170)      *
```

---

## Mohammad_Miri
*2019-06-09 21:24 UTC*

Thank you for your suggestions

I have faced with a new problem now! When I run the Theriak with the corrected THERIN and td-6axNCKFMASHTOm45, it shows this fatal error:

```
LIQMB16          :there is no data for qL1              in external subroutine
```

I tried to use this database in pervious versions of the TD but they did not work too.

Could anybody help me?

---

## Joshua Laughton
*2020-04-27 19:56 UTC*

Hi all,

I am also getting this same fatal error when trying to use the td-6axNCKFMASHTOm45 database with the 09.03.2019 version of TD:

```
"LIQMB16          :there is no data for qL1              in external subroutine"
```

Not sure how to fix this...

---

## Mohammad_Miri
*2020-05-03 13:23 UTC*

Hi Joshua

The only way is to use Theriak-Domino 11.02.2015 executables for this dataset. This version perfectly works on Windows 7 (NOT Win 10). You can download it from this link

<http://dtinkham.net/peq.html>

---

## YiBing Li
*2020-06-29 01:39 UTC*

Hi,

```
LIQMB16 :there is no data for qL1 in external subroutine
```

Thus you need edit the fsol.f90 file for LIQMB16 solution because it needs external subroutine to calculate end-member activities, you can read TheriakDominoGuideBOOK that tell you how to edit it.

Best wishes,

Blakelee, PHD student

---

## augustin
*2021-04-12 19:49 UTC*

Hi,

Anyone that was able to use this dataset can help me?
I also got this problem (LIQMB16 :there is no data for qL1 in external subroutine) when I use the latest version of TD.
So I changed to the Theriak-Domino 11.02.2015 executables. 
In this version, the DOMINO starts to run, but I got a lot of warnings (Warning: loops reached maximum>>>). It takes forever to calculate (even in really small T-P) and goes into error without finishing the calculation.

---

## FabrizioS
*2022-02-04 10:04 UTC*

> **Blakelee wrote:**
> Hi,
> 
> 
> 
> ```
> LIQMB16 :there is no data for qL1 in external subroutine
> ```
> 
> 
> 
> Thus you need edit the fsol.f90 file for LIQMB16 solution because it needs external subroutine to calculate end-member activities, you can read TheriakDominoGuideBOOK that tell you how to edit it.
> 
> Best wishes,
> 
> Blakelee, PHD student

Hi, I had the same problem with a different database. I looked at the guide as you suggested to, but I didn't find anything useful. Could you please explain how you edited the database file? Thank you, Fabrizio

---

## YiBing Li
*2022-02-05 15:27 UTC*

Dear Fabrizio,

You can use editor such as notepad to open the fsol.f90 file and edit the external subroutines for LIQMB16 model. It includes three parts: SOLINI, SOLMOD and SOLCAL (Please reference to Page 75). You may mimic what already existed in the fsol.f90 such as Liquid model "LIQtc". After finishing your editing, you need to recompile all the programs via gfortran or whatever compiler you like.

Best wishes!
Blakelee

---

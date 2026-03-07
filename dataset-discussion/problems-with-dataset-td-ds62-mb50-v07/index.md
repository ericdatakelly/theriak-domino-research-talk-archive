---
layout: topic
title: "Problems with dataset td-ds62-mb50-v07"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2025-05-27
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=105"
---

## RenatoBarros89
*2025-05-27 12:54 UTC*

Hello everyone,
I am currently working on mafic granulitic rocks, using the td-ds62-mb50-v07 dataset downloaded from the theriak-Domino official Github page,  but theriak returns the following message:

FATAL ERROR
LIQG16     : there is no data for q4L    in internal subroutine

I'm using in Windows 10, Theriak-Domino version 28.05.2022
therin input : NA(1.16)CA(10.46)K(0.760)FE(14.20)MG(7.45)AL(15.84)SI(50.69)TI(1.72)H(14.00)O(?) O(0.400)

Could someone help me? In other datasets the program does not return this type of message.

![1.JPG]({{ '/assets/attachments/65_1.JPG' | relative_url }})

---

## DougTinkham
*2025-05-27 13:24 UTC*

Hi

According to the comments/notes in the database file, it says this:
Note 0: This database file can only be used with the 2023.01.02 or newer version of the
Theriak-Domino suite of programs.

Since you are using an older version of Theriak-Domino than what that file works with, it doesn't work out of the box. You can either 1) download a newer version of the programs from github that is compatible with that database file, 2) tweak the database file to use different names, or 3) edit source and recompile.

If you want to do #2 because you need to use that version of TD, and do not want to recompile, you can adjust the names of the liquid model and end-members in the database file, to see if it works. I cannot guarantee LIQtc2 is the same as LIQG16 without testing it, but it conceptually should be the same if the names are changed. The solution model name is LIQtc62, and phase component names are as follows:

!-----**Liquid. Tonalitic metabasite melt: NCKFMASH. Green et al. 2016**
IF (SOLNAM.EQ.'LIQtc62') THEN
N=9
NAME(1)='Quartz2_liq'
NAME(2)='Albite_liq'
NAME(3)='K-feldspar_liq'
NAME(4)='Wollast2_liq'
NAME(5)='Sillimanite2_liq'
NAME(6)='Fayalite2_liq'
NAME(7)='Forsterite2_liq'
NAME(8)='H2O_liq'
NAME(9)='Anorthite2_liq'
END IF

Doug

---

## RenatoBarros89
*2025-05-27 15:30 UTC*

Hi Doug,

I hadn’t realized that.
I’ve downloaded the latest version, and it worked perfectly!

Thank you so much!

---

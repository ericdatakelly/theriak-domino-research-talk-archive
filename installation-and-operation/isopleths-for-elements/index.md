---
layout: topic
title: "isopleths for elements"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2015-11-21
post_count: 6
original_url: "https://research-talk.org/viewtopic.php?t=18"
---

## js
*2015-11-21 19:50 UTC*

Hi,

I'm new in this forum. Recently, I started working with Theriak-Domino. The problem I'm facing is how to calculate isopleths for certain elements. It is simple task for end members of solid solution. It looks as if it should be also simple for elements like Si in phengite. I found in the UserGuide that there is a special statement for his task: El(site)  Site occupancies, isopleths will be calculated. However, it doesn't work for me. I'm using scripts and the one which should calculate isopleths of Si I enclosed at the end of this post. I explored much wider space than between 3.0 to 3.49 of Si apfu. However, I always obtained empty PT diagram containing only the lower limit of phengite stability. What I'm doing wrong? Thank you in advance for for help.

Jacek

```
script.script21.txt
script21.plt
tcdb55c2_gig.txt
    1.0000    300    0.010000   0.1000000E-08   0.1000000E-06   0.1000000E+01 0.1000000E-03     25      25     500
0   SI(67.9159)AL(15.8024)FE(3.3276)MG(2.7531)CA(0.9584)NA(5.7252)K(3.0434)TI(0.4414)MN(0.0326)H(50)O(?)     *  s25  core#1  H2O  and  q  in  excess

TC   500   650
P   2500   15000
PHNG   SI(T1)   1   3.0   3.49   0.01
1
 0.0000000E+00   0.0000000E+00
_script21_pix/
```

---

## sina
*2015-11-21 20:07 UTC*

Hi Jacek,

you get empty diagrams, because the range of 3.0 - 3.49 you want to see is Silicum per formula unit, but what you tell the program to plot (SI(T1)) is the amount of octahedral Si. I would suggest you use the line:

```
PHNG     SI(T1)    1       0      0.49      0.01
```

Best,

Sina

---

## sina
*2015-11-21 20:28 UTC*

Hi again,

sorry, I just realized, that I had some misconceptions concerning this problem as well. That is, I confused where the SI(T1) is coming from, and the PHNG   SI(T1)   1    0   0.49   0.01 will not work. However, the 3.0 - 3.49 do not work, because SI(T1) is not Si p.f.u.. Sorry for the confusion.

---

## js
*2015-11-21 20:38 UTC*

Hi Sina,

Thank you for your post. Unfortunately, it didn't help. As I wrote in my first post I explored much wider space from 0 to 6 and the results were still the same.

all the best

Jacek

---

## pierre.lanari
*2015-11-22 07:56 UTC*

Hi Jacek, 

For help with isoline definition type "i" during "definition of calculation type".

For this model, Si(T1) = Si-2. Consequently, Si(T1) ranges from 1 to ~1.5. This can be confusing because in KWM you have two T sites with both a multiciplicity of 2. The first one is only filled up by Si as Si ranges between 3 (muscovite) and 4 (celadonite) and the second one by Si and Al.

What you want is the total Si in apfu, so use the command:  `PHNG  sipfu  1  3  3.49  0.01`

Cheers, 

Pierre

---

## js
*2015-11-22 10:45 UTC*

Hi Pierre,

many thanks for your explanations. Of course it works!!! I was trying to use help in domino. However, typing "i" during definition calculation I was provided with the list of variables. One of them No 10 was entitled Si pfu. Unfortunately, typing any of these numbers did nothing. But now I'm able to resolve this issue by myslef. I just forgot that when I'm not using scripts chemical composition of the sysem is read from THERIN file.

all the best

Jacek

---

---
layout: topic
title: "Problems about Theriak-Domino (11.03.2020)"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2021-01-07
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=67"
---

## Jinxue Du
*2021-01-07 07:43 UTC*

Hi, everyone. Recently, I am trying to calculate P-T pseudosections of eclogites using the latest Theriak/Domino software (11.03.2020). I installed gfortran following the introduction on the web and then I executed the "make all" and I didn't have problems. My computer has Windows 10, (64-bit). I started with the database tcdb55c2d and a bulk rock composition as below,
"1   SI(53.577)TI(0.866)AL(10.223)AL(10.223)FE(7.935)MN(0.161)MG(12.396)CA(10.802)NA(3.452)NA(3.452)K(0.310)K(0.310)O(0.278)H(80)O(?)        *D911 WEI 2013".
The result is reasonable and the same as that of an earlier version of TD (09.03.2019) and the calculation is much faster. However, when the database tcd62scid is used, the error appears as, 
"ZUG TOO SMALL
Note: The following floating-point exceptions are signalling: IEEE_DENORMAL".
More importantly, there are, as shown in the attached figure, so many 2, 3, or 4-amphibole, 2 or 3-ilmenite, 2, 3, or 4-LIQtc62 assemblages. The P-T range I calculated is 450-1000 °C and 3000-33000 bar. I am wondering whether there is anything wrong in my calculation. However, I do can repeat the result for Fig. 2c from Green et al. (2016) as shown on the website "<https://titan.minpet.unibas.ch/minpet/theriak/prog11032020/exampletime.html>".
Is there anyone who can help me.
Many thanks for your reading.

![InsertPic_(01-07-15-34-42).png]({{ '/assets/attachments/28_InsertPic__01-07-15-34-42_.png' | relative_url }})

---

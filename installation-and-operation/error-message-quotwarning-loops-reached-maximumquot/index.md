---
layout: topic
title: "Error message: \"WARNING: loops reached maximum:\""
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2023-10-30
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=96"
---

## Caio Santos
*2023-10-30 19:07 UTC*

Hello all

I am trying to use Domino to calculate P-T pseudosections for mafic and ultramafic compositions. I am using the Theriak-Domino version that can be downloaded from github (version 2023.03.06) on Windows computers. The database I am using is td-ds633-ig50-v04 from Doug Tinkham (also available on github). For two separate compositions (below) this error message is showing up: "WARNING: loops reached maximum:    351".

In the case of the mafic composition Domino ran for 9,5 hours and and the output was an almost complete pseudosection. It seems to me that, in the case of the mafic compostion, the problem is linked to assemblages with either two pyroxenes or two amphiboles stable, because, in the "DomOut" file the error message always shows up associated to such assemblages, and, in the output pseudosection the incomplete lines are also associated to such assemblages.

In the case of the ultramafic composition, Domino ran for approximately 1 hour and the output was, apparently, a complete pseudosection. I still plan to run some tests but there are no obvious problems such as discontinuous lines, in a way that might suggest that the error message was of no importance. Nontheless, I would like to understand what is happening.

Any help would be greatly appreciated.

Cheers

Caio

PS: for some reason I am not able to attach the DomOut and Domplt files, but I can send it via some other channel, if necessary. The two compositions I mentioned are given below.

Mafic composition: `SI(52.94)TI(1.33)AL(18.17)FE(9.02)MG(11.85)CA(12.8)NA(5.67)K(0.21)CR(0.03)H(1.01)O(?)O(0.48)`
Ultramafic composition: `SI(37.49)TI(0.08)AL(2.05)FE(5.87)MG(53.37)CA(1.74)NA(0.44)K(0.06)CR(0.3)H(0.2)O(?)O(0.09)`

---

## Caio Santos
*2023-11-01 18:06 UTC*

Hello again

After posting the first message, I tried to calculate a diagram for the ultramafic composition with a smaller H2O content (H = 0.1). Again, the same error message appeared several times, but Domino produced an almost complete pseudosection, that misses just the final part of the spinel solvus. After that I tried to calculate the same pseudosection with thermocalc, and the resulting diagram is pretty much the same: same curves, differences smaller than 0.1 kbar and 2°C between their position. For me, this result indicates that the error message is of no consequence after all... But I still would like to know what exactly does it mean. So, if anyone could shed a light on this question, I would appreciate it a lot.

Cheers

Caio

---

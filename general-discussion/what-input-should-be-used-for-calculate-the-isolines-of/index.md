---
layout: topic
title: "What Input should be used for calculate the isolines of"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2019-02-18
post_count: 5
original_url: "https://research-talk.org/viewtopic.php?t=40"
---

## Tao PENG
*2019-02-18 17:37 UTC*

Dear all,

I am new to Theriak-Domino and try to recalculate the diagrams in de Capitani (2010). I got all the same results as in Fig.2, except for Fig.2e "Si pfu in Ms", which is related to the isoline calculation.

I tried different ways to input the corresponding phase and data, but none of them worked.The Inputs and results are as follows:

```
(Name       Key    Nr    min     max      step)

1. Muscovite   Si      1      3          3.4        0.04  ------got no line in the diagram

2. Muscovite   EI(Z)  1      3          3.4        0.04  ------got no line in the diagram (I guessed Z might be the defined site (Si, Al) name of Ms, which can be found in database file jun92d,bs)

3. Muscovite   EI(Si)  1      3          3.4        0.04  ------got no line in the diagram 

4. Muscovite  Silicon  1     3          3.4        0.04  ------got no line in the diagram 

5. Muscovite  Z(Silicon)  1   3         3.4       0.04  ------got no line in the diagram 

For comparison, I used Al to check if it worked, but still got nothing.

6. Muscovite  Al       2      0.6        1         0.04  ------got no line in the diagram 
```

I also used "list" to check the available phases, found that abbrivation Si represented Sillimanite. Maybe this is the reason why no single line could be calculated, but I am not sure. 

Anybody has clues for this issue? Thanks in advance.

Tao.

---

## js
*2019-02-18 18:58 UTC*

Hi Tao,

Look at this thread <https://research-talk.org/viewtopic.php?f=4&t=18>. There, in the end, there is an answer to your problem

All the best

Jacek

---

## Tao PENG
*2019-02-18 19:58 UTC*

Hi Jacek,

Thank you! But still I didn't get it after I saw that thread. What did you mean " when I'm not using scripts chemical composition of the sysem is read from THERIN file"? Then in what way you input the phase and data?

I didn't use script file and all the compositions are from THERIN, even when I tried Pierre's method it still got nothing.

---

## Tao PENG
*2019-02-18 20:56 UTC*

Hi Jacek，

Finally I solved the problem. There're two key points in the Input (Name Key Nr min max step): 1. The Name must be the mineral, not the endmember of the mineral; 2. The Key for per formular unit is Element+pfu, like Pierre suggusted in the thread you showed me. For this case, it should be sipfu.

Thus, the right way to Input for calculating Sipfu of Ms is:

```
White Mica   sipfu  1   3   3.4    0.04  (Note: The phase is White Mica not Muscovite)
```

---

## js
*2019-02-18 20:58 UTC*

Tao,

I am using scripts. Here is an example of such a script. Hopefully, it will help.

Jacek

script.script01d.txt
script01d.plt
JUN92d.bs

```
1.0000    300    0.010000   0.1000000E-08   0.1000000E-06   0.1000000E+01 0.1000000E-03     25      25     500
0   SI(61.8085)AL(22.6557)FE(4.9861)MG(2.4803)MN(0.2855)CA(0.6044)NA(2.1119)K(4.4345)TI(0.6330)H(100)O(?)  *  sample PK007b (core of grt I)

TC   350   650
P   3000   25000
WHITE MICA      sipfu    1       3.00      3.80      0.02
1
 0.0000000E+00   0.0000000E+00
_script01d_pix
```

---

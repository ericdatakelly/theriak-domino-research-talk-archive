---
layout: topic
title: "Staurolite stability field problem"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2021-05-28
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=74"
---

## mnowak
*2021-05-28 08:16 UTC*

Hi everyone,

I have calculated a pseudosection for metapelite using tcds55_p07 dataset in PT conditions of 400-800 oC and 2-20 kbar. In the sample occurs staurolite as inclusions inside garnet porphyroblasts. However, there is no stability field for staurolite in the calculated pseudosection. I have tried using different Grt/Bt/Ilm models and also tcdb55c2d dataset but it does not help. Interestingly, the staurolite stability field occurs with margules from LIQtc model turned off (which I did by mistake, but it worked in that aspect). However, liquid is then the main component of the rock in the whole pseudosection, so it's probably not calculated well.
Does anyone know what could be the problem?

Cheers,
Gosia

---

## ctfosterjr
*2021-05-28 19:16 UTC*

It sounds like you haven't disabled the appropriate phases in the tcds55 databases to give good results for pelites.  Look at Pattison & DeBuhr 2015 (JMG v.33 p. 437-462) HP1 AND HP2 databases for guidance.  If HP1/HP2 don't give you a staurolite field it probably means your bulk composition is wrong.

Tom Foster

---

## mnowak
*2021-05-29 11:32 UTC*

Tom, thank you very much for your advice. I have checked with Pattison & DeBuhr 2015 and in my calculations I have used exactly the HP2 dataset. I will try also with HP1, but probably, as you mentioned, it's a problem with bulk composition.

Gosia

---

---
layout: topic
title: "Fractional Crystallization"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2022-03-07
post_count: 5
original_url: "https://research-talk.org/viewtopic.php?t=87"
---

## FabrizioS
*2022-03-07 15:39 UTC*

Hello everyone,
I would be interested in trying to use TD to mimic fractional crystallization processes. Starting from an initial composition x, I'd like to create an incremental model, considering a stepwise variation of melt composition, T, P. Do you think this can be done in TD? Or, I don't know, would you happen to know any plugin or program in TD capable of helping me?

Thank you in advance
FS

---

## AlexeyBerezin
*2022-03-20 18:14 UTC*

im commend use special soft - MELTS or rhyolite-MELTS (<https://magmasource.caltech.edu/> or <https://melts.ofm-research.org/#First>).
in Theriak-Domino not used thermodynamic models for silicate melts (only for migmatites -HP database).

---

## FabrizioS
*2022-03-21 09:15 UTC*

Thank you for your answer.
From what I read on the melts website, pmelts can provide reliable results up to c.a 4 GPa. I would like to model at pressures higher than that.
xmelts would be perfect, but it's not yet been released.

FS

---

## AlexeyBerezin
*2022-03-21 22:16 UTC*

For approximate solutions, I would use pMelts. may be contact with developer Paula M. Antoshechkina resolve you problem xmelts? Also i eccomend contact with Ilya Fomin <http://chl-fomin.blogspot.com/>

---

## FabrizioS
*2022-03-23 10:52 UTC*

Thank you Alexey !

---

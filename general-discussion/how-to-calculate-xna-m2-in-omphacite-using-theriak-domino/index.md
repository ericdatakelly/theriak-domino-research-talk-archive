---
layout: topic
title: "how to calculate X(Na, M2) in omphacite using Theriak-Domino? "
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2019-04-10
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=47"
---

## shilin
*2019-04-10 05:52 UTC*

Hi, Theriak-Domino users. When I want to calculate isopleth of X(Na, M2) in omphacite, just like Thermocalc, using Domino 2017 and database of Holland & Powell (1998+), I figure out that it can not be calculated directly since I need to distinguish Na(M2c) from Na(M2n). Anybody has clues for this issue? Thanks in advance . shilin

---

## Erik Duesterhoeft
*2019-04-10 07:26 UTC*

Hi, unfortunatley this part is hard-coded. The site-occupancies, which can be plot with domino, depend on the definition of sites in the database and you cannot change the sites without changing the solution model.

```
***** SOLUTION DATA *****
OMPH (-SITE,MARGULES)1/2 M1m(1):Mg,Fe,F3,Al - M1a(1):Mg,Fe,F3,Al - M2c(1):Na,Ca - M2n(1):Na,Ca
jadeite Al - Al - Na - Na
diopside Mg - Mg - Ca - Ca
hedenbergite Fe - Fe - Ca - Ca
! acmite F3 - F3 - Na - Na
omphacite Mg - Al - Ca - Na
clinoFM Fe - Mg - Ca - Ca
! jadacm Al - F3 - Na - Na
```

However, I suggest the following workaround. Run a pixmap with domino. Then sum up all Na-bearing endmembers, e.g. x_jd_[om] + x_om_[om] in MATLAB/Octave and make a contour plot using for example my pix2mat.m script file (you find it on my website or on ResearchGate).

I hope this will help you

---

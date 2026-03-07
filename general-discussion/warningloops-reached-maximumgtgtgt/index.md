---
layout: topic
title: "Warning:loops reached maximum>>>"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2019-02-21
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=41"
---

## Tao PENG
*2019-02-21 08:34 UTC*

Dear all,

I met some problems when I used TD (0402.2017) on windows 7 to recalculate the Fig.7 in White(2014), with td-tcds62-6axmn-03.txt dataset.

The Bulk composition is:

```
1 SI(66.84)AL(16.44)FE(3.15)MG(3.24)MN(0.05)CA(0.55)NA(6.56)K(2.77)TI(0.43)H(100)O(?)O(0.001)  *
```

   P-T range is 500-650 C/2500-15000bar.

But after one night (almost 12 hours) it's still running, and the screen shows full of "Warning: loops reached maximum"...... I don't know how long will it take for TD to finish this calculation or whether it will finally run into error.

The same problem appeared when I used TD (2018 version from Erik Duesterhoeft's website  <http://www.rocks.uni-kiel.de/theriakd/html/down_en.html>) on windows 10, with tcds55_p07 dataset. The Bulk composition used is (of my own metapelite sample):

```
1   SI(63.18)AL(14.14)FE(6.68)F3(1.46)MG(3.8)CA(1.29)NA(1.71)K(3.55)H(60)O(?)O(0.001)    *
```

  I used different P-T ranges to calculate, but even when a small P-T range "600-610C/8000-8500bar" was choosen, TD still showed lots of "Warning: loops reached maximum"...... and finally went into error without finishing the calculation.

So, is this a normal issue when TD uses (updated/new) datasets which include more elements? And why? And what should to avoid/solve it?

Thanks in advance for your help.

Tao.

---

## Erik Duesterhoeft
*2019-02-21 09:25 UTC*

I'm aware of this issue from another user. The point is that Christian de Capitani refined the minimization procedure from version 2012 to 2017. Unfortunately some complex solutions in the tcdb -database run into trouble with this refinement. Here, are some quick solutions until the problem is fixed.

a) Don't use OAMPH, LIQTc or CLAMP maybe Domino will reach LEVEL (0) or higher, which means that you can use guzzler and explot to plot the interim result.

b) use pixmap in domino and my pix2mat.m script

c) if it still not works, use version 2012. Send me an email, and I can send you a backup copy.

Maybe Doug Tinkham has a better idea. Did you try his 2015 TD-version (<http://dtinkham.net/peq.html>) ? But I guess that the minimization routine is same as in the 2017 TD-version.

---

## Tao PENG
*2019-02-26 08:26 UTC*

Thank you Erik!

I tried Doug Tinkham's 2015 TD-version, it worked very well. No previously reported error appears.

Best,

Tao.

> I'm aware of this issue from another user. The point is that Christian de Capitani refined the minimization procedure from version 2012 to 2017. Unfortunately some complex solutions in the tcdb -database run into trouble with this refinement. Here, are some quick solutions until the problem is fixed.
> 
> a) Don't use OAMPH, LIQTc or CLAMP maybe Domino will reach LEVEL (0) or higher, which means that you can use guzzler and explot to plot the interim result.
> 
> b) use pixmap in domino and my pix2mat.m script
> 
> c) if it still not works, use version 2012. Send me an email, and I can send you a backup copy.
> 
> Maybe Doug Tinkham has a better idea. Did you try his 2015 TD-version (<http://dtinkham.net/peq.html>) ? But I guess that the minimization routine is same as in the 2017 TD-version.

---

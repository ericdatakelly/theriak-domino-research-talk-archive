---
layout: topic
title: "ragged curves on pseudosection"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2018-11-19
post_count: 7
original_url: "https://research-talk.org/viewtopic.php?t=34"
---

## js
*2018-11-19 07:07 UTC*

Hi everyone,

I'm calculating pseudosection using td-tcds62-6axmn-03.txt dataset. Unfortunately, calculated pseudosection looks very strange (see below). Does anyone know what is the problem?

Jacek Sz.

![361-1.png]({{ '/assets/attachments/2_361-1.png' | relative_url }})

---

## alex
*2018-11-19 14:03 UTC*

Hello, 

Local minima related to the LiQ model? Plus labels :) 

It is a common proble for me with amphibole / cpx at HP/LT. I would try without the melt model. 

Alex

---

## js
*2018-11-19 14:14 UTC*

Hi Alex,

thanks for your advice. I'll try to do this. However, this problem doesn’t exist using different dataset.

Jacek

---

## pierre.lanari
*2018-11-20 06:31 UTC*

Hi Jacek, How did you define the number of oxygen in your bulk? I you are using O(?), I suggest you to add a little extra oxygen to avoid minimization issues with the ferric end-members. I would try to calculate the diagram between 550-600 °C and 5000-7500 bar using the following bulk:

```
1    SI(66.84)AL(16.44)FE(3.14)MG(3.24)CA(0.55)NA(6.56)K(2.77)TI(0.43)MN(0.05)O(?)O(0.001)    *
```

Another thing you could do is to run manually a few minimizations with Theriak in this P-T range and try to figure out what the problem actually is. Pierre

---

## js
*2018-11-20 06:48 UTC*

Hi Pierre,thanks for your replay. I'm using the following bulk:

1   SI(66.8367)AL(16.4382)FE(3.1427)MG(3.2363)MN(0.0488)CA(0.5455)NA(6.5557)K(2.7697)TI(0.4264)H(100)O(?)  * 

So, if I understand you I could modify this bulk to:

1   SI(66.8367)AL(16.4382)FE(3.1427)MG(3.2363)MN(0.0488)CA(0.5455)NA(6.5557)K(2.7697)TI(0.4264)H(100)O(?)O(0.001)  * 

Am I right?
Jacek

---

## tyler
*2018-11-27 17:59 UTC*

Hi Jacek,

Doug Tinkham discusses the issue with Ferric iron on his site (<http://dtinkham.net/peq.html>) under the section Ferric Iron Problems.

And yes, I believe that Pierre is correct in added a minor amount of  O to your bulk.

---

## Salviano Silva
*2019-12-18 12:02 UTC*

Hi everyone,

I have a similar problem to the Jacek, however even adding a little extra oxygen the results are still odd.

To the calculation, I am using the tcdb55c2d.txt dataset.
Does anyone know what is the problem?

Salviano

![361-7_sm.png]({{ '/assets/attachments/3_361-7_sm.png' | relative_url }})

---

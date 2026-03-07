---
layout: topic
title: "Problems running Theriak Domino on Windows 10 using the latest dataset tcds62cid and td-6axNCKFMASHTOm45"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2021-05-18
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=73"
---

## Otavio Sant' Anna
*2021-05-18 13:40 UTC*

Dear all,

I’m interested in using the program Theriak-Domino to do some calculations for metabasic granulites. Unfortunately, I’m having some trouble making it work on my computer (I have a notebook that works with Windows 10) when I use the latest database from Holland and Powell (those that contain the mineral datasets from Green et al., 2016). I have tried to use both archives from the Theriak-Domino website (tcds62cid) and the one from Doulg Tinkham's website (td-6axNCKFMASHTOm45). Unfortunately, both seem not to work.

In my calculations, I’m using the MnNCKFMASHO system. The images that I added here were taken from a run that I did using the following input:
SI(41.06)TI(0.38)AL(9.79)FE(6.96)MN(0.13)MG(17.89)CA(12.21)NA(2.71)K(0.32)H(8.53)O(?)     *

Every time I use this input and the latest dataset in Domino, a message appears like in the image below: “WARNING: loops reach maximum”.

![Theriak-Domino_error.png]({{ '/assets/attachments/37_Theriak-Domino_error.png' | relative_url }})

As a new Theriak-Domino user, I didn't know whether these messages were normal or not, but they seemed strange to me because the calculations took too long to execute (more than 24 hours). I had already done some calculations before using other databases like the one from Berman (1988) or the other version of the database of Holland and Powell (2011) (the one that didn't have the mineral dataset from Green); both worked well and did not showed any of those WARNING messages. I tried again to use the latest version of the Holland and Powel (2011) dataset (both files tcds62cid and td-6axNCKFMASHTOm45), but this time I tried to wait until the calculation was done. It took 2 days but, in the end, it didn't work. It showed something like the following image:

![Theriak-Domino_error2.png]({{ '/assets/attachments/38_Theriak-Domino_error2.png' | relative_url }})

I thought this was weird, but I tried to execute GUZZLER and EXPLOT anyway. Unfortunately, It didn’t work. I don’t know what is wrong (I don’t know if the problem is my computer, the version of Theriak-Domino, the dataset, or even all of them together). Can anyone help me solve this problem??

Best regards,
Otavio Sant' Anna

---

## YiBing Li
*2021-10-05 11:35 UTC*

Hi Otavio,

Maybe something wrong with your bulk composition input, do you multiply by 2 when you deal with AL, NA, K and H?

Kind regards!
Blakelee

---

## DougTinkham
*2021-11-23 15:53 UTC*

Hi Otavio

You should either add some extra oxygen to generate stability of the ferric iron-bearing members that are activated in the database file, or deactivate the ferric-iron bearing members in the database file if you do not want any to be predicted. See the "Ferric iron problems" section of <https://dtinkham.net/peq.html>

---

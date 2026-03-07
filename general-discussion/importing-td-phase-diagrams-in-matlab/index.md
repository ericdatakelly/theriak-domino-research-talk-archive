---
layout: topic
title: "Importing TD Phase Diagrams in Matlab"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2022-07-14
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=90"
---

## FabrizioS
*2022-07-14 13:48 UTC*

Hello everyone,
I've been using TD for the past few months and I've produced some phase diagrams for my PhD project. Until now, I just edited my output ps file with graphics softwares, but now I would like to import my diagrams in Matlab to reach more precision, especially regarding curves and stability fields. I would also like to overlap them with new curves I intend to create in matlab. Is there any way to do that?
Ps the ideal thing would be to run the calculation directly in matlab so as to have the max precision, rather than simply importing a svg or a ps file in matlab.
Thank you in advance

FS

---

## lotkoopmans
*2023-01-11 12:25 UTC*

Hi Fabrizio,

I haven't tried doing it on matlab, but I have done a similar thing on Python. You can, with quite a bit of playing around, get Python to interpret the 'clean' files that are produced in Guzzler. I've used these to produce pseudosections in Python directly, and avoids any graphics errors that may happen if you import a graphics file.

I hope that helps!

Lot

---

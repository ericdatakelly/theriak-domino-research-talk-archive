---
layout: topic
title: "Melt vol% isopleth"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2022-04-27
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=89"
---

## Mohammad_Miri
*2022-04-27 05:42 UTC*

Dear all

hi,

I want to calculate isolines for vol% of melt component of a system using Domino. 

I have used  Volume [ccm],  Molar volume [g/mol], Volume% (of solids), and Amount [mol] options for SOLUTION PHASES and  BULK ROCK in Domino but unfortunately in most cases, all the isolines lie on a single reaction curve (the first melt producing reaction) like the attached Fig.

Would you help me to do it correctly?

Best wishes

![Plot.JPG]({{ '/assets/attachments/54_Plot.JPG' | relative_url }})

---

## Kari
*2022-08-04 10:07 UTC*

Hello,
I suggest you calculate the stability conditions of each phase at a specific point in  interest stability field 
by running "domino
choose the database
choose the X axis (T)
choose the Y axis (P)
then choose "POINT" for the "calculation definition".
choose the precise point (x temperature, y pressure)
you get the volumes and densities of the stable phase.
you can see this in  "OUT" file
then you can calculate the isolpet according to the results.
I hope it is going to work
kari.

---

## lotkoopmans
*2023-01-11 12:21 UTC*

Hi Mohammad,

I don't know if you're still working on this, but I think the problem you are running into is that the vol% is actually a percentage. What it seems like you've done there is ask it to plot isopleths betwee 0 and 1% melt, which will be why they are so close to each other.

To fix this, try and ask domino to produce isopleths from 0 to 100% at whatever interval you want.

Hope that is still of use!

Lot

---

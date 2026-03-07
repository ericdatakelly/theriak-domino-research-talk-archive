---
layout: topic
title: "Open systems and chemical potential diagrams"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2015-11-24
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=19"
---

## cenkitok
*2015-11-24 10:40 UTC*

Does anyone have experience with modeling open systems with TD ?

I would like to model an open system using chemical potential of  mobile elements as variables. I am using the variable LNA solely as I haven't found the chemical potential (RTlna) option. But for some reasons Domino never finishes (TOO MANY LINES comment after level 3)...

Any idea if this chemical potential option exists for TD (or if it will be integrated in the new release Doug was talking about a few comments ago) ?

Is there a way to determine the chemical potential value for an assemblage for a given PT condition with Theriak ?

Thanks

Bénédicte

---

## Erik Duesterhoeft
*2019-02-20 08:38 UTC*

You can run guzzler + explot after reaching LEVEL 0. Usually, there are 5 Levels. If you plot LEVEL 3, the diagram is already finished, except some lines which are not connected.

---

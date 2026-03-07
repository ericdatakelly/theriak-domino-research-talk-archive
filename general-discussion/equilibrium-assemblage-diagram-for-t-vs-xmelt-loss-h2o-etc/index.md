---
layout: topic
title: "Equilibrium assemblage diagram for T vs X(melt loss, H2O, etc)"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2015-11-09
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=17"
---

## diaslima
*2015-11-09 20:08 UTC*

Hi All,

I'm new to the forum and appreciate your time discussing the ideas and questions posted here.

I have the following question about the construction of equilibrium assemblage diagrams: 

I am trying to construct diagrams in the NCKFMASH system of equilibrium assemblages for a given (metapelite) bulk composition in function of temperature versus X melt loss at a given pressure. I was trying to do it by using theriak --> plotxy. In theriak, I set a calculation mode in the form "REMOVE phase %". In plotxy, I was trying to plot T vs moles (n) of melt removed (LIQtc) overlaid to some phases of interest in the residuum (e.g., quartz, biotite, etc). I'm affraid this was not working well. I was also wondering that a proper way to do it would be by using domino, and setting a "drv" file with the type of calculation I want to perform - i.e., REMOVE phase %. But I have no clue how to do it.

A reference for the type of diagram I'm interested to reproduce is in White and Powell. 2002. Melt loss and the preservation of granulite facies mineral assemblages. Jour Met Geol 20 (7). 

Any insight or advice would be very much appreciated!

Rodrigo

---

## mathias
*2016-02-03 14:09 UTC*

What you want to do is to caclculate a T-Xmelt with X0=no melt lost and X1=100% melt removed from the system. To construct such a diagram you need to define the chemical compositions for those end member scenarios in your THERIN file (have a look at the ther/dom documentation). Then you simply calculate a binary (BIN) phase diagram. For further details just have a closer look at the paper mentioned above or in the Korhonen 2010 paper.

---

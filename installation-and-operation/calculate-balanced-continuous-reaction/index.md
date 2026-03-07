---
layout: topic
title: "Calculate balanced continuous reaction"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2015-10-27
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=10"
---

## EricKelly
*2015-10-27 02:41 UTC*

Domino can output the stoichiometry of a balanced discontinuous reaction (option 3 for reaction labels), but not a continuous reaction.  One way to estimate stoichiometry is to run theriak at two P-T points and take the difference in moles (normalized to your favorite phase).  However, this is dependent on the locations of the two points and is probably best applied at points along a known P-T path.

Is there a different/better method for extracting a balanced continuous reaction using TD?

Eric

---

## Frank Spear
*2015-10-28 13:10 UTC*

Eric-

I agree. The stoichiometry for a reaction in which the phases change composition with P and T (whether continuous or discontinuous) is a function of the P&T and a given stoichiometry is only valid at the specified P&T. Moreover, the stoichiometry for a continuous reaction will vary depending on the P-T path. That is, the stoichiometry will be different if the path is isobaric or isothermal. But it is perfectly OK to get the stoichiometry by calculating the assemblage at two closely spaced points and subtracting. A general solution would be to calculate 3 points - one "base" P&T, one isobaric and one isothermal. Subtracting each from the "base" will provide two vectors from which the stoichiometry can be calculated along any P-T path by linear combination. A similar result can be obtained by calculating the Jacobian at the "base" P-T point, but Theriak doesn't have that code.

I would also recommend when writing the balanced reaction utilizing additive and exchange components. The additive components will specify how the moles (or volumes if you convert using the molar volume) of phases change and the exchange components will specify how each phase changes composition. If you don't do this then you end up with reactions such as .... biotite1 = biotite2 .... (e.g. the same phase on both sides of the reaction but with different compositions) and this formalism isn't too useful for determining how the modes change.

Frank

---

## sina
*2015-10-28 14:38 UTC*

Although I never used it for calculating stochiometry, but would calculating a pixelmap be a way of doing this? The pixelmap results contain the moles of each phase at every pixel in your P-T (or wathever) space. From this one could calculate the change in moles of phases from pixel to pixel.

Sina

---

## EricKelly
*2015-10-28 19:57 UTC*

Frank: Thanks for the comprehensive response.

Following Sina's comment, a pixel map could be useful if many determinations need to be made.  However, along a P-T path, a loop/drive file would probably be faster.  And of course for just two points, simply running theriak at each point would be fastest and easiest.

Eric

---

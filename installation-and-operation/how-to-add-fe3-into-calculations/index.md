---
layout: topic
title: "How to add Fe3+ into calculations"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2016-06-07
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=24"
---

## Alexandra Plumhoff
*2016-06-07 14:34 UTC*

Hello everybody,

I am working on Metapelites and use the Holland and Powell 1998 dataset.

But now I have some samples that are more oxidized, and I would like to calculate the diagram including Fe3+/Fe2O3.

How do I do this? How can I add Fe3+ to the composition (is it Fe3+(--)?) ? And what dataset should I use/works the best?

Thank you!

---

## EricKelly
*2016-06-08 18:22 UTC*

Have a look at the discussion in the dataset forum on Fe3+ and Ti (<https://research-talk.org/viewtopic.php?f=5&t=14>).  Basically, you can add a new element to your bulk composition and to the dataset file as long as you have appropriate phases and solution models defined to use the new element.  Doug has a dataset (tcds55_p07) that is setup for Fe3+ as "F3", so that might be a good starting point for you.  See the documentation at the top of his dataset file also.

Eric

---

## DougTinkham
*2016-06-08 21:26 UTC*

> How do I do this? How can I add Fe3+ to the composition (is it Fe3+(--)?) ?

The method for entering Fe+++ is dependent on the compositional format used in the thermodynamic dataset file used in your calculation. The default method, which is used by files shipped with Theriak-Domino, is to control valence state by explicitly controlling the amount of oxygen in the composition (of phase and system). For example, the composition of magnetite in the files shipped with TD is this:

FE(3)O(4) 

As you can see, there is only one type of Fe, FE. The ferric/ferrous is determined by the amount of Oxygen listed, as it always has a -2 charge.

Another approach that can be used is to consider Fe++ and Fe+++ as 2 different elements. In this case the composition of magnetite is given as:

FE(1)F3(2)O(4)

where FE is Fe++ and F3 is Fe+++. The ferric/ferrous in this case is stated directly, by F3/FE.

Both approaches work. The latter one is a little more convenient in cases where you want to fix ferric/ferrous and was originally formatted this way to help the program reach the correct solution (for older version of TD this was a bit of an issue I found; it seems recent versions it is less of an issue). There are cases where you want to use the former approach and not the latter approach. If your file uses the 1st approach above, control ferric iron using O in therin.txt. If your file uses the latter approach, you input FE and F3 values as desired, and can use O(?) to specify oxygen.

---

## Erik Duesterhoeft
*2016-09-19 08:01 UTC*

Hi,

I like Dougs dataset (tcds55_p07). At conferences, I saw many people using his dataset and refer to the dataset as "Doug Tinkham dataset". But, it's not. It's still based on Holland and Powell (1998) dataset + modifications.

More important:

Be aware, that if you use the tcds55_p07, you can not have reactions like

Hem = Mt + O2

---

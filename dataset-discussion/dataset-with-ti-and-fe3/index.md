---
layout: topic
title: "Dataset with Ti and Fe3+"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2015-10-29
post_count: 8
original_url: "https://research-talk.org/viewtopic.php?t=14"
---

## sina
*2015-10-29 16:37 UTC*

In the JUN92.bs dataset (Behrmann dataset) which comes with the Dom.-Ther. software, if I remember correctly it's mainly the phases rutile and ilmenite which can incorporate Ti. There is e.g. no Ti in biotite, so having Ti in your bulk chemistry will result in the growth of rutile/ilmenite-7etc. The Holland & Powell dataset (called tdc55 or similar) has e.g. a Ti in biotite, so Ti from your bulk chemistry could partition into biotite.

Depending on how much you trust the solution models for such things as Ti in biotite, and if you don't have too much Ti in your system, you could also set your Ti = 0 in your bulk chemistry, and use the JUN92 database.

---

## EricKelly
*2015-10-29 17:46 UTC*

For the Holland and Powell (1998) dataset, you might try Doug Tinkham's metapelite version (<http://dtinkham.net/peq.html>), which contains Ti phases and explicitly deals with Fe3+ (F3 in his dataset).  It is also well organized and documented!

Eric

---

## EricKelly
*2015-10-29 17:48 UTC*

**Let's continue the dataset portion of this thread in the other forum (<https://research-talk.org/viewtopic.php?f=5&t=14>)...**

---

## opxcpx
*2015-10-29 22:31 UTC*

Thank you Eric for sharing this link, downloaded and used today obtaining results that are much more consistent with oxidized migmatite gneisses we have been really struggling with. One thing I had to do was add the OHM buffer to Doug's file. I believe this is internally consistent with Doug's file (I copied OHM buffer, Magnetite and Hematite from the tcd55c2d file distributed with Theriak). Since Doug's file contains models (garnet, biotite, etc) that explicitly deal with Fe3+ will I have troubles by introuducing this buffer to the file? If anybody has thoughts on this I would appreciate it. 

Cheers,

Chris Andronicos

PS, note on why I need OHM buffer. The rocks are paragneisses from the Wet mountains with porphyroblastic hemtite, and contain garn+bio+kfs+qtz+plag+/-sill+/-crd. When you run domino with the whole rock composition you get olivine+pyx mineral assemblages because of the extreme iron contents (15-20%) and low silica (~50%). If you use OHM buffer you get better results, but I have never been able to come close on the modes or mineral compostions, but at least you get the minerals you see in the rocks. While I am still working on this, I think Doug's file does an even better job of approaching what we see in the rocks.

---

## sina
*2015-10-30 10:14 UTC*

I don't think you will get problems by introducing the OHM buffer to the dataset, because the only thing it does is setting the oxigen activity as a function of the buffer. However (as I just recently had a discussion about the usage of OHM buffers) I heard that if you do not observe both hematite and magnetite in your rock, you lack the justification for the usage of the OHM buffer on your assemblage.

Best,

Sina

---

## DougTinkham
*2015-10-30 21:31 UTC*

> Thank you Eric for sharing this link, downloaded and used today obtaining results that are much more consistent with oxidized migmatite gneisses we have been really struggling with. One thing I had to do was add the OHM buffer to Doug's file. I believe this is internally consistent with Doug's file (I copied OHM buffer, Magnetite and Hematite from the tcd55c2d file distributed with Theriak). Since Doug's file contains models (garnet, biotite, etc) that explicitly deal with Fe3+ will I have troubles by introuducing this buffer to the file? If anybody has thoughts on this I would appreciate it. .....

Hi Chris

I do not think that using the OHM buffer with a file that explicitly uses a ferric component is the correct approach to achieve exactly what you want/think. Presumably you are wanting to input FeOT and then specify an OHM buffer which would then allow predictions of ferric iron in your phases with ferric phase components. Is this correct?  If so, then unfortunately that file will not do what you want unless you also specified directly the ferric content of your system composition, and it is at that stage that I am uncertain on exactly what the implications are of using both the buffer and ferric system composition, so I don't do it.

If you need a file for ds55 that does not use an explicit ferric component, let me know. It is on my todo list....  The ds6 files I've constructed do not use an explicit ferric system component because I ran into issues when integrating sulfides in my calculations.

Doug

---

## opxcpx
*2015-10-31 00:36 UTC*

Hi Doug, 

Yes, indeed you have hit the nail on the head, and hence my question about using the buffer with models that deal with Fe3+ explicitly. The rocks contain a lot more Fe3+ than typical migmatites, hence the presence of hematite and magnetite porphs. Using tcdb55c2d on similarly oxidized rocks in the past I have had pretty good success using the OHM buffer. However, I have been unable to satisfactorally model these rocks. Undoubtably some of my problems are due to the fact that rocks have likely changed composition during melting (melt extraction/metasomatism). The peak mineral assemblage includes typical paragneiss minerals like sillimanite, cordierite, garnet, hercynite. However, if you run the compositions unbuffered you basically get a metabasalt because there is so much Fe and low silica. Using tcdb55c2d with the OHM buffer you get a better match, but the modes and the mineral compositions are very far from what is in the rocks, but at least no olivine. Similarly, the ds55 file I downloaded from your website gives similar results, hence my adding the OHM buffer to your file. Doing this, you get mineral asseblages and compositions that are closest to what is the rocks, and would normally be something I would be pretty happy with. But I am concerned about using Fe3+ models and a buffer, which you agree is likely not the right way to go. If I knew the Fe3+ amount, this would be an easier problem (maybe), but I only have total iron. 

A key issue in all of this is that the garnet is too Mn rich compared to the natural composition using both the out of the box database, and your ds55 file (using the buffer). This in part may be due to the presence of Mn3+, but this can't be the whole story, as the amount of garnet is also greatly under estimated. I think a lot of the problem revolves around Fe3+ effectively making the rock less "Fe" rich (there is a nice disscussion of this in Frank Spear's monograph). But it would seem like there ought to be a way to deal with this with the right models/thermodynamic data. 

I really appreciate your making your files avalble and look forward to a new release of TD with new shiny databases. 

Cheers,Chris

---

## DougTinkham
*2015-10-31 02:03 UTC*

> Hi Doug, Yes, indeed you have hit the nail on the head, and hence my question about using the buffer with models that deal with Fe3+ explicitly. The rocks contain a lot more Fe3+ than typical migmatites, hence the presence of hematite and magnetite porphs. Using tcdb55c2d on similarly oxidized rocks in the past I have had pretty good success using the OHM buffer. However, I have been unable to satisfactorally model these rocks.......

I personally do not like the idea of running with a 'buffer' in a case like this myself. The database and a-x models themselves have ferric components, so technically your 'buffer' is already present without specifying OHM, assuming your calculation actually predicts coexisting magnetite and hematite/ilmenite.

If you have not done so already, I'd remove the buffer and calculate T-Xferric sections to see if particular values of ferric/ferrous system composition achieves your observations in the rocks. I know Rob Berman has recently been looking at ferric iron and ilmenite relations, and might have a dataset file without the explicit Fe3+ component.

Doug

---

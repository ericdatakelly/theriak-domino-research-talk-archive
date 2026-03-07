---
layout: topic
title: "updated databases"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2015-10-28
post_count: 6
original_url: "https://research-talk.org/viewtopic.php?t=12"
---

## opxcpx
*2015-10-28 15:14 UTC*

Hi Folks, 

I was wondering if anyone had a version of the database used in Holland et al., 2012, or Jennings and Holland, 2015 (refs below) focused on mantle phases that will work in theriak-domino? I have been meaning to build this file for some time but have not had the time to impliment it as the translation from thermocalc files toTD files is pretty time consuming (if you don't code).  Also, does any one know of efforts to update the TD database with new thermodynamic data as it becomes avalible? This is a big job and one that that the thermocalc community seems to do well. Although any of us can alter the databases, I fear that this could lead to apples and oranges situations when comparing results using differently constructed databases. 

Cheers,

Chris Andronicos

Holland, T. J. B., Hudson, N. F. C., Powell, R. & Harte, B. (2013). New thermodynamic models and calculated phase equilibria in NCFMAS for basic and ultrabasic compositions through the transition zone into the uppermost lower mantle. Journal of Petrology 54, 1901–1920.

Jennings and Holland, 2015, A simple thermodynamic model for melting of peridotite in the system NCFMASOCr,  J. Petrology (2015),  doi: 10.1093/petrology/egv020

---

## EricKelly
*2015-10-28 20:07 UTC*

> Also, does any one know of efforts to update the TD database with new thermodynamic data as it becomes avalible? This is a big job and one that that the thermocalc community seems to do well. Although any of us can alter the databases, I fear that this could lead to apples and oranges situations when comparing results using differently constructed databases.
 

Doug Tinkham and Capi (Christian de Capitani) are working on the Holland and Powell (2011) dataset with updates through 2014, although I don't know how inclusive the updates are.  Keep an eye on Doug's web page (see Links page on this site), or maybe he will let us know here!

One reason I wanted to create this site was to help avoid the apples and oranges activity models/datasets.  Just starting this site is not a solution, but perhaps it will ease discussion of a way forward.

Eric

---

## DougTinkham
*2015-10-30 16:41 UTC*

I have a file for ds6.2 setup for the White et al. Mn-bearing metapelite paper models, and another one for the Holland et al. 2013 paper.

The White et al. file works great but requires an updated version of the Theriak-Domino software that is not released yet. The high-pressure file I have works to about 80 kbar pressure, but above that there are problems with one of the ordered activity models where TD does not give the same results as thermocalc. Whether thermocalc or theriak is correct, I am not 100% certain yet.

I will release my files once the new version of theriak-domino is released.

Doug

---

## opxcpx
*2015-10-31 00:44 UTC*

> I have a file for ds6.2 setup for the White et al. Mn-bearing metapelite paper models, and another one for the Holland et al. 2013 paper.
> 
> The White et al. file works great but requires an updated version of the Theriak-Domino software that is not released yet. The high-pressure file I have works to about 80 kbar pressure, but above that there are problems with one of the ordered activity models where TD does not give the same results as thermocalc. Whether thermocalc or theriak is correct, I am not 100% certain yet.
> 
> I will release my files once the new version of theriak-domino is released.
> 
> Doug

Hi Doug, This is great news, and I look forward to the release of these files. Thank you for doing this time consuming job.

---

## DougTinkham
*2015-10-31 03:00 UTC*

> ....
> The high-pressure file I have works to about 80 kbar pressure, but above that there are problems with one of the ordered activity models where TD does not give the same results as thermocalc. Whether thermocalc or theriak is correct, I am not 100% certain yet.

Actually, it works well to reproduce figurs in the Holland et al. 2013 paper up to 180 kbar, not 80 kbar as stated above.

---

## Thorsten_Nagel
*2015-11-12 08:25 UTC*

Last week, Capi and I worked a little on the Holland et al. (2013). It seems we can reproduce the high-pressure phases well but still have some troubles with the pyroxenes below 150 kb. I'll keep trying.

Best, Thorsten

---

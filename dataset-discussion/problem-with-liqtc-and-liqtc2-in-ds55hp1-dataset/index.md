---
layout: topic
title: "problem with LIQtc and LIQtc2 in ds55HP1 dataset"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2021-09-22
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=79"
---

## cog790
*2021-09-22 17:27 UTC*

Hello all, I am trying to use the database ds55HP1 to model a metapelitic assemblage with melt 
When I try to use Theriak or Domino I ran into this problem which says there is a problem with the external subroutine.

```
FATAL ERROR:
LIQtc2           :there is no data for Silica8.liq      in external subroutine
```

I see this database uses LIQtc2, and my fsol file (which I understand manages the external subroutines) only has LIQtc, LIQtc6 and LIQtc6F. I tried to manually change LIQtc, with LIQtc2 in fsol file, but still, the same error remains. Do you know what should I do with this file to fix this problem? I've checked the TD forum and the TD User Guide but I can't find any solution. 

This is a comment that my database has about this:

```
! Melt: LIQtc2
! Defined: White et al. 2007
! References:
! Notes: melt model.. hard coded model with foL & faL fixes.(updated Jan, 2013)
!    Older LIQtc model is improperly coded in Theriak/Domino and should not be used.
!    BMH: NEEDS TESTING. DOES RENAMEING LIQtc2 to LIQtc FIX THE PROBLEM OR CAUSE
!    THE INCORRECT VERSION OF THE MODEL TO BE USED?
!=======================================================
```

I'd appreciate any help!

![error.png]({{ '/assets/attachments/41_error.png' | relative_url }})

---

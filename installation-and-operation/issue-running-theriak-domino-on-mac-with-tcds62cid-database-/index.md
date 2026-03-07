---
layout: topic
title: "Issue Running Theriak-Domino on Mac with 'tcds62cid' Database File"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2022-09-28
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=92"
---

## larrytuttle
*2022-09-28 14:51 UTC*

Hi All,

I am running Theriak-Domino (T-D) version 11.02.2015 on my Mac laptop (OS Monterey version 12.5.1) and I have encountered an issue when trying to use the Holland & Powell ds6 file 'tcds62cid' from the T-D website. When I attempt to run either Theriak or Domino for a garnet-sillimanite-biotite quartzofeldspathic migmatite [SI(35.74)AL(15.46)TI(2.05)MG(9.74) FE(15.52)K(8.24)NA(6.30)CA(1.06)H(5.85)O(?)H(200)], I get the 'FATAL ERROR' message: ' ClAMg  :there is no data for tremolite      in external subroutine'. I get a similar message when trying to model a biotite-quartz-garnet-orthopyroxene ironstone [SI(51.10)AL(11.93)MG(10.59)FE(24.47)K(0.63)H(1.26)O(?)H(200)O(0.01)], but instead of tremolite, the error message is for cummingtonite. 

I have not modified the 'tcds62cid' thermodynamic database file in any way and I am able to successfully model these lithologies (i.e. produce pseudosection and garnet volume% isopleth diagrams) using the 'tcdb55c2d' file also from the T-D website. Has anyone else run into this same issue with the 'tcds62cid' database file? Perhaps this error is related to my current version not recognizing the tremolite or cummingtonite entries in the database file? This could possibly be the case as the 'tcds62cid' file certainly has entries for these two phases (tremolite and cummingtonite) listed. Any help would be most appreciated!

(Apologies if this issue has already been addressed elsewhere in the forum, but if it has, I was unable to find that discussion thread). 

Larry Tuttle

---

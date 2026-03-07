---
layout: topic
title: "JUN92d.bs different than JUN92.bs?"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2019-01-30
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=38"
---

## L.S
*2019-01-30 17:38 UTC*

I'm trying to produce some T-X diagrams with domino where X is CO2 using the JUN92d.bs database.

Now there is a helpful powerpoint of this process on the SERC website. However, when I try to replicate this, I get the error "the phase CO2 was not found in the database". I looked in the database and it's there under gas data and it isn't commented out. However, when you type the command "list" after the Domino command it displays several phase names and CO2 is not one of them. In trying to figure out the problem, I noticed that the SERC powerpoints use the JUN92.bs database and not the JUN92d.bs database.

So, the question is, am I making a mistake or cannot you not make T-X co2 diagrams anymore using the JUN92d.bs database? I have a similar problem trying to make binary phase diagrams in Therbin following the instructions in the manual (again, they use the JUN92.bs which apparently has different end members than the ones listed in JUN92d.bs)

---

## Erik Duesterhoeft
*2019-01-31 10:27 UTC*

Hi, I try to reproduce the figure of slide 5 of T-X_CO2.ppt (<https://serc.carleton.edu/research_education/equilibria/theriak-domino.html>) with JUN92d.bs (the version distributed with Theriak version 2017 and 2018) and it works. I don't know which version of JUN92.bs you are using, but generally they should be the same. The "d" in JUN92d.bs stands for "distributed" (by de Capitani).

the list command shows the following:

List of phase names (abbreviations)

```
-----------------------------------
A-QUARTZ (aQz)          AKERMANITE (Ak)         ALPHA CRISTOBALI (aCr)  ANTHOPHYLLITE (Ath)     ANTIGORITE (Atg)      
B-QUARTZ (bQz)          BETA CRISTOBALIT (bCr)  BRUCITE (Br)            CALCITE (Cc)            CARBON-DIOXIDE (CO2)  
  CHRYSOTILE (Chr)        COESITE (Cs)            DIOPSIDE (Di)           DOLOMITE (Do)           FORSTERITE (Fo)       
  HIGH TRIDYMITE (hTr)    HYDROGEN (H2)           LIME (Lm)               LOW TRIDYMITE (lTr)     MAGNESITE (Mst)       
  MERWINITE (Mw)          MONTICELLITE (Mo)       ORTHOENSTATITE (En)     OXYGEN (O2)             PERICLASE (Pe)        
  PROTOENSTATITE (pEn)    PSEUDOWOLLASTONI (pWo)  STEAM (H2O)             TALC (Tc)               TREMOLITE (Tr)        
  WOLLASTONITE (Wo)     
----------------------
```

---

## L.S
*2019-01-31 15:08 UTC*

Thanks for the reply,

I went to the home of TD (<https://titan.minpet.unibas.ch/minpet/theriak/prog170204/>) and redownloaded the Workings folder for Windows which contains the JUN92d.bs database. I copied it into the workings folder on my computer. When I enter the "list" command I get the following phases:

![365-3.jpeg]({{ '/assets/attachments/6_365-3.jpeg' | relative_url }})

---

## Erik Duesterhoeft
*2019-02-01 08:10 UTC*

Ok, your system seems to be  CaAlSi. Are you sure that C and H go through, because MEIONITE                CA(4)AL(6)SI(6)O(27)C(1)
is also not listed. Check your composition in your  OUT file to see if C and H were passed from THERIN to domino.

---

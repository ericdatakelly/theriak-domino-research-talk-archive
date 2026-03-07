---
layout: topic
title: "identifying amphibole end member present"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2021-02-08
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=70"
---

## bcrenshaw
*2021-02-08 02:58 UTC*

Hi,

I'm trying to determine the orthoamphibole end member represented in different sectors of my pseudosection but when I use theriak to do a spot check, it says the end member is "a3" or "b3" and I don't understand which end member this refers to. According to my database (tcds55_m11), these are the different end members possible:

```
OAMP11    (-SITE,MARGULES)1/2    A(2):v,Na - M4(4):Ca,Na,Mg,Fe - M13(6):Mg,Fe - M2(4):Al,F3,Mg,Fe - T1(2):Al,Si
anth             v,v - Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg - Si,Si       1  0  0  0
ged2             v,v - Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg,Mg,Mg - Al,Al,Al,Al - Al,Si       1.5  0  0  0
ompa1            Na,Na - Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg,Mg,Mg - Al,Al,Mg,Mg - Al,Si       1.7  0  0  0
omgl1            v,v - Na,Na,Na,Na - Mg,Mg,Mg,Mg,Mg,Mg - Al,Al,Al,Al - Si,Si       0.8  0  0  0
otr1             v,v - Ca,Ca,Ca,Ca - Mg,Mg,Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg - Si,Si       1  0  0  0
fanth2           v,v - Fe,Fe,Fe,Fe - Fe,Fe,Fe,Fe,Fe,Fe - Fe,Fe,Fe,Fe - Si,Si       1  0  0  0
omrb1            v,v - Na,Na,Na,Na - Mg,Mg,Mg,Mg,Mg,Mg - F3,F3,F3,F3 - Si,Si       0.8  0  0  0
a3               v,v - Fe,Fe,Fe,Fe - Mg,Mg,Mg,Mg,Mg,Mg - Fe,Fe,Fe,Fe - Si,Si       1  0  0  0
b3               v,v - Fe,Fe,Fe,Fe - Fe,Fe,Fe,Fe,Fe,Fe - Mg,Mg,Mg,Mg - Si,Si       1  0  0  0
```

If anyone could provide clarification on this I would appreciate it a lot! Thank you.

---

## jakub_haifler
*2021-02-09 14:42 UTC*

Hi. 
The endmembers a3 and b3 are involved in the solid solution model to handle ordering of Mg and Fe2+ in the M4, M13 and M2 sites, respectively. The expression of the thermodynamic model somewhat differs from the endmember systematics you know from mineralogy. If you recalculate your microprobe analyses, you do not probably know how Fe vs Mg (or other elements) are distributed among the sites. 
But, the complex thermodynamic model is formulated so that there are several "internal equilibria" in the solution model to be met apart from the equilibrium between amphibole and the other phases of the assemblage. 
I am not very much familiar with modelling amphibole and can not find a dataset with this A-X model of orthoamphibole. However, clinopyroxene (model by Green et al., 2007 or newer) is a similar example. One of the the "internal equilibria" in clinopyroxene is om  = 1/2 jd + 1/2 di, for which there is a value of enthalpy of ordering in the dataset. I.e. there is an additional constraint during the calculation, relating the chemical potentials of these endmembers to the distribution of the elements among subsites, which must be met. And the purpose of this constraint is to simulate ordering, i.e. to make the model more realistic than the equipartition models. Om is an ordered endmember in cpx, which simulates ordering of Na vs Ca at 2 subsites (and of Mg vs Al at different subsites). 
So, in the example with clinopyroxene, one could expect that Na content would correspond to the jadeite content (at least in NCFMASH). However, if the ordering is significant (this should occur at relatively low T), you will find 2 carriers of Na in the results of your calculation - jd and om. It should be helpful for you to have a look at how the solid solution model is expressed in the paper, i.e. the relationships between site occupancies and the endmembers. It could be more helpful to compare composition variables obtained from the calculation rather than endmember contents with your observed compositions. For example, your amphibole model will probably predict different Mg numbers at different sites. However, in practise, you will hardly be able to apply these values to your measured compositions. But you are able to get one Mg number for a single analysis as well as for a modelled amphibole composition (from the composition variables and site multiplicities) at particular P, T.     
Maybe someone else is more advanced to this topic than me (and could provide you with a more rigorous explanation), but I am not sure, whether you receive any other answer. So I hope this is helpful for you. 
Best regards, Jakub

---

## bcrenshaw
*2021-02-10 19:21 UTC*

Thank you Jakub, that was very insightful! I believe you're right and "a3" and "b3" are just varieties of anthophyllite that have distinct differences in how they order their M sites. 

I appreciate your help!

Bri

---

## jakub_haifler
*2021-02-10 20:00 UTC*

> **bcrenshaw wrote:**
> Thank you Jakub, that was very insightful! I believe you're right and "a3" and "b3" are just varieties of anthophyllite that have distinct differences in how they order their M sites. 
> 
> I appreciate your help!
> 
> Bri

They should correspond to the endmembers called amo1 and amo2 in the paper by <https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1525-1314.2007.00720.x?casa_token=atzGKQyl3fkAAAAA:yBP9xxpKvhko6bsWBhwYrCfkuq1kDWFsfYqtwMV8ow36D2HLcdeKzCU3ksR8ZRowHZHb4dzBiPC1fniYCw>, which is probably a base for the more recent model you are using (Diener et al. (2012)?). See e.g. Figs. 1, 3 in the 2007 publication showing that Mg and Fe2+ are unevenly distributed among the sites. And the inequality rises with decreasing temperature (every curve becomes more distant from a diagonal y=x in the plots).
Jakub

---

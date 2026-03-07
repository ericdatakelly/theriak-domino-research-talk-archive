---
layout: topic
title: "Over-prediction of OMPH"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2015-11-03
post_count: 8
original_url: "https://research-talk.org/viewtopic.php?t=15"
---

## WillM
*2015-11-03 10:36 UTC*

Hi All,

I'm new to the forum and glad it was created. I am having an issue and wanted to see if anyone has had similar issues and has a remedy. I am trying to construct diagrams for garnet-epidote-amphibolite samples. The  samples contain amp, ep, grt, pg, ph, rt, ilm, ttn, qz, ab ± hm. When constructing the diagrams, I calculate in the NCKFMASH system with quartz and water as excess phases. I have used both the JUN92.bs and HP98TT files, both having the similar problem of Cpx being predicted in every field (even at low pressures), despite no evidence of Cpx relics. I'm wondering if it is an issue with measured iron content of the whole-rock data. Any advice would be very much appreciated!

Cheers,

William

---

## pierre.lanari
*2015-11-05 09:24 UTC*

Hi William, 

As you probably well know, THERIAK models the stable mineral assemblage at P and T, assuming that the entire system with the given bulk rock composition reacts and achieved equilibrium. However in your sample you have phases such as garnet that are probably metastable at low pressure. Such relicts are isolated from the reactive part of the rock and must be subtracted from the bulk rock composition in order to derive a local effective bulk composition. If your samples preserves phases showing strong compositional zoning, i.e. recorded several P-T stages, then an equilibrium phase diagram must be used to constrain only one single P-T stage.

We successfully modeled the sequence of crystallization of cpx at low pressure (using JUN92.bs) in a highly retrogressed eclogite from the Western Alps. It is amazing how accurate are the model cpx compositions. In that case we used standardized X-ray maps to both (i) caracterize the composition of the reactive part of the rock at low pressure and (ii) derive local effective bulk compositions. 

Cheers, 

Pierre

---

## WillM
*2015-11-12 07:20 UTC*

Hi Pierre,

Thank you for the response. The garnet in the garnet-epidote-amphibolite has a relatively flat compostional zoning profile. The strongest zoned phase seems to be amphibole, which goes from a more pargasitic composition to hornblende in the rim. I guess I am a little bit confused on the process of acquiring a local effective bulk composition. Once x-ray maps have been produced, was there a certain software you used to acquire modal phase percentage and then calculate a bulk composition based on average mineral composition? Any suggested readings that may help? Thanks again!

All the best,

William

---

## Thorsten_Nagel
*2015-11-12 08:46 UTC*

Dear William,

both databases overestimate cpx-stability compared to amphibole and epidote. The reason is that important components in amphibole and epidote are not considered. Fe3+ stabilizes ep - do you account for that? There are several ways but the easiest is to just add some extra O to the bulk. Solution models considering Fe3+ endmembers for amphibole and pyroxene  in the Ho+Po -database are not very robust. Addding O will somewhat promote cpx compared to amph. Neither database accounts for Ti or K in amphibole, which leads to a dramatic underestimation of amphibole stability at high temperatures if these components are present. But for your problem on the low temperature side, adding O might do the trick. In some special cases cpx is also promoted as the modeled bulk has a too high Ca-(Ca+Fe+Mg) ratio. If a rock contains e.g. a lot of apatite or calcite then a P- or C-free model bulk has to store Ca somewhere else. You can remove some Ca from the input bulk based on your XRF information.

Best, Thorsten

---

## pierre.lanari
*2015-11-12 10:21 UTC*

> I guess I am a little bit confused on the process of acquiring a local effective bulk composition. Once x-ray maps have been produced, was there a certain software you used to acquire modal phase percentage and then calculate a bulk composition based on average mineral composition? Any suggested readings that may help?

Hi William,

Some readings that may help: Lanari, P., Vidal, O., De Andrade, V., Dubacq, B., Lewin, E., Grosch, E., Schwartz, S. (2014). XMapTools: a MATLAB©-based program for electron microprobe X-ray image processing and geothermobarometry. Computers and Geosciences. 62, 227-240 (<http://pierre-lanari.com/wp-content/uploads/2013/11/2014_Lanari-CGeo.pdf>)

And a program: <http://www.xmaptools.com/>

More details regarding the specific problem of "determining local compositions" will be published with the next XMapTools release within a couple of weeks. 

Cheers 

Pierre

---

## rmpalin
*2015-11-13 14:39 UTC*

> Hi Pierre,Thank you for the response. The garnet in the garnet-epidote-amphibolite has a relatively flat compostional zoning profile. The strongest zoned phase seems to be amphibole, which goes from a more pargasitic composition to hornblende in the rim. I guess I am a little bit confused on the process of acquiring a local effective bulk composition. Once x-ray maps have been produced, was there a certain software you used to acquire modal phase percentage and then calculate a bulk composition based on average mineral composition? Any suggested readings that may help? Thanks again!All the best,William

William,

We discuss the issue of accurately determining effective bulks (and other sources of uncertainty in the phase diagram modeling process that relate to bulk-composition determination) in our recent paper in Geoscience Frontiers:

<http://www.sciencedirect.com/science/article/pii/S167498711500095X>

It's open access and has a downloadable spreadsheet that can assist in the bulk-composition determination calculations you refer to.

Good luck!

Richard

---

## WillM
*2015-11-18 03:02 UTC*

Hi All,

Thanks for the very helpful tips. The addition of O to the bulk worked well and I am getting much better results. As for determining the effective bulk composition, the process is something I am new to and will try to work with. 

Thanks again!

William

---

## Erik Duesterhoeft
*2017-04-05 12:12 UTC*

I found a mistake in OMPH solid solution model of Meyre et al. (1997), which is implemented in JUN92.bs. The Margules of Jadeite-Hedenbergite are mixed up (see Table 3 of Meyre et al. (1997) and Massone(1995),UHPM, Camb Univ Press, p. 33-95). Although Table 3 of Meyre et al. (1997) is correct, Fig. 2 was already calculated with the mixed-up Margules and thus Fig. 2 is incorrect.

Please change:

```
*****  SOLUTION DATA  *****       Omphacite, Meyre et al. (1997)
	OMPH    (MARGULES,IDEAL)
	     DIOPSIDE
	     JADEITE
	     HEDENBERGITE
*****  MARGULES PARAMETER  ******
	JADEITE - DIOPSIDE
	112        25587.5749         15.9243          0.0000          0.0000          1.0000
	122         5920.2458         10.7164          0.0000          0.0000          1.0000
	DIOPSIDE - HEDENBERGITE
	112        31448.6254         28.8272          0.0000          0.0000          1.0000
	122       -65167.1449        -45.4535          0.0000          0.0000          1.0000
	**! JADEITE - HEDENBERGITE ! wrongly implemented, corrected by eduester
	HEDENBERGITE - JADEITE**
	112        3670      9    0       0    1
	122       15090      8    0       0    1

	! Jd-Hd from Massonne (1992)
	!
```

---

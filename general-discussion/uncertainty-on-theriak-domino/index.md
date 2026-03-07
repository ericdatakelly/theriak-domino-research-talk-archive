---
layout: topic
title: "Uncertainty on Theriak-Domino "
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2020-04-06
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=53"
---

## Ruiguang Pan
*2020-04-06 21:09 UTC*

Hello Everyone,

My question is about how to calculate/obtain the uncertainty of a phase line, invariant point, or a P-T point received by mineral isopleth joint in a TD constructed pseudosection? for example, if a garnet composition (XFe, XCa, and XMg) projected to 550C and 20kbar in the pseudosection, what's its uncertainty?

Thank you!

Pan

---

## pierre.lanari
*2020-04-07 06:57 UTC*

Dear Pan,

This is a complicated question and I am afraid there is no simple answer. You are using a bulk rock composition and thermodynamic data and you want to compare the modeled mineral compositions with the observations (e.g. EPMA analysis). There are several sources of uncertainty that need to be considered.

- **"Analytical uncertainty" on the observed mineral compositions (EPMA analysis)**. Usually we don't know the total uncertainty of EPMA analyses, but we can approximate the relative uncertainty using counting statistics. You need to know the net intensity (peak-background) for each X-ray line considered and calculate the related uncertainty assuming a Gaussian distribution. I give the equation in my paper Lanari et al. (2017). Then you need to propagate this uncertainty on the oxide weight percentage to the structural formula. Personally, I use Monte-Carlo as I am not aware of any analytical solution. An example of result is given in Table 2 of Lanari et al. (2019). In this example, the relative uncertainty on the end-member fractions of garnet is Xalm: 0.746 ± 0.012; Xprp 0.085 ± 0.011; Xsps 0.026 ± 0.002 and Xgrs 0.143 ± 0.008. These are relative uncertainties only. The propagation of systematic uncertainties would require a set of secondary standards.
- **"Model uncertainty" in the thermodynamic data including solution models**. To be fully honest, this uncertainty remains largely unknown in the case of internally-consistent databases. There are authors who reported pseudo-uncertainties for the enthalpy values of end-members but the statistical evaluation is far from being robust enough. I can recommend the excellent discussion in Engi, (1991) on this topic. The only way to derive reliable uncertainties for standard state properties would be by mapping the feasible region and using a Bayes analysis. This is relatively straightforward for pure phases (e.g. Chatterjee et al. 1998) but the problem gets very complicated when solid solutions are involved. Nobody to my knowledge published a detailed Bayes analysis involving complex solid solutions. So we have to ignore this source of uncertainty for now. This is why the absolute uncertainty of isopleth thermobarometry is probably as any other technique around ± 50 °C and 0.2 GPa. But often we are more interested in relative uncertainties while using a thermodynamic database (Worley & Powell, 2000).
- **"Analytical uncertainty" in the bulk rock composition used as input in the model**. Of course, any minor change in the bulk rock composition could cause a shift of your isopleths in P-T for a rock that was not fully re-equilibrated (see below). Again, this is hard to evaluate, as you don't know the uncertainty on your XRF bulk rock analysis. What I can talk about is if you use local bulk compositions derived from quantitative compositional maps. In this case, the uncertainty of large domains is pretty small and do not affect significantly the model output. See the example in Figure 11-12 from Lanari & Engi (2017). The uncertainty on the bulk composition is reported in Table 2. The resulting uncertainty on the modeled composition of phengite is: Si4+ = 3.481 ± 0.002 apfu (2sigma) and XMg=0.874 ± 0.008. Pretty small figures for a 2 sigma range, but this is only valid if the selected domain is large enough and homogeneous (see below).
- **"Theoretical uncertainty" on the model assumptions**. When using Theriak-Domino with the bulk rock composition, you assume that the rock volume under investigation was well equilibrated at a specific metamorphic stage and was prevented from re-equilibration during exhumation and cooling (minimum Gibbs energy state). This is rarely the case in nature, as testified by the presence of metamorphic relics or domainal reactions, which suggest that re-equilibration occurred locally and phases are not participating to the reactions. We have provided several examples based on compositional maps in Lanari & Engi (2017) and Lanari & Duesterhoeft (2019). If garnet is involved, you often need to approximate a reactive bulk composition for every growth stage (e.g. Evans et al. 2004; Konrad-Schmolke et al. 2006; Fig 3 in Lanari & Engi 2017 to see how this reactive bulk composition changes when garnet is growing). The isopleth positions can be significantly affected, as are in this case the P-T estimates (Tab 1 in Lanari & Engi 2017).
- **The problem of weighting**. Finally, if you can approximate the relative uncertainty on the end-member fractions (see point 1 above), ignore the uncertainty on the thermodynamic data (point 2), the propagation for obtaining P-T uncertainties is not straightforward at all in case of 4 end-members (garnet). I have proposed a technique in Lanari et al. (2017) that includes a weighting scheme. As the shape is not elliptic, I proposed a search routine along 8 directions to map the objective function. We have now improved this technique by adding a Monte Carlo exploration subroutine; it will be soon published and integrated in our software solution Bingo-Antidote. The approach of Lanari et al. (2017) is far from being perfect, but it is a first step. We also provided an example in Figure 11 of Lanari & Duesterhoeft (2019). Two solutions are statistically identical if the uncertainties on the mineral compositions are taken into account (Fig. 11d). Visually everyone would pick up S1 and ignore the fact that Xprp is far away from its analytical uncertainty.

Well, as you can see there is no simple answer to your question, but I am glad you asked as this is not considered in most publications. I can also propose you the following reference: Kohn & Spear (1991) for a discussion on the geological uncertainties and Waters & Lovegrove (2002); Pattison & Tinkham (2009); Pattison et al. (2011); Carlson et al. (2015) for some important kinetic considerations.

Best wishes, 
Pierre

**References**:
	

- Carlson, William D., Pattison, David R.M., & Caddick, Mark J. (2015). Beyond the equilibrium paradigm: How consideration of kinetics enhances metamorphic interpretation. American Mineralogist, 100(8-9), 1659-1667. doi: 10.2138/am-2015-5097
- Chatterjee, N.D., Krüger, R., Haller, G., & Olbricht, W. (1998). The Bayesian approach  to an internally consistent thermodynamic database: theory, database,  and generation of phase diagrams. Contrib. Mineral. Petrol., 133, 149-168.
- Engi, M. (1992). Thermodynamic data for minerals: A critical assessment. In G. D. Price & N. L. Ross (Eds.), The Stability of Minerals (Vol. 3, pp. 267-328). London: Chapman & Hall.
- Evans, T.P. (2004). A method for calculating effective bulk composition modification due to crystal fractionation in garnet-bearing schist; implications for isopleth thermobarometry Journal of Metamorphic Geology, 22, 547-557.
- Konrad-Schmolke, M., O’Brien, P.J., De Capitani, C., & Carswell, D.A. (2008). Garnet growth at high- and ultra-high pressure conditions and the effect of element fractionation on mineral modes and composition. Lithos, 103(3-4), 309-332.
- Kohn, M J, & Spear, Frank S. (1991). Error propagation for barometers; 2, Application to rocks. American Mineralogist, 76(1-2), 138-147.
- Lanari, P, & Engi, M. (2017). Local bulk composition effects on mineral assemblages. Reviews in Mineralogy and Geochemistry, 83, 55-102.
- Lanari, P., Giuntoli, F., Loury, C., Burn, M., & Engi, M. (2017). An inverse modeling approach to obtain P-T conditions of metamorphic stages involving garnet growth and resorption. European Journal of Mineralogy, 29, 181-199.
- Lanari, P, Vho, A, Bovay, T, Airaghi, L, & Centrella, S. (2019). Quantitative compositional mapping of mineral phases by electron probe micro-analyser. In S. Ferrero, P. Lanari, P. Goncalves & E. G. Grosch (Eds.), Metamorphic Geology: Microscale to Mountain Belts (Vol. 478, pp. 39-63): Geological Society of London, Special Publications.
- Lanari, P., & Duesterhoeft, E. (2019). Modeling Metamorphic Rocks using Equilibrium Thermodynamics and Internally Consistent Databases: Past Achievements, Problems and Perspectives. Journal of Petrology, 60, 19-56. doi:0.1093/petrology/egy105
- Pattison, D. R. M., & Tinkham, D. K. (2009). Interplay between equilibrium and kinetics in prograde metamorphism of pelites: an example from the Nelson aureole, British Columbia. Journal of Metamorphic Geology, 27(4), 249-279. doi: doi:10.1111/j.1525-1314.2009.00816.x
- Pattison, D. R. M., De Capitani, C., & Gaidies, F. (2011). Petrological consequences of variations in metamorphic reaction affinity. Journal of Metamorphic Geology, 29(9), 953-977. doi: 10.1111/j.1525-1314.2011.00950.x
- Waters, D. J., & Lovegrove, D. P. (2002). Assessing the extent of disequilibrium and overstepping of prograde metamorphic reactions in metapelites from the Bushveld Complex aureole, South Africa. Journal of Metamorphic Geology, 20(1), 135-149. doi: 10.1046/j.0263-4929.2001.00350.x
- Worley, B , & Powell, R. (2000). High-precision relative thermobarometry: theory and a worked example. Journal of Metamorphic Geology, 18(1), 91-101. doi: 10.1046/j.1525-1314.2000.00239.x

---

## Ruiguang Pan
*2020-04-07 07:52 UTC*

Hi Dr. Lanari,

Thank you so much for your explanation and the papers. It's much more complicated than I thought, but now I know where those uncertainties come from.

Pan

---

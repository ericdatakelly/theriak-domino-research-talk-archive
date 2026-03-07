---
layout: topic
title: "Pixelmap data file names and what they mean"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2019-04-24
post_count: 3
original_url: "https://research-talk.org/viewtopic.php?t=48"
---

## Kurt Hollocher
*2019-04-24 18:42 UTC*

I'm a newcomer to Theriak-Domino. I have been trying out the meta-mafic rock database td-6axNCKFMASHTOm45, on D.K. Tinkham's web site.

I would like to use and manipulate the _pixelmaps output, but I'm having trouble figuring out what the file names mean. Some parts are easy, I think: n_ is number of moles of a phase, rho_ is phase density, V_ and vol_ are phase volume, wt_ is weight fraction, and x_ is molar fraction, for example.

However, what about these:

Al_pfu_[alm]  Is this Al per formula unit in almandine, I guess, but is that the same thing as the GRTW14 garnet solid solution model in the database?

x_a_[b] is the molar fraction of a in b, I suppose, but what is a and b?

I hope this is enough to show my problem. Is there a set of instructions or a list somewhere for parsing those pixelmap file names?

Thank you.

Kurt

---

## JReche
*2019-04-25 11:09 UTC*

Hi Kurt,

Greetings from Barcelona. At Universitat Autonoma de Barcelona (UAB) we use your great examples of nice hand designs of thin sections. I show them every year to my Metamorphic Petrology undergraduate students. Although they continue using the mobile right on top of the microscope ocular, I think they end by doing some good hand designs.

Well I write because I had exactly the same problem. As I understand, the correct nomenclature would have been x_endmember_phase, but in the pixmap folder (or when you calculate isopleths) the nomenclature used is always x_endmember_phase named with the endmember that is dominant in a given P-T field,

so if in the full P-T region of your calculated P-T range the amphibole is, let's say rich in parg1 then the variables that would appear in pixelmap folder will be:

x_tr_parg1, xts1_parg1,..... x_parg1_parg1.... etc. The last name was particularly tricky to me until I understood it.

It means molar fraction of end member parg1 in an amphibole phase that is rich in parg1, so this amphibole is named parg1 (instead of amph, for example).

so in your case x_a_b means (I think) the molar fraction of end member a in an amphibole that is rich in end-member b and so it is named b, like this dominant end-member..

a and b are (accordint to the solution model in the database):

a             v,v - Mg,Mg,Mg,Mg,Mg,Mg - Fe,Fe,Fe,Fe - Fe,Fe,Fe,Fe - Si,Si - OH,OH,OH,OH    1       0       0       0

b             v,v - Fe,Fe,Fe,Fe,Fe,Fe - Mg,Mg,Mg,Mg - Fe,Fe,Fe,Fe - Si,Si - OH,OH,OH,OH    1       0       0       0

What I would like to know is:

a) What are the criteria to decide that the phase amphibole must be called b or parg1 or whatever of the endmember names ?. Is that compatible with the last amphibole nomenclature ?

b) Supose you have some amphibole microprobe analyses. You look at the pixelmap folder and the variable that you whant to tests the model againts the measure is not on the list of variables. I supose it is easy to generate a new file with the new variable as combination of some of the listed ones. So how to recast the amphibole microprobe analyses into compatible with the solution model usded structural formulas. Otherwise the comparison measured vs. calculated is problematic. I have some possible solutions but I prefer if anyone can set another discussion so not to mess the one we have now.
 
I think there is not at present a clear statement (in Theriak-Domino manual) about what this x_a_b, x_tr_parg1,...etc. mean

I hope to have given help
 

J. Reche

Dept. of Geology. UAB. Barcelona

---

## Kurt Hollocher
*2019-04-29 19:35 UTC*

With the helpful advice of J. Reche, particularly the (to me) strange concept of replacing the solution model name with the most abundant solution model end member, I’ve been able to work out the procedure. The _pixelmaps file name code, for example, x_a_[parg], means: molar fraction of _ end member a in solution model CAMPG16 _ in CAMPG16. If you look up CAMPG16 in the thermodynamic database file 6axNCKFMASHTOm45, sure enough, there is end member a, end member parg, and several others. The end member formulae are defined according to site (A, M4, M1,3, M2, T, OH = V, though in an odd order), with the content of each of those sites clearly defined (though, also oddly, doubled from the usual amphibole formula). Once you see that, it becomes clear that the amphibole formula can be calculated as a linear combination of the model abundance of each end member in a solution, and the number of each element in each end member definition (divided by two). It also explains negative abundances, which puzzled me at first, which can be thought of as working like exchange components (for example, FeSiO3 + MgFe-1 = MgSiO3).

Here is a table showing the CAMPG16 end members in one of my model amphiboles reported in _pixelmaps. (two end members missing because I removed K and Ti from the system). Shown in the table are the end members (column headings) and their site contents (row labels). The last row, Amph, is the model amphibole example. Fe = Fe2+, F3 = Fe3+.

```
Site	a	b	cumm1	gl1	grun1	mrb	parg1	tr	ts1
A	[]	[]	[]	[]	[]	[]	Na	[]	[]
M4	Fe2	Fe2	Mg2	Na2	Fe2	Na2	Ca2	Ca2	Ca2
M1,3	Mg3	Fe3	Mg3	Mg3	Fe3	Mg3	Mg3	Mg3	Mg3
M2	Fe2	Mg2	Mg2	Al2	Fe2	F32	Mg2	Mg2	Al2
T	Si8	Si8	Si8	Si8	Si8	Si8	Si6Al2	Si8	Si6Al2
Amph	-0.139	0.06	0.029	-0.139	0.162	0.168	0.891	-0.393	0.361
```

To calculate Mg in the formula, it’s simply, in order of end member:

-0.139*3 + 0.060*2 + 0.029*7 + -0.139*3 + 0.162*0 + 0.168 * 3 + 0.891*5 + -0.393*5 + 0.361*3 = 3.567 Mg per 23-oxygen formula unit (plus rounding error).

That amphibole ends up having the following number of each element in the formula:

```
Na      Mg      Al      Si      Ca      Fe      F3      Total
0.948   3.567   2.949   5.494   1.718   0.877   0.336   15.891
```

I’m glad that wasn’t harder.

Kurt

(<http://minerva.union.edu/hollochk/td/files/pixelmaps_example.txt>)

---

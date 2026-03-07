---
layout: topic
title: "Read error for solution models with large multiplicities"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2021-04-22
post_count: 7
original_url: "https://research-talk.org/viewtopic.php?t=72"
---

## dolejs
*2021-04-22 15:18 UTC*

Dear all, 

I have noticed that a solution model with very large site multiplicities are not correctly read and interpreted in Theriak.  Here is an example - serpentine solid solution:

!------------------------------ Serpentine --------------------------------------
! Padron-Navarta et al. 2013
*****  MINERAL DATA  *****
fantigorite           SI(34)FE(48)O(147)H(62)    fatg          1nh        
ST              0.0            0.0           0.0           0.0
COM    antigorite[1]Mg-talc[-16]Fe-talc[16]
tsantigorite          SI(30)AL(8)MG(44)O(147)H(62)     tsatg     1nh
ST              0.0        -2000.0          46.1           0.0
COM    clinochlore[4]antigorite[9/17]brucite[-24/17]
*****  SOLUTION DATA ******
SERP     (-SITE,IDEAL)4     M0(11):Mg,Fe - M1(1):Mg,Fe,Al - T1(2):Al,Si
antigorite        Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg - Mg - Si,Si
fantigorite       Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe - Fe - Si,Si
tsantigorite      Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg - Al - Al,Si

Notice that the multiplicities of 44, 4 and 8 are used as 11, 1 and 2, with a factor of 4 beforehand. 

Theriak reads this incorrectly (probably formatting issue or overflow of number of substituting elements?), see the long output:

5  SERP             :            solution model:  "ideal"  3 site mixing                                                          
info: site mixing                                                                     
antigorite         [M0]:Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Fe   [M1]:Mg   [T1]:Si,Si                                                
fantigorite        [M0]:Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe,Fe   [M1]:Fe   [T1]:Si,Si                                                
tsantigorite       [M0]:Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg,Mg   [M1]:Al   [T1]:Al,Si                                                

1  antigorite       ( 76)   A(atg) = (    28.53 *  X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] *   

X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Fe(M0)] * X[Mg(M1)] * X[Si(T1)] *    

X[Si(T1)] ) ** 4.000                                                                    

2  fantigorite      (114)   A(fatg) = (     2.85 *  X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] *  

X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M0)] * X[Fe(M1)] * X[Si(T1)] *   

X[Si(T1)] ) ** 4.000                                                                   

3  tsantigorite     (115)   A(tsatg) = (     4.00 *  X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * 

X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Mg(M0)] * X[Al(M1)] * X[Al(T1)] *  

X[Si(T1)] ) ** 4.000                                                                  

So, elements are incorrectly read and assigned to sites, consequently the normalization constant for the end-member activity is incorrect and the Gibbs-Duhem test failed.  

Any cure for this? (I am using Theriak Win 29.11.2016)

All the best,
David

---

## pierre.lanari
*2021-04-22 15:29 UTC*

Hi David, 

Would the splitting of the M0 site into M01 and M02 solve your problem?

I have the following model that I benchmarked against Perple_X in 2019.  

Cheers, 
Pierre

**** MINERAL DATA ***** 
antigorite           SI(34)MG(48)O(147)H(62)     atg          48nh
ST              0.0  -71424920.000      3591.0000       175.4800
C3       9621.00000     -0.0911830    -35941600.0     -83034.200           0.00
VHP     0.000047000          525.0         0.0000           0.00        0.00000
VH2         10.0000         4.0000   -0.000078750
FeAntigorite         SI(34)FE(48)O(147)H(62)    fatg           48nh
ST              0.0         00.000         0.0000         0.0000
COM   antigorite[1]Mg-talc[-16]Fe-talc[16]
antigoriteTs         SI(30)AL(8)MG(44)O(147)H(62)    atgts           48nh
ST              0.0       -2000         -46.1         0.0000
COM   clinochlore[4]antigorite[9/17]brucite[-24/17] 
!
!
!
*****  SOLUTION DATA  *****  PN
SERP     (-SITE)4   T1(2):Si,Al - M1(1):Mg,Fe,Al - M01(6):Mg,Fe - M02(5):Mg,Fe
antigorite             Si,Si - Mg - Mg,Mg,Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg,Mg
FeAntigorite           Si,Si - Fe - Fe,Fe,Fe,Fe,Fe,Fe - Fe,Fe,Fe,Fe,Fe
antigoriteTs           Si,Al - Al - Mg,Mg,Mg,Mg,Mg,Mg - Mg,Mg,Mg,Mg,Mg

---

## dolejs
*2021-04-22 16:27 UTC*

Hi Pierre,

thanks for this useful and correct suggestion -- this of course solves the problem. 

I have noticed in your definition of the Ts-antigorite a negative entropy (-46.1), are you sure that it should not be an opposite value (+46.1)?  

Cheers,
David

---

## pierre.lanari
*2021-04-23 06:02 UTC*

Hi David, 

After running again my benchmarking test this morning, I confirm that the entropy correction term must be -46.1 in Theriak to reproduce Perple_X' results. Sounds like the programs are using a different sign convention for the -TS term.

You can find the results of my tests and the database here if you're interested: <https://cloud.cpag-research.ch/index.php/s/fzJpWyMwi7JShXO> 

I hope this helps.

best, 
Pierre

---

## YiBing Li
*2021-04-23 07:21 UTC*

Dear Pierre and dolejs, 
Prof. Pierre is right, i once asked Prof. de Capitani the same question and he explained this as follows:
" With the THERMOCALC database it becomes clear, that the "-" is needed.
DQF has three parameters a,b, and c.
The correction is a + b*T + c*P (1)          (note the plus)
where a is in [KJ/mol], b in [KJ/mol/degree] and c in[KJ/mol/KBar]
T is in [degree] and P in [KBar]

the ST line in Theriak has four parameters G0, H0, S0 and V0 (G0is not usually used)
the formula is H0 - S0*T + V0*P (2)            (note the minus)
where H0 is in [J/mol], S0 in [J/mol/degree] and V0 in [J/Bar]
T is in [degree] and P in [Bar]

Comparing (1) and (2) :
H0 = a*1000
S0 = -b*1000
V0 =  c
"
Kind regards,
Blakelee, PHD student

---

## dolejs
*2021-04-23 07:38 UTC*

Dear Pierre & Blakelee,

yes, Pierre is right, the sign convention is reversed.  Checking the Gibbs energy values in both codes with +46.1 vs. -46.1 in the end-member definition shows that "make" in Perplex/Frendly uses G = ... + T * value, whereas the "ST" in Theriak uses G = ... - T * value. 

The reason for my comment to Pierre yesterday was that the paper by Navarta et al. 2013 states: 
"The entropy of the atgts endmember was raised by 8Rln (2) to account for the configurational entropy of Al and Si mixing in T1.", which automatically lead me to assume that the entropy of the defining reaction (from clin, atg and br) should be positive.  Two comments on this:

1. Since Navarta has most likely used Perplex for producing their model and paper, I would tentatively keep the Perplex entropy, although the opposite.  At the end, for this unusually large formula unit, it probably make nearly negligible difference.

2. Adding the above configuration entropy makes little by itself because one of would have to subtract a large configuration entropy from the clinochlor end-member (I do firmly believe, although it is completely a matter of personal taste where one or another petrologist draws the baseline for the mechanical Gibbs energy surface).

I copy this message to Jamie Connolly to see if he wants to comment on this.

All the best,
David

---

## dolejs
*2021-04-23 12:26 UTC*

Dear all,

just to close the serpentine model off (response from Jamie Connolly): the sign discrepancy between the Navarta et al. 2013's paper and the Perplex code in the entropy definition of the Tschermak-antigorite has already been noticed by others, and the original model was calibrated as it is coded in the Perplex. So, the preferred version for the Theriak script is with ST ... -46.1 (as Pierre has already used). 

Thanks for your help!
David

---

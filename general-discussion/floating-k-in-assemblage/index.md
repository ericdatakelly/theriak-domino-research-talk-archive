---
layout: topic
title: "Floating 'K' in assemblage"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2021-06-24
post_count: 8
original_url: "https://research-talk.org/viewtopic.php?t=77"
---

## WillM
*2021-06-24 09:12 UTC*

Hello All,

I was recently trying to model a high-pressure metapelite and within all the assemblages I get a floating 'K' (e.g., GRT (2)WM BI14 K H2O q ru). I am using the td-ds62-mp50-03 data set and am unable to find 'K' as an abbreviation for anything. Does anyone know what this means? Thanks!

Will

---

## YiBing Li
*2021-06-26 09:16 UTC*

Hi Will,

Could you please upload the bulk composition file so that we may reproduce the error and find out what's wrong? I guess you assign too much K content in the input file to leave the excess K.

Kind regards!
Blakelee, PHD student

---

## WillM
*2021-06-28 08:20 UTC*

Hi Blakelee,

Thanks for the response. Below are my calculations (bulk+THERIN input; it wasn't letting me attach the .xls file I had it on). I have added Qz and H2O to the calculation, as Qz was texturally stable throughout the history of the sample, as was white mica. I also tried to do the calculations on another HP metapelite and got the same floating K. Unfortunately, calculations take ~12 hrs.

```
SiO2	        TiO2     Al2O3	FeO*	     MnO	     MgO	CaO	  Na2O	K2O	  Total
56.41	0.9	    21.61	7.86	     0.141	     2.32	1.3	  2.07	3.98	  96.591

THERIN Input										                                                               +Qz+H2O			
Si	        Ti	        Al	        Fe	        Mn	        Mg	        Ca	        Na	        K	        O	        H	O	Si	O
55.019	0.660	24.839	5.769	0.116	3.373	1.358	3.914	4.952	163.665	60	30	30	60
```

Any suggestions you have would be greatly appreciated.

Best regards,
William

---

## YiBing Li
*2021-07-01 13:23 UTC*

Hi Will,
Sorry for my late response! I use your bulk info: 
`0  MN(0.116)NA(3.914)CA(1.358)K(4.952)FE(5.769)MG(3.373)AL(24.839)SI(55.019)TI(0.660)H(60)SI(30)O(?)   * ` as input file and run Theriak.exe randomly to check the output results, it seems everything goes well and i havn't find a 'K' phase as you said.

With best regards,
Blakelee

---

## WillM
*2021-07-02 13:57 UTC*

Hi Blakelee,

Thanks for trying and I am glad that you were successful with it. I noticed that you used a O(?) in the input. I have never understood why a question mark is used rather than calculating out the O. Could you explain this for me? And if it has to do with never knowing the exact 'O' content, how does this value affect the additional H2O and SiO2 inputs as fixed values (e.g., H(60)O(30))? The help is much appreciated.

Cheers,
Will

---

## YiBing Li
*2021-07-02 15:53 UTC*

Hi Will,
I have checked further and now i am sure that the right O vaule should be 163.6655, not 163.665, and i guess K is adjacent to O in your input file, if so, that means the excess K would leave alone after all O have been assigned to the other cations. A question mark O(?) allows the system to automatch the numbers of O each cation acquires, and thus this method as well as yours should give the identical results (please see the screenshots below).

![2021-07-02_234839.jpg]({{ '/assets/attachments/39_2021-07-02_234839.jpg' | relative_url }})

PS: The left input is `0  MN(0.116)NA(3.914)CA(1.358)K(4.952)FE(5.769)MG(3.373)AL(24.839)SI(55.019)TI(0.660)H(60)SI(30)O(?)   * `
while the right is `0  MN(0.116)NA(3.914)CA(1.358)FE(5.769)MG(3.373)AL(24.839)SI(55.019)TI(0.660)K(4.952)O(163.6655)H(60)O(30)SI(30)O(60)   *`

Kind regards,
Blakelee

---

## WillM
*2021-07-04 08:40 UTC*

Hi Blakelee,

Thanks again for all the help. I wasn't aware that the order of the elements on the THERIN input affected the outcome of the results. I tried the first input you listed (`0 MN(0.116)NA(3.914)CA(1.358)K(4.952)FE(5.769)MG(3.373)AL(24.839)SI(55.019)TI(0.660)H(60)SI(30)O(?) *`) and unfortunately got the diagram attached, which is a very common result of mine. I will try it again with a specified 'O' input of 163.6655. Thanks again for all the help.

All the best,
William

![Screen Shot 2021-07-04 at 10.28.02 AM.png]({{ '/assets/attachments/40_Screen_Shot_2021-07-04_at_10.28.02_AM.png' | relative_url }})

---

## DougTinkham
*2021-11-23 16:18 UTC*

Hi William

You figured out your issue with your oxygen (you initially did not enter enough Oxygen). In the very first step of the minimization algorithm, an 'assemblage' of stable phases is set to an assemblage of the elements themselves, and those elements are given a very high Gf so that in normal cases they never end up being predicted as stable. But, when you enter a bulk composition that cannot be reconstructed by a combination of phases considered for stability, some of the pure element remains in the final result, and you generally don't want that.

That was the first problem (you fixed). The second problem in your final diagram shown is very likely the same ferric iron problem that everyone else has. Over the years, I have decided this is clearly the number one problem that new users have. The problem and fix is described at the link below where you obtained the database file, under 'Ferric iron problems".

<https://dtinkham.net/peq.html>

---

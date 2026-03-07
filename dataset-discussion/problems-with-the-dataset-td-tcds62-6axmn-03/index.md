---
layout: topic
title: "Problems with the dataset td-tcds62-6axmn-03"
forum_name: "Dataset Discussion"
forum_slug: "dataset-discussion"
date: 2020-09-23
post_count: 6
original_url: "https://research-talk.org/viewtopic.php?t=63"
---

## Arthur Santos
*2020-09-23 13:14 UTC*

Hello everyone, 

I am currently studying granulitic rocks and I am facing some problems with Theriak-domino, hope I can find help here. Some info before the  problem:

- Windows 10, Theriak-Domino version 09.03.2019, dataset td-tcds62-6axmn-03

- therin input `SI(61.59)TI(0.00)AL(17.63)FE(4.23)MN(0.00)MG(2.93)CA(1.57)NA(4.47)K(4.21)H(3.37)O(?)O(0.01)`

 
The problem is: the program is taking too long to calculate a pseudosection, like four to five days, and the results are not understandable (see figure for an example). I've tried using the dataset tcds_55 (with the necessary changes in the therin input file) and the program works just fine  (five to eight hours to generate a pseudosection) and the pseudosections are understandable. 

![WhatsApp Image 2020-08-03 at 09.08.24.jpeg]({{ '/assets/attachments/25_WhatsApp_Image_2020-08-03_at_09.08.24.jpeg' | relative_url }})

---

## EricKelly
*2020-10-19 00:22 UTC*

Your bulk composition has O listed twice, and O(0.01) is pretty low, so I wonder if that's on purpose.  If you allow TD to calculate the amount of O for you, does the diagram look reasonable?

Like this:

```
SI(61.59)TI(0.00)AL(17.63)FE(4.23)MN(0.00)MG(2.93)CA(1.57)NA(4.47)K(4.21)H(3.37)O(?)
```

---

## YiBing Li
*2020-11-12 13:14 UTC*

Hi  Arthur Santos,

I suggest you have a try the recently updated version 20201103, which can be available from the URL below: <https://titan.minpet.unibas.ch/minpet/theriak/theruser.html>. I have attained some good results using this version when constructing phase diagrams for a mafic eclogite, so i believe it may be helpful to you as well. 
In addition, if you want to omit some compositions such as TI and MN, you can just delete them directly in your input datafile. Like this:  `SI(61.59)AL(17.63)FE(4.23)MG(2.93)CA(1.57)NA(4.47)K(4.21)H(3.37)O(?)O(0.01)`

Best wishes,
Blakelee, PHD student

---

## js
*2021-11-01 14:07 UTC*

Hello Everybody,
I'm facing the same problem as Arthur Santos. I have commented/deactivated all ferric-bearing members of solution models in the database file td-ds62-mp50-03.txt. The bulk composition I'm using in calculations is `SI(67.8700490)AL(15.7718330)FE(3.30293480)MG(2.74972460)MN(0.0250987700)CA(0.948191340)NA(5.72520000)K(3.04340000)TI(0.441400000)H(100.000000)O(?)`
Does anyone know what to do to solve this problem?
Best,
Jacek

![pseudo.png]({{ '/assets/attachments/49_pseudo.png' | relative_url }})

---

## DougTinkham
*2021-11-23 13:03 UTC*

Hello Jacek:

When I see a problem with a bunch of jagged lines like I see in your diagram, my first thought is to check that I have added enough ferric iron to the bulk composition. The system composition basis set for that file use the system components iron (FE) and oxygen (O), and does not use an explicit ferric iron system component that is different than ferrous iron. Thus, to control the ferric/ferrous iron in your bulk composition case, you use oxygen. Think of controlling iron valence using FeO and FeO1.5. The O(?) tells Theriak-Domino to add the proper amount of oxygen using the default valence of the elements given in the database file header section, so it adds O to the FE to give all FeO, no FeO1.5. If you use the O(?) feature, you can then explicity add some 'extra' O to your bulk composition by adding a second O(...) entry. 

What is the consequence of doing a calculation with a bulk system composition with just FeO when using that (or some other) database file? The program will try to find solutions using the ferric-bearing species in the database file when they should not be stable. The problem is that, numerically, the ferric-bearing species in some of the ax models are predicted to have a very small amount stable, and the program ends up going in wrong directions trying to find a solution, as in this case. If you run theriak in the problematic space, the program sometimes recognizes something is wrong and it usually tells you so in the output (look for double stars in the output section listing the solid solution phase compositions).

Thus, I always try to add a bit more ferric iron to the bulk system composition to see if this resolves the issue, and it usually does (but not always, the jagged lines could be due to other problems). In your case, you have 0 ferric iron. If you want to work on a ferric-free calculation using that database file, then you should go through the file and deactivate/comment the ferric bearing members. This problem is discussed on   <https://dtinkham.net/peq.html> under the "Ferric iron problems" section.

The lack of ferric iron in your bulk composition while keeping ferric database species active in your file does appear to be the cause of the problem in your case.

Regards,
Doug

If you wanted FeO1.5/(FeO+FeO1.5) = 0.06, your bulk compo to 3 dec digits would be entered:

```
0  SI(67.870)AL(15.772)FE(3.303)MG(2.750)MN(0.025)CA(0.948)NA(5.725)K(3.043)TI(0.441)H(100.000)O(?)O(0.099)  *  js TD Forum
```

---

## js
*2022-01-17 17:48 UTC*

Dear Doug,
thank you for your answer. It is a pity that I noticed it so late. So, now I'm working on another sample. The particular sample from the last question I worked out using the old tcds55 database. However, I'm still facing the same problem working with other samples using the new database. The bulk-rock composition I'm using in my calculations does not contain any ferric iron as I want to work on ferric-iron free composition. I also deactivated all the ferric-bearing members in the database. However, as you can see in the diagram (attached) there are still a bunch of jagged lines present. Is there anything else that I can do to get rid of the issue?
The bulk composition I'm using is

```
1   SI(67.5938)AL(15.5877)FE(3.1352)MG(2.7257)MN(0.0052)CA(0.8836)NA(5.7252)K(3.0434)TI(0.4414)H(100.0000)O(?)  *   24
```

Best,
Jacek

![script024.png]({{ '/assets/attachments/53_script024.png' | relative_url }})

---

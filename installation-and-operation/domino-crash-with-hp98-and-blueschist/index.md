---
layout: topic
title: "Domino crash with HP98 and blueschist"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2020-10-15
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=64"
---

## g_libby
*2020-10-15 17:45 UTC*

Hello all,

I have been running into issues with Domino while trying to generate files for pseudosections. I am on Windows 10 and using the most recent installation of Theriak-Domino.

I have been using the HP98 database to generate pseudosections of some blueschists from the lab (therin file with compositions listed below), but Domino frequently fails to save a Domplt.txt file for use in Guzzler. I am covering a pressure span of 10-20 kbar for the blueschist, but the DomOut.txt file shows that Domino often shuts down prematurely at around 17 kbar, sometimes listing a "too many loops" error but more often just stopping abruptly with no error listed. Even when lowering the pressure axis (12-15 kbar, for example) to reduce the number of calculations, Domino still frequently closes down before finishing the calculations or producing a Domplt file. I am unsure of how to proceed, and any insight into what is causing these crashes and how to fix them would be greatly appreciated.

Therin file:

```
! -----Version: 05.09.06
! Comments in this file start with ! at position 1.
!
! The sructure of input data includes two parts: (a) External conditions for calculation (e.g. T and P) and
! (b) Bulk system composition given as element amounts.
! The first significant line should contain the external conditions as follows.
!
!   temperature(deg C)   pressure(bar)   optionally-[PGAS]-ratio 
!   where 
!           [PGAS]-ratio = (fluid pressure)/(total pressure)
!
! The second and further significant lines contain the bulk composition have the following form.
! 
!   print-code   bulk-formula    use-code   optional_comment
!  
!   where 
!       print-code should start at position 1 and may take the following values. 
!       < -1:   print information about selected or rejected phases from the database. 
!               NO EQUILIBRIUM CALCULATED. 
!       =-1:    print composition, considered phases and solution models. 
!               NO EQUILIBRIUM CALCULATED. 
!       = 0:    short output (stable assemblage) 
!       = 1:    long output (composition, considered phases, solution models, stable 
!               assemblage, activities of all phases 
!
!       bulk-formula is the element bulk composition written as follows.
!       ELEMENT1(Amount1)ELEMENT2(Amount2).....
!           A ? for the oxygen amount instructs the program to assign exactly 
!           the stoiciometric oxygene atoms to the other elements.
!
!       use-code controlls which phases are read from the database. Usually this is "*" 
!       for all phases matching the chemical system defined by bulk-formula.
!
!       optional comment 
!
! ----------> dont' forget: at least two blanks between items!!! <----------
!
!   For the most typical case, only one chemical input line is needed. The following lines are
!       ignored. For calculation of binary or ternary diagrams however, two or three additionalchemical
!       input lines are needed that define the the system«s endmember compositions.
!----------------------------------------------------------------------------------------
    400     2000
0   SI(51.25)TI(0.81)AL(20.81)FE(9.49)MN(0.09)MG(5.14)CA(4.93)NA(7.04)K(0.42)O(?)H(60)O(?)      *  Ios-15c PC version check
```

---

## EricKelly
*2020-10-19 00:27 UTC*

Do you have other blueschist bulk compositions that yield successful diagrams?  I.e. do you know that TD is installed/setup correctly?  If so, perhaps the bulk composition is not representative of an equilibrium assemblage.

---

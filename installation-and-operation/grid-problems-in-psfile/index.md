---
layout: topic
title: "Grid problems in ps.file"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2021-10-05
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=82"
---

## Byeongjun Park
*2021-10-05 04:08 UTC*

Dear all,

Hello, I'm a newbie to use Theriak-Domino.

I'm using Windows 10 as an operating system.

After reading the post at <https://research-talk.org/viewtopic.php?f=4&t=43>, I downloaded the latest version of Theiak-Domino compiled with Cygwin.

To see if the program is working well, I used the THRIN and database file of sample AWBZ on <https://dtinkham.net/peq.html>.

In the process of reproducing the examples, only the rest of the parts except the grid appear in the ps. file.

I don't know why these problems occurred.

I attached a few lines of the OUT data and ps file.

Thanks,
Byeongjun Park

```
MN(0.126)NA(3.652)CA(1.303)K(5.388)FE(6.558)MG(5.854)AL(22.708)SI(69.377)TI(0.678)H(30)O(?) O(0.59022)
Bulk composition: O         208.123220
SI         69.377000
TI          0.678000
AL         22.708000
FE          6.558000
MG          5.854000
MN          0.126000
CA          1.303000
NA          3.652000
K           5.388000
H          30.000000
E           0.000000
X: Temperature [C]                                                                 
Y: Pressure [Bar]                                                                  
MAXIMUM LEVEL:   6  PREC = 0.0050  WPREC = 0.0400
ASSEMBLAGE:   1: x,y =  4.00000000E+02   1.00000000E+03  EP11 WM BI14 CHL14 H2O q sph ab                                                 
assemblage: EP11_ep WM_mu BI14_annm CHL14_daph H2O q sph ab
ASSEMBLAGE:   2: x,y =  4.30000000E+02   1.00000000E+03  PLC WM BI14 CHL14 MTLOW H2O q ru ab                                             
assemblage: PLC_abh WM_mu BI14_annm CHL14_daph MTLOW_imt H2O q ru ab
ASSEMBLAGE:   3: x,y =  5.20000000E+02   1.00000000E+03  PLC WM BI14 CD14 MTLOW H2O and q ru                                             
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd MTLOW_imt H2O and q ru
ASSEMBLAGE:   4: x,y =  5.80000000E+02   1.00000000E+03  (2)PLC BI14 CD14 MTLOW ILM00 H2O q                                              
assemblage: PLC_abh PLC_san BI14_annm CD14_hcrd MTLOW_imt ILM00_oilm1 H2O q
ASSEMBLAGE:   5: x,y =  4.15000000E+02   1.00000000E+03  EP11 WM BI14 CHL14 H2O q ru ab                                                  
assemblage: EP11_ep WM_mu BI14_annm CHL14_daph H2O q ru ab
ASSEMBLAGE:   6: x,y =  4.07500000E+02   1.00000000E+03  EP11 WM BI14 CHL14 H2O q sph ru ab                                              
assemblage: EP11_ep WM_mu BI14_annm CHL14_daph H2O q sph ru ab
ASSEMBLAGE:   7: x,y =  4.22500000E+02   1.00000000E+03  PLC EP11 WM BI14 CHL14 H2O q ru ab                                              
assemblage: PLC_abh EP11_ep WM_mu BI14_annm CHL14_daph H2O q ru ab
ASSEMBLAGE:   8: x,y =  4.23906250E+02   1.00000000E+03  PLC EP11 WM BI14 CHL14 MTLOW H2O q ru ab                                        
assemblage: PLC_abh EP11_ep WM_mu BI14_annm CHL14_daph MTLOW_imt H2O q ru ab
ASSEMBLAGE:   9: x,y =  5.05000000E+02   1.00000000E+03  PLC WM BI14 CD14 MTLOW ILM00 H2O q ru ab                                        
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd MTLOW_imt ILM00_oilm1 H2O q ru ab
ASSEMBLAGE:  10: x,y =  4.97500000E+02   1.00000000E+03  PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru ab                                       
assemblage: PLC_abh WM_mu BI14_annm CHL14_ames MTLOW_imt ILM00_oilm1 H2O q ru ab
ASSEMBLAGE:  11: x,y =  4.99375000E+02   1.00000000E+03  PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru ab                                  
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd CHL14_ames MTLOW_imt ILM00_oilm1 H2O q ru ab
ASSEMBLAGE:  12: x,y =  4.99023438E+02   1.00000000E+03  PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru                                          
assemblage: PLC_abh WM_mu BI14_annm CHL14_ames MTLOW_imt ILM00_oilm1 H2O q ru
ASSEMBLAGE:  13: x,y =  4.99082031E+02   1.00000000E+03  PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru                                     
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd CHL14_ames MTLOW_imt ILM00_oilm1 H2O q ru
ASSEMBLAGE:  14: x,y =  5.08750000E+02   1.00000000E+03  PLC WM BI14 CD14 MTLOW H2O and q ru ab                                          
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd MTLOW_imt H2O and q ru ab
ASSEMBLAGE:  15: x,y =  5.06875000E+02   1.00000000E+03  PLC WM BI14 CD14 MTLOW ILM00 H2O and q ru ab                                    
assemblage: PLC_abh WM_mu BI14_annm CD14_hcrd MTLOW_imt ILM00_oilm1 H2O and q ru ab
ASSEMBLAGE:  16: x,y =  5.65000000E+02   1.00000000E+03  (2)PLC BI14 CD14 MTLOW H2O and q ru                                             
assemblage: PLC_abh PLC_san BI14_annm CD14_hcrd MTLOW_imt H2O and q ru
ASSEMBLAGE:  17: x,y =  5.63066406E+02   1.00000000E+03  (2)PLC WM BI14 CD14 MTLOW H2O and q ru                                          
assemblage: PLC_abh PLC_san WM_mu BI14_annm CD14_hcrd MTLOW_imt H2O and q ru
ASSEMBLAGE:  18: x,y =  5.70625000E+02   1.00000000E+03  (2)PLC BI14 CD14 MTLOW ILM00 H2O and q                                          
assemblage: PLC_abh PLC_san BI14_annm CD14_hcrd MTLOW_imt ILM00_oilm1 H2O and q
ASSEMBLAGE:  19: x,y =  5.69687500E+02   1.00000000E+03  (2)PLC BI14 CD14 MTLOW ILM00 H2O and q ru                                       
assemblage: PLC_abh PLC_san BI14_annm CD14_hcrd MTLOW_imt ILM00_oilm1 H2O and q ru
REACTION:   1   1  =   6
position:      4.03633E+02   1.00000E+03      4.03691E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: EP11 WM BI14 CHL14 H2O q sph ab = EP11 WM BI14 CHL14 H2O q sph ru ab
REACTION:   2   6  =   5
position:      4.14004E+02   1.00000E+03      4.14062E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: EP11 WM BI14 CHL14 H2O q sph ru ab = EP11 WM BI14 CHL14 H2O q ru ab
REACTION:   3   5  =   7
position:      4.17871E+02   1.00000E+03      4.17930E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: EP11 WM BI14 CHL14 H2O q ru ab = PLC EP11 WM BI14 CHL14 H2O q ru ab
REACTION:   4   7  =   8
position:      4.23438E+02   1.00000E+03      4.23496E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC EP11 WM BI14 CHL14 H2O q ru ab = PLC EP11 WM BI14 CHL14 MTLOW H2O q ru ab
REACTION:   5   8  =   2
position:      4.24023E+02   1.00000E+03      4.24082E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC EP11 WM BI14 CHL14 MTLOW H2O q ru ab = PLC WM BI14 CHL14 MTLOW H2O q ru ab
REACTION:   6   2  =  10
position:      4.93633E+02   1.00000E+03      4.93691E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CHL14 MTLOW H2O q ru ab = PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru ab
REACTION:   7  10  =  12
position:      4.98906E+02   1.00000E+03      4.98965E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru ab = PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru
REACTION:   8  12  =  13
position:      4.99023E+02   1.00000E+03      4.99082E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CHL14 MTLOW ILM00 H2O q ru = PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru
REACTION:   9  13  =  11
position:      4.99082E+02   1.00000E+03      4.99141E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru = PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru ab
REACTION:  10  11  =   9
position:      4.99609E+02   1.00000E+03      4.99668E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 CHL14 MTLOW ILM00 H2O q ru ab = PLC WM BI14 CD14 MTLOW ILM00 H2O q ru ab
REACTION:  11   9  =  15
position:      5.05469E+02   1.00000E+03      5.05527E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 MTLOW ILM00 H2O q ru ab = PLC WM BI14 CD14 MTLOW ILM00 H2O and q ru ab
REACTION:  12  15  =  14
position:      5.07637E+02   1.00000E+03      5.07695E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 MTLOW ILM00 H2O and q ru ab = PLC WM BI14 CD14 MTLOW H2O and q ru ab
REACTION:  13  14  =   3
position:      5.10742E+02   1.00000E+03      5.10801E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 MTLOW H2O and q ru ab = PLC WM BI14 CD14 MTLOW H2O and q ru
REACTION:  14   3  =  17
position:      5.63008E+02   1.00000E+03      5.63066E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: PLC WM BI14 CD14 MTLOW H2O and q ru = (2)PLC WM BI14 CD14 MTLOW H2O and q ru
REACTION:  15  17  =  16
position:      5.63066E+02   1.00000E+03      5.63125E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: (2)PLC WM BI14 CD14 MTLOW H2O and q ru = (2)PLC BI14 CD14 MTLOW H2O and q ru
REACTION:  16  16  =  19
position:      5.69453E+02   1.00000E+03      5.69512E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: (2)PLC BI14 CD14 MTLOW H2O and q ru = (2)PLC BI14 CD14 MTLOW ILM00 H2O and q ru
REACTION:  17  19  =  18
position:      5.69746E+02   1.00000E+03      5.69805E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
REACTION: (2)PLC BI14 CD14 MTLOW ILM00 H2O and q ru = (2)PLC BI14 CD14 MTLOW ILM00 H2O and q
REACTION:  18  18  =   4
position:      5.72207E+02   1.00000E+03      5.72266E+02   1.00000E+03
LABELED WITH ASSEMBLAGES
```

![화면 캡처 2021-10-05 124137.jpg]({{ '/assets/attachments/48_화면_캡처_2021-10-05_124137.jpg' | relative_url }})

---

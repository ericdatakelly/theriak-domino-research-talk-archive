---
layout: topic
title: "calculation parameters Domino"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2022-03-17
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=88"
---

## AlexeyBerezin
*2022-03-17 23:20 UTC*

I created bash script on LINUX for approximation calculation parameters in  Domino. high level- "default" (see Capi), but in few cases low value parameters is ok for use. script use formal criteria  "two point", "open end" and "bump". Script  dont use real visual/graphical areas/lines... i use creteria "minimal- two... / open... / bump" is  optimal (for detail see Petrakakis, 2010). Script use Monte-carlo simulation in work,  i reccomend N =300-500.  Script is simple. If you use script i reccomend  delta T<=200c/K, delta P <=3000 bar (if you use  strong computers use more...). Also use curved  area with maximal gradient. 
Attention for format "parameters / blanc" if you modifided script! 
Output file may by exported to  Excel  / Gnumeric / Calc for analysis. Please send to me result (and with composition/N/deltaT, deltaP), if you use script. Please  modify script, if you use.

Best regards, Alexey Berezin / IPGG RAS
*******************************************************************************************
sorry, i attach code (file don't attached)
******************************************

```
#!/bin/bash
#
# find optimal parameter for TD
#***************N-ITERATION
iter=300
echo -e "TIME	SEC	OE	TWP	BU	PRAT	LO1MAX	EQUALX	TEST	DXMIN	DXSCAN	DXSTAR	STPSTA	STPMAX	GCMAX" > td-optimparm.txt
#For***
for i in $(seq 1 "$iter")
do
    LO1MAX="$(echo $(( $RANDOM%290+10 )))"
    #echo $LO1MAX
    TEST="$(echo $(( $RANDOM%9 )))"
    DXMIN="$(echo $(( $RANDOM%9 )))"
    DXSCAN="$(echo $(( $RANDOM%9 )))"
    STPSTA="$(echo $(( $RANDOM%390+10 )))"
    STPMAX="$(echo $(( $RANDOM%390+10 )))"
    GCMAX="$(echo $(( $RANDOM%490+10 )))"
    #***************CREATE SCRIPT*****************
    echo -e "script.param.txt
param.plt
JUN92d.bs" > param.txt
    #**********    PRAT     LO1MAX  EQUALX          TEST          DXMIN            DXSCAN       DXSTAR       STPSTA     STPMAX  GCMAX*
    #DEFAULT***    1.0000    300    0.010000   1.0000000E-09   1.0000000E-09   1.0000000E+00 0.1000000E-03     400      400      500	*
    #OPTIMAL***    1.0000    100    0.010000   0.1000000E-02   0.1000000E-05   0.3330000E+00 0.1000000E-03     25      25      25	*
    PAR=$(echo '    1.0000    '$LO1MAX'    0.010000   1.0000000E-0'$TEST'   1.0000000E-0'$DXMIN'   0.'$DXSCAN'5000000E+00 0.1000000E-03     '$STPSTA'      '$STPMAX'      '$GCMAX' ')
    echo "$PAR" >> param.txt
    echo '1    SI(50.36)AL(30.54)FE(6.23)MG(2.46)CA(1.07)NA(4.62)K(4.73)O(160.965)H(60)O(30)      *      TN205 fin' >> param.txt
    echo -e "

" >> param.txt
    echo -e "TC  660  680
P  3000  5000
.
1" >> param.txt
    echo -e " 0.0000000E+00   0.0000000E+00
_paramatxt_pix" >> param.txt
    #
    #RUN DOMINO
    ./domino param.txt
    #
    #echo -e "TIME	OE	TWP	BU	PRAT	LO1MAX	EQUALX	TEST	DXMIN	DXSCAN	DXSTAR	STPSTA	STPMAX	GCMAX" > td-optimparm.txt
    #Parse DomOut
    tme=$(grep 'CPU time' DomOut.txt | cut -d ':' -f 2)
    OE=$(grep -c 'OPEN END' DomOut.txt)
    TWP=$(grep -c 'TWO POINTS' DomOut.txt)
    BU=$(grep -c 'BUMP' DomOut.txt)
    s_hr=$(( 3600 * 10#"$(echo $tme | tr -d [:alpha:] | cut -d ' ' -f 1)" ))
    s_min=$(( 60 * 10#"$(echo $tme | tr -d [:alpha:] | cut -d ' ' -f 2)" ))
    s_sec=$(( 1 * 10#"$(echo $tme | tr -d [:alpha:] | cut -d ' ' -f 3 | cut -d '.' -f 1)" ))
    sec=$(( "$s_hr" + "$s_min" + "$s_sec" ))
    #echo $(( 4 * $(echo '0h 00m 04.65s' | tr -d [:alpha:] | cut -d ' ' -f 3 | cut -d '.' -f 1) ))
    #grep -c 'OPEN END' DomOut.txt
    #grep -c 'TWO POINTS' DomOut.txt
    #grep -c 'BUMP' DomOut.txt
    # grep 'CPU time' DomOut.txt | cut -d ':' -f 2
    #replace BLANC on TAB
    PAR1="$(echo "$PAR" | tr -s ' ' '	')"
    echo -e "$tme	$sec	$OE	$TWP	$BU	$PAR1" >> td-optimparm.txt
done
```

---

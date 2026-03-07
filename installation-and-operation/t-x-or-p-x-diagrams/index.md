---
layout: topic
title: "T-X or P-X diagrams"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2023-03-23
post_count: 5
original_url: "https://research-talk.org/viewtopic.php?t=93"
---

## Caio Santos
*2023-03-23 17:29 UTC*

Hello

I'm having a problem in trying to calculate a T-x diagram between two rock compositions, at fixed pressure. I actually don't understand what should I list as the "global" composition (first line of the dat file) in this case. Whatever I put as the "global" composition, I always get the same error message: "Input error: X-min and X-max are the same"

Any help would be greatly apppreciated.

Cheers

Caio

---

## Joshua Laughton
*2023-03-24 16:24 UTC*

Hi Caio,

For the first line I usually just use an average of the end-members. Can you attach your THERIN file?

Cheers,
Josh

---

## Caio Santos
*2023-03-28 16:28 UTC*

Hello Joshua

Thanks for your response. I actually tried the average, and got the same error message. In this case I am interested only in the H2O variation, so all three compositions are the same, except for the H content.

For some reason I can't attach the therin file... But since it is very small, I will copy the text below.

Cheers

Caio

```
650  6000
1  SI(68.226)AL(28.38)NA(0.44)K(2.6)H(3.0933)CA(0.42)MG(3.77)FE(10.49)TI(1.2)MN(0.17)O(?)O(0.524)  *
1  SI(68.226)AL(28.38)NA(0.44)K(2.6)H(6.18)CA(0.42)MG(3.77)FE(10.49)TI(1.2)MN(0.17)O(?)O(0.524)  *
1  SI(68.226)AL(28.38)NA(0.44)K(2.6)H(0.0066)CA(0.42)MG(3.77)FE(10.49)TI(1.2)MN(0.17)O(?)O(0.524)  *
```

---

## Joshua Laughton
*2023-04-04 14:01 UTC*

Hi Caio,

For domino, enter "BIN  0  1" for either the x or y axis and then T or P for the other axis such as "TC  500  1000". 

Josh

---

## Caio Santos
*2023-04-05 15:59 UTC*

Hello again, Joshua

It worked ! I  it was going to be something a little silly. Thank you very much for your help !

Cheers

Caio

---

---
layout: topic
title: "How to define a new buffer?"
forum_name: "General Discussion"
forum_slug: "general-discussion"
date: 2018-05-29
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=33"
---

## gaopeng
*2018-05-29 23:28 UTC*

Hi everyone,

I want to define a new buffer, for example, FMQ (fayalite-magnetite-quartz) with the equilibria of 3Fe2SiO4 + O2 = 2Fe3O4 + 3SiO2. Following the tutorial of User's Guide, it seems like that the following input should be inserted into the database:

```
FMQ-BUFFER      O(2)      FMQ      *FMQ
  ST           0.000     000000.000     000.000000       0.000000
  CP1       0.000000        0.00000           0.00            0.0
  COM      MAGNETITE[2]QUARTZ[3]FAYALITE[-3]     0    MAGNETITE?
```

But I am not sure which phase should be excluded?

More generally, a buffer may be described as ΔFMQ-1 or ΔFMQ+1. In this case, what should I input in the database?

Everybody is welcomed to share your experience and skill. Thanks a lot.

Peng

---

## Erik Duesterhoeft
*2019-01-31 11:06 UTC*

Hi Peng,

here I will explain how to define a ΔQFM+1 or ΔQFM-1 buffer.

Gibbs free energy of the new buffer is:

G(qfm+X) = G(qfm) + 2.303*R*T*X
[2.303log() = ln() ]

X= number of displacment in log10 units =  QFM+X;

because: S(qfm+2) = -RT*[ln(a)+2.303*2] = - RT*2.303*[log(a)+2] = S(qfm) + RT*2.303*2

this can be specified by the COM definition

G(qfm) = G(2 mt) + G(3 q) -G(3 fa)

G_add = G(qfm) + 2.303*R*X* T (in K)

For instance QFM+2:

2.303*X*R

2.303*2*8.3143=38.296

In JUN92:

```
QFM+2-BUFFER      O(2)      QFM      *QFM
 ST           0.000     000000.000      38.296000       0.000000
 CP1       0.000000        0.00000           0.00            0.0
 COM      MAGNETITE[2] A-QUARTZ[3] FAYALITE[-3]    0   MAGNETITE

-QFM+2-BUFFER      O(-2)      -QFM      *QFM
 ST           0.000     000000.000     000.000000       0.000000
 CP1       0.000000        0.00000           0.00            0.0
 COM      QFM+2-BUFFER[-1]
```

---

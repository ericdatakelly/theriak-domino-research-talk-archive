---
layout: topic
title: "Help with persistent errors"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2019-02-04
post_count: 1
original_url: "https://research-talk.org/viewtopic.php?t=39"
---

## pedro.vieira
*2019-02-04 17:47 UTC*

Hello, Research-Talk community! I need help with some errors while running Domino.

I've been experiencing the following messages while trying to calculate some phase-equilibria diagrams: 

```
Program received signal SIGSEGV: Segmentation fault - invalid memory reference.
Backtrace for this error:
#0  6f6117be
#1  6f695deb
#2  004010f8
```

I've already tried to change permissions to modify files on the working folders but nothing changed. The last time this error message appeared was after I tried running a binary diagram H2O x T (°C) using the database tcds55p7. 

Any idea on the possible sources for this error?

---

---
layout: topic
title: "Run TD from working folder on Windows 10"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2015-10-23
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=9"
---

## EricKelly
*2015-10-23 13:52 UTC*

Normally, I run Theriak-Domino (TD) as suggested in the guide by working in the Working folder and leaving the programs in the Progams folder.  However, in Windows 10 with the new Command Prompt, TD seems to only be able to access files within the Programs folder.  When I run start.bat from within the Working folder, TD displays the paths, which all point to the Programs folder:

```
--------------
 initialization
 --------------
 Initialization-file:   C:\TheriakDominoWIN\Programs	heriak.ini
 Program's directory:   C:\TheriakDominoWIN\Programs\
 Working directory:     C:\TheriakDominoWIN\Programs\
```

 

On my Windows 7 computers, the Working directory listed above is always "C:\TheriakDominoWIN\Working\".

One solution is to simply work from the Programs folder (put therin and your dataset in the programs folder and get your output files there too), but it's much more convenient to work in a Working folder.  Does anyone know how to run TD from the Working folder in Windows 10?

Eric

---

## sina
*2015-10-27 17:13 UTC*

Have you set the right path in the 'start.bat' file within the \Working directory?

---

## EricKelly
*2015-10-27 18:51 UTC*

I double-checked the path a couple of times so I don't think it's that.  My start.bat file is located in the working folder and is the same file I use on the Windows 7 computer:

```
Title TD1
set THERDOM=C:\TheriakDominoWIN\Programs
set PATH=%THERDOM%;%path%
cmd
```

I also tried adding the working folder:

```
Title TD1
set THERDOM=C:\TheriakDominoWIN\Programs\
set THERWORK=C:\TheriakDominoWIN\Working1\
set PATH=%THERDOM%;%THERWORK%;%path%
cmd
```

but this didn't solve the problem.  I have also checked that Windows displays the correct paths after adding these folders to the path.

It seems that Windows 10 wants to change the directory when it calls a program (e.g., theriak), whereas Windows 7 does not.  Perhaps the issue is within the TD code that sets the current working directory.

Eric

---

## alioli
*2017-03-06 16:49 UTC*

Dear Eric,

reading the date of the post I imagine that you have already solved the problem :) But, just in case someone needs a solution, I managed to run TD (v. 2017) in the working folder on Windows 10, just by re-compilingAlicia

---

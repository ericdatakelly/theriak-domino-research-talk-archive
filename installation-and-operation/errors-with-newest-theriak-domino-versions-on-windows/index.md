---
layout: topic
title: "Errors with newest Theriak-Domino versions on Windows"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2019-03-14
post_count: 5
original_url: "https://research-talk.org/viewtopic.php?t=43"
---

## Jacob
*2019-03-14 03:00 UTC*

Hello Theriak-Domino users group,

I'm posting on here because I'm not sure where else to ask for help. I'm trying to get the newer versions of Theriak-Domino to work on a Windows 10 PC with gfortran 8.2.0-3 installed via MinGW. The Theriak-Domino version 09/03/2016 works just fine and I can run everything. However, versions 04/02/2017 and 09/03/2019 both do not, and I would really like to get the new version working especially with the addition of starting guesses for speed. Everything compiles fine from the makefile, but upon trying to run any programs from start.bat I get this error:

At line 24 of file platf-win2.f90
Internal Error: get_unit(): Bad internal unit KIND

I know that the platf-win.f90 files are dependent on the fortran compiler installed and operating system, but I've left them as they are provided because as far as I can tell everything is set up as it should be for my compiler (gfortran) and OS (Windows). I have no idea what could be going wrong as this error seems to be quite vague and google hasn't yielded much in the way of what I might need to change. Any suggestions for things I could try would be really appreciated! I apologize in advance if there's something very basic that I'm missing.

Thanks very much for your time.

Jake

---

## Joshua Laughton
*2020-04-20 16:02 UTC*

I am also getting this same error from the 09.03.2019 version. Was there ever a fix to this?

Josh

---

## pierre.lanari
*2020-04-21 09:45 UTC*

Hi Josh and Jacob, 

We encountered several issues with Erik Duesterhoeft while trying to connect the Windows-version of Theriak-Domino to Bingo-Antidote, but not the specific one you mentionned here.

Finally, we decided to recompile Theriak-Domino using Cygwin instead of MinGW. It solves other problem of version 09/03/2019. This solution worked for 100 % of the Windows users who gave a try to Bingo-Antidote so far. No need to install gfortran, you just need to place the dll files (available at <https://www.dropbox.com/s/b3t4rjop106akt5/Cygwindll4Theriak.zip?dl=0>) to your Windows folder: C:\Windows\ 

Here is the last version of Theriak-Domino compiled with Cygwin: <https://www.dropbox.com/s/tkl82zg8qhsnqea/TheriakDominoWIN.zip?dl=0>

Please give a try and tell me if this can be a possible workaround for other users. 

Note that the starting guesses (seeds) does not really improve the speed of minimization for a phase diagram computation, they rather help convergence for single minimizations that would have faild otherwise. The most recent versions of Theriak-Domino are definitively slower, but the percentage of succesfull minimization is higher when complex solution models are used.

Best wishes,
Pierre

---

## pierre.lanari
*2020-04-21 12:01 UTC*

... and I got the following answer from Capi: 

> The problem described seems irrelevant. If I understand correctly, it just can't write the date into a string. (A work around would be to set the string to some value and RETURN, without looking for the real date and time)
> 
> One might have to use another built-in routine or define the string differently.

---

## Joshua Laughton
*2020-04-21 13:19 UTC*

Hi Pierre,

I installed the compiled version you linked and it fixed all issues I was having (including to successfully use tcds62c). Thank you very much for the assistance!

Cheers,
Josh

---

---
layout: topic
title: "Problems compiling Theriak Domino on Sequoia 15.4"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2025-04-04
post_count: 2
original_url: "https://research-talk.org/viewtopic.php?t=104"
---

## bcenki
*2025-04-04 16:51 UTC*

Hello. I have troubles compiling Theriak Domino on Sequoia 15.4. I have cloned the git repository and followed the instructions (downloaded homebrew and updated Xcode). But still its doesn't compile.

Several errors I listed while trying to compile: gfortran: warning: '12.0' is not valid for 'mmacosx-version-min'

And in the end 
gortran: error: /opt/homebrew/Cellar/gcc/13.1.0/lib/gcc/13/libquadmath.a: No such file or directory
make: *** [theriak] Error 1

Anyone had the same trouble ? Thanks

![Capture d’écran 2025-04-04 à 6.17.12 PM.png]({{ '/assets/attachments/64_Capture_d_écran_2025-04-04_à_6.17.12_PM.png' | relative_url }})

---

## DougTinkham
*2025-04-04 17:49 UTC*

Hello

I have not built on Sequoia yet but I imagine it will work. You need to make modifications in the file src/MakefileMAC. Open it and you will find these lines?:

## Select minimum macos to run binaries on
MINMACOS=12.0

## Static gfortran build on mac requires specifying path to libquadmath.a
## Your path will likely differ, so change below to correct path for you.
LQUADMATH=/opt/homebrew/Cellar/gcc/13.1.0/lib/gcc/13/libquadmath.a
#LQUADMATH=/usr/local/Cellar/gcc/12.2.0/lib/gcc/12/libquadmath.a

Change MINMACOS to 15.0
You also need to add your path to the libquadmath static library because gcc/gfortran cannot find it without some help. If you can't find it, type this at the Terminal:

gfortran -print-file-name=libquadmath.dylib

That will give you a hint of the directory where you can find the static lib equivalent, libquadmath.a.   Change the variable LQUADMATH in the makefile to the directory containing libquadmath.a

Then try to rebuild. I recommend first deleting your build directory to clear out any files remaining from your initial failed build before attempting a new build.

Please et us know if this works or not.

---

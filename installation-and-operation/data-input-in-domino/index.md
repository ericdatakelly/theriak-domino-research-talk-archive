---
layout: topic
title: "Data Input in Domino"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2018-12-05
post_count: 4
original_url: "https://research-talk.org/viewtopic.php?t=36"
---

## patrick
*2018-12-05 10:26 UTC*

Hi everyone,

I have a "little" problem with Domino and I hope that someone of you can help me. For my masterthesis, I am calculating new pseudosections, using the new  Compiled Theriak-Domino version for Windows (version 3-15-2018) from "<http://www.rocks.uni-kiel.de>". I have metaplites, so I used the td-tcds62-6axmn-03 dataset. The first pseudosection I calculated was perfect, even that it took a much longer time to calculate it, than with an older version I used before..

But, as I wanted to calculated a second pseudosection of a second sample, Domino calculated the exactly same pseudosection of the first sample, even that I have changed the mineral data in the Therin File. Furthermore, I have changed the  T and P condition for the new calculation, but Domino ignorred the new input aswell.

Does someone of you know, why Domino calculated everytime the same pseudosection again and again? Even, that I have changed mineral data and P - T conditions.

I do not have a second Therin file. But I am running out of ideas how to deal with this problem.

Thank you very much!

Patrick

---

## EricKelly
*2018-12-06 05:11 UTC*

Hi Patrick,

I'm still suspicious you have another therin file.  It does not need to be named therin, and there are other ways to give TD your bulk composition.  Is your bulk composition correctly printed on the diagram?  If not, TD is getting it from somewhere else.

You seem to be using Windows.  On Windows, the default therin file name is "therin.txt" (see Programs	heriak.ini).  For Mac (and probably Unix) the default file name is "THERIN" (see Programs	heriakMAC.ini).  Perhaps you are editing THERIN when you should be editing therin.txt.  If this is the case, rename THERIN to the name listed in theriak.ini, which should be therin.txt.  This can be confusing because the instructions typically refer to file names from the Mac version.

There are also ways to point to different bulk compositions through batch files and scripting as described in TheriakDominoGuide.pdf (Documentation folder).

---

## patrick
*2018-12-07 17:09 UTC*

Hi Eric,

thank you for your answer.  Yes the bulk composition is correct. You are right I am using Windows and the file names are also correct.

I think, my error source is in the dataset "td-tcds62-6axmn-03". I have tried to calculate the samples with  another dataset, just to detect where the error source might be. With another dataset, everything works quick and fine just by using the "td-tcds62...." file, domino starts to struggle again. Do you have any idea what problem of that could be?

---

## EricKelly
*2018-12-09 22:17 UTC*

Sorry, I don't have an answer.  I recommend you post the commands/scripts you are using to do the calculations.  Then someone on the forum might spot the problem.  If you are manually calculating diagrams, copy all of the text from your command window and paste it into the post.  If you have files that you want to share, post a link to the files.  Make it easy for us to follow the steps and exact commands you are using.

---

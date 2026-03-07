---
layout: topic
title: "Multiple task for Domino"
forum_name: "Installation and Operation"
forum_slug: "installation-and-operation"
date: 2015-10-27
post_count: 6
original_url: "https://research-talk.org/viewtopic.php?t=11"
---

## Xiao-Qiang Yang
*2015-10-27 07:54 UTC*

First I want to appreciate  Eric for organising the Forum. 

Long long ago, I was struggling to get a reasonable pseudosection. I tried <u>PerpleX and TheriakDomino</u>. The thing that puzzled me is the customize of the dataset in Theriak_Domino. Although finally I’ve got the pseudosection from THERMOCALC. Hope I could learn how to customize the dataset from the coming posts.

As long as I got the email from Eric, I re-install the Theriak_Domino in my Linux computer. Now I’m wondering is there a way to run selveral Domino program in the background? I know the explicit way is to duplicate several folders of Theriak_Domino. Is there any better ways, like perple_X, every input file and output file of a project are in different names so they could be seperated? 

Thanks for your suggestions.

---

## EricKelly
*2015-10-27 12:24 UTC*

I like to simply duplicate folders, like you mention in your post.  I make several copies of the Working folder, limiting the number of folders to the number of processors on the computer (I'm using Windows, but Unix users should be able to make more copies if they are on a Unix cluster).  Using several folders, each Theriak-Domino (TD) job is run by one processor and can occur in parallel (they will run at the same time).  I keep all input and output file names the same and simply drop a new set of input files into a new folder.  When the run is finished, I move them to a unique folder to keep track of them.

If you are using a batch file (e.g., domjob), you can use unique names for each file that you run, and assign unique output names. 
However, you would need to change the names in the batch file as well as in the script files that are used as input to the batch file.  This does not sound very efficient though.

I'll be interested to see if someone has a better approach.

Eric

---

## sina
*2015-10-27 14:56 UTC*

Although having several theriak-dominos run in parallel has the advantage that this way they run on different threads, I prefer the batch script (with the reason that I think it lets you keep a better overview over your calculations). On the webpage  <http://serc.carleton.edu/research_education/equilibria/theriak-domino.html> (scrolling down until you see "Supporting Resources: Powerpoint Presentations by Christian de Capitani ...") there is a "Script in Domino" powerpoint file, where you can find a short explanation of how to make and run a script file in domino. (Or see also the Theriak-Domino documentation .pdf which comes with the Theriak-Domino software).

The advantages of the script file is that you can perform several calculations automatically in succession (that is, you don't need to give any further input than the initial script file). The outputs will be saved each with a different file name, specified in the script file.

Best,

Sina

---

## EricKelly
*2015-10-27 16:15 UTC*

Good point and thanks for including those links.  In fact, I normally combine these ideas and run several batch scripts on multiple processors, each running a model for a different rock.  My batch file (domjob) includes everything I like to see in the diagram, including assemblage fields, garnet isopleths, biotite Mg#, anorthite in plagioclase and so on.  Here is a portion of the file:

```
domino < script_Rxns.txt
guzzler script_Rxns.plt  script_Rxns.cln  script_Rxns.lbl
explot  script_Rxns.cln  script_Rxns.ps
domino < script_Sps.txt
guzzler script_Sps.plt  script_Sps.cln  script_Sps.lbl
explot  script_Sps.cln  script_Sps.ps
domino < script_Grs.txt
guzzler script_Grs.plt  script_Grs.cln  script_Grs.lbl
explot  script_Grs.cln  script_Grs.ps
```

On an 8 processor computer, I have made 7 Working directories (using all 8 processors at once is taxing on my old PC), each with the same domjob file, and I control which aspects of the system are calculated in each folder by putting only the scripts of interest into that folder.  If the domjob routine does not find a script, it simply skips it and looks for the next one.

Example:
Working1 contains script files with the bulk composition of the whole rock to examine the start of garnet growth.  I don't know much about the matrix phases at the start of garnet growth so I limit my calculations to the preserved garnet data.  My script files are script_Rxns.txt, script_Sps.txt, script_Grs.txt, script_Prp.txt, and script_Alm.txt.

Working2 contains script files with the bulk composition of the whole rock minus the garnet contribution to examine the end of garnet growth.  Here I do know something about the matrix phases so I can see what the model proposes for their characteristics in addition to garnet.  My script files are script_Rxns.txt, script_Sps.txt, script_Grs.txt, script_Prp.txt, script_Alm.txt, script_Bt-MgNum.txt, script_Xan.txt, script_Bt-Vol.txt (and so on).

This setup can generate lots of data overnight to help bracket a solution quickly.

Eric

---

## Xiao-Qiang Yang
*2015-10-28 05:19 UTC*

Thanks to Sina and Eric.

I'll try to run some test.

The hardest thing for me is to select the dataset in order to get a comparable result with THERMOCALC in system with TiO2 and O.

This is more convinient in Perple_X although the graphic quality is hard to control. 

I'll working on these. And this seems another topic.

---

## Erik Duesterhoeft
*2015-11-05 08:55 UTC*

There is a third way (beside duplicating folders and script-files). You can change the theriak.ini (you will find the file in the Programs folder). Within the theriak.ini file, set the filename of filetype "dat" to a single question mark. For example, in the
following $THERIAK-FILES or $DOMINO-FILES block you may set
dat=?

If you do this, the program will state on start that

" Filename for file type dat not defined in theriak.ini
Enter file name:"

Now you enter the name of file type "dat" that contains the chemical input for your
calculation, e.g.

mydata (default is THERIN)

Then, the files that will be created by the programs will be named automatically to

mydata-plt.txt (<= needed for guzzler, default is "coplot")
mydata-cln.txt
mydata-tab.txt etc.

If you modify the theriak.ini file in the Programs folder, this change is valid for every calculation and all working folders. However, I prefer to copy the original theriak.ini file in the working folder, which is used, and then I modify the theriak.ini. Consequently, the modification is only valid for this specific working folder.

---

## AI-Draw


<div style="text-align:center">
<img src="http://www.petercollingridge.co.uk/sites/files/peter/charles_darwin%20and%20co.png" />
</div>

## What it does

This application allows users to upload a picture, and the goal is to mimic the picture using a collection of overlapping circles of various colours and transparencies. PS: It will take hours for it to complete, and it's not perfect (still need improvement)

## Background: Darwinian Natural Selection
The genetic algorithm takes ideas from actual biological evolution and applies it to software field. The following three principles are important for evolution to happen: <br><br>
**Heredity**: Data (properties) passed from parent generation to the next generation <br>
**Variation**: In each optimization, we are going to inroduce some variations; otherwise, it will always stay the same and evolution won't happen - mutation<br>
**Selection**: "Survival of the fittest": better traits will be more likely to pass to the next generation - fitness function<br>

## Technical background
This application is written in **Javascript**. We use **P5.js** framework to visualize all the data<br>

**Initialization**: We first create a population of 100 circles, each with random colors and radius (DNA).<br>

**Selection**: Then we evaluate the fitness of each circle (how "good" each circle is) and build a mating pool. <br>

**Reproduction**: Pick two parents and create a "child" by combining their good traits and discard the bad ones (based on our fitness function). The new child will occasionally experience mutation based on probability. Then the new child will be added to the new population. Repeat this process until we get a new population<br>

**Final step**: Replace the old population with the new one and start from Selection step again. Repeat until our fitness score exceeds a certain threshold (When our picture gets really close to the original one). <br>

##Challenges we ran into
The most challenging aspect was trying to optimize our fitness function, our cross-breeding function, as well as our mutation function, as the simulation takes a long time, and usually it is very difficult to get significant results in an hour. Thus, we had to be very careful in terms of when to test.

In the end, we were not able to get a visibly optimal solution, but we believe that with further optimizations, the algorithm should be able to produce better results.

##How to install& run it 
```
git clone https://github.com/PeterL328/AI-Draw.git
cd AI-Draw
python -m SimpleHTTPServer
```
This should start a server on port 8000 on your local machine.




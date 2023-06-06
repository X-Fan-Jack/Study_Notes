# Literature Review Notes

### Article 1: IntelliLight: A Reinforcement Learning Approach for Intelligent Traffic Light Control

This paper seems using the basic reinforcement learning method(Q learning) to get the best signal pattern, but they claim that they use the Deep RL which confuse me a lot.   

They use SUMO([Simulation of Urban MObility](https://www.eclipse.org/sumo/)), which is a open source lib developmed by German, to simulate the urban traffic flow.    

The result of the paper is good and shows that the using of real world data can make the model more reality relative.    

The highlight of this paper, in my view, is the using of the memory palace and the phase gate. These method enhace the long memory of the agent model.   

### Article 2: Self-organizing Traffic Lights: A Realistic Simulation

This paper is mentioned by the article 1 and I think this paper is quiet seems like my method - the ABM way.    

In my opinion, the methodology of 'Self-organization' used in this paper is somewhat coincidental with the idea of ABM.    

But the paper only consider the lenght of waiting cars and other factors to change the signal strategy. If a large number of waiting vehicles accumulate in front of the red light, the red light at that intersection changes to green.   

To me, it seems clear that this is still an artificial method of judgment based on a priori.  This method is a good basic decision method, although it ignores the influence of some potential factors on the decision.

### Article 3: The Benefits of Retiming Traffic Signals

This paper points out that a proper traffic signal pattern can effectivly imporve the traffic flow, which means the traffic system can be more safe and we can save more fuel cost to preserve the nature environment.   

In the government economy, Srinivasa Sunkari mentions a example on San Jose Boulevard in Jacksonville, FL, which reduced average arterial delay by 35%, resulting in estimated annual fuel savings of 65,000 gallons and overall annunal cost savings of $2.5 million(2001).  Another example in Burlington, Canada, which remanaged the signal pattern in 62 intersections, observed 7% savings in travvel time, 6% savings in fuel consumption. And this project demonstrated an annual savings of $1.06 million for delays and fuel consumption alone(2001).

### Article 4: Operational Control Solutions for Traffic Management on a Network Level

This is a dissertation for the purpose of obtaining the degree of doctor at Delft University of Technology by Ramon Leonardus LANDMAN.

This paper systematically presents the information about traffic network aptimization which includes the factors affecting the performace of the road network, how to optimize the latest control stratigies and methods, etc.

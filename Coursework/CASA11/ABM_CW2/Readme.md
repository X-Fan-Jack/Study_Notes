## Submission
1. Netlogo file
2. PDF file

## Word limits
Netlogo code: No limit
Document: 1000 words

## Requirement 
1. document in ODD format

# Document part
## 1. Research Question (approx. 50 words)
## 2. ODD Description (approx. 750-850 words)
### 2.1 Purpose and patterns
### 2.2 Entities, state variables, and scales
### 2.3 Process overview and scheduling
### 2.4 Design concepts
### 2.5 Initialisation
### 2.6 Input data
### 2.7 Submodels
## 3. Brief Methodology (approx. 100-200 words)




# 说明/大纲（反正是中文的也没人看）
## 总体思路
基于Netlogo，建立交通路网ABM，探索红绿灯模式对于不同交通路网模型的影响，探索之间的关系。

路网模式：十字路口（仅直行、带转弯）、丁字路口、

评价方式？
平均速度(Space Mean Speed-调和平均数/Time Mean Speed-算术平均数)、平均等待时间、

## 数据
车流量Annual Average Daily Flow —— 双向的车流量，一年中平均每一天的行驶过的数量
$$Q=D \cdot V$$



## 可用机制
### 寻路机制：
let choices neighbors with [ pcolor = white or pcolor = red or pcolor = green ]
let choice min-one-of choices [ distance [ goal ] of myself ]

### 红绿灯停车
ifelse pcolor = red [ set speed 0 ]  [ ifelse up-car? [ set-speed 0 -1 ]  [ set-speed 1 0 ] ]
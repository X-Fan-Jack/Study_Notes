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
how to reduce the traffic congestion by changing the pattern of traffic lights
## 2. ODD Description (approx. 750-850 words)
### 2.1 Purpose and patterns
### 2.2 Entities, state variables, and scales
### 2.3 Process overview and scheduling
### 2.4 Design concepts
### 2.5 Initialisation
### 2.6 Input data
### 2.7 Submodels
## 3. Brief Methodology (approx. 100-200 words)

__________________________________________
换题咯！ 

## 新题目：
森林火灾的模拟，基于DEM

## 背景：
2022年7月20日，意大利与斯洛文尼亚两国边境交界处森林火灾
2022年7月27日，德国施米尔卡附近的萨克森瑞士国家公园发生森林大火
2022年8月5日，西班牙加利西亚大区新一轮山火烧至附近的村庄

[500 more wildfires this year than whole of 2021 - fire chief - BBC News](https://www.bbc.co.uk/news/uk-62542606)
[https://www.bbc.co.uk/news/uk-england-dorset-62539847]




## 技术路线

读取DEM，手动数据着火点patch，基于燃烧方程进行模拟



































__________________________________________


# 说明/大纲（反正是中文的也没人看）
## 总体思路
基于Netlogo，建立交通路网ABM，探索红绿灯模式对于不同交通路网模型的影响，探索之间的关系。

**核心**：对单个路口进行建模。

红灯时长red-time(不超过90s)
绿灯时长green-time（不超过90s）

模式 = 红灯时长+黄灯时长3s+绿灯时长


场景设定：

路网模式：十字路口（仅直行、带转弯）、丁字路口、

将所有路口特化成单向箭头？

## 评价方式？ ==结果输出==
1. 所有车辆的平均速度（调和平均数）越大越好
2. 所有车辆的平均等待时间（算数平均数）越小越好

## 代理人类型

### 车
行为：加速、减速、停车（可能需要优化）

### 红绿灯
行为：红灯时长、黄灯时长、绿灯时长



## 数据
车流量Annual Average Daily Flow —— 双向的车流量，一年中平均每一天的行驶过的数量
$$Q=D \cdot V$$
## 车流模拟
基于统计数据Q（cars/day），和道路最大速度V(km/h)，计算出车辆密度D(cars/km)。

$$D=\frac{Q}{24\cdot V}$$

## 车流生成
将所考虑的区域（十字路口/路网）视为一个整体，只考虑车辆输入该区域的车辆密度进而在输入道路上生成车辆，稳定运行一段时间后，即为模拟的车流量。
车辆转向决策，由可选择的路线的车流密度的概率分布进行随机转向。



## 变量 ==数据输入==

### 模式选择
对于不同场景有不同的场景生成模式，也有不同的参数需求。
场景选择：
1. 直线型：单向直线，中间有红绿灯。
   适用场景：单行路有行人通过，双向车道行人通过
2. T字路口：

### 输入车流量 Q
该参数决定了车流量的生成速率。
数据可基于现实的车流量的测定。

### 输入车段和输出车段的最大速度 $V_{max}$
该参数决定了车辆在路段中能够行驶的最大速度，同时也间接影响了初始车辆生成速率
数据可基于现实的道路限速规定。

### 红绿灯模式
该参数决定了红绿灯的运行模式，即一个周期内的变换策略？
看看能不能将其变为矩阵？

## 限制 Limitation
仅适用于相对简单的路网，对于环岛和近距离复杂分流汇流道路应用不佳，对于london道路交通来说没有考虑到行人过马路对于交通流的影响。


行人对于交通流的影响可以缩短考察距离来减少影响。 



## 可用机制
### 寻路机制：
let choices neighbors with [ pcolor = white or pcolor = red or pcolor = green ]
let choice min-one-of choices [ distance [ goal ] of myself ]

### 红绿灯停车
ifelse pcolor = red [ set speed 0 ]  [ ifelse up-car? [ set-speed 0 -1 ]  [ set-speed 1 0 ] ]
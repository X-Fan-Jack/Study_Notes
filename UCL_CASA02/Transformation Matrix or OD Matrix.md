### 转移矩阵/OD矩阵
转移矩阵是表示在$dt$时间内，城市间关系从状态A到状态B的变化。
转移矩阵可以理解为在某一时间段内城市之间的人口流动，商品货物的交易等。如图：
![[Pasted image 20230211202429.png]]

对于假设有$N$个地区，将其从编码为$1$到$i$，那么我们就能获取到一个代表城市City的向量$$\vec{C}=[C_1,C_2,C_3,\cdots,C_i]$$
进一步的，假设我们任选两个城市$i$和$j$，如果想要表示从$i$到$j$的流，那么我们可以使用矩阵$T$来表示，其中的每一个元素$T_{ij}$表示从$i$到$j$的流。最终可以定义转移矩阵$T$为$$T=\begin{bmatrix}T_{11} & \cdots & T_{1i}\\
\vdots  & \ddots & \vdots \\
T_{j1} & \cdots & T_{ij} \\
\end{bmatrix}$$
因为其表示的是城市或者地区之间的转移情况，则也可以称矩阵$T$为城市转移矩阵。~~我说了句废话~~
因为描述了始发地(Origins)和目标地(Destinations)之间的关系，所以城市转移矩阵也可以称为OD矩阵或者OD转移矩阵。

### 转移矩阵的意义
转移矩阵的概念始于俄国数学家马尔科夫，他在20世纪初发现：一个系统的某些因素在转移中，第n次结果只受第n-1的结果影响，即只与当前所处状态有关，而与过去状态无关。 在马尔科夫分析中，引入状态转移这个概念。其主要用于描述随机过程的变化。
在城市的发展过程中，我们也可以使用类似的思想来描述在城市交互间城市属性的变化，比如A城市由于有大量的就业岗位空缺进而吸引B城市的人口到A城市去就业。又或者来描述C城市生产的商品对DEF城市的倾销差异。
因为有描述属性变化的工具，那么我们可以通过已有的数据对未来的数据进行模拟和变化。就如线性变换一样，将某一时刻的城市属性表视为矩阵，将其乘以转换矩阵，就可以得到在dt时间后，城市属性表的矩阵。用数学表示如下：$$State_{t+1}=T\cdot State_t$$

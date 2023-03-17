## Overview
### System name?

伦敦的地铁线路的发展对于周边地区的影响的可视化。以Stratford为例？

泛指轻轨、地铁，不包括城际铁路。
A visualization of the impact of the development of London's tube lines on the surrounding areas. Take Stratford for example?

### System target
基于网络开发技术，利用一些地图、3D场景和统计图表显示了伦敦的城市发展和城市复兴受到地铁发展的影响。
Based on the web development tech, using some maps, 3D scene and statistic charts displays the urban growth and urban regeneration of London affected by the development of tube. 

### System structure
**The development of London Tube** *(Large scale)*: 
Display the development of london public transportaion affects the urban border expansion/ population growth/ landuse changing.


**The development of one Tube Line** *(Middle scale)*: 
Display the development of one tube line affects the its neighber expansion/ population growth/ landuse changing. 


**The development of Stratford** *(Small scale)*:
展示公共铁路交通对于小区域的影响/助力
Display the development of Stratford in neighbor expansion/ landuse changing/ population changing/....

## Requirements Analysis

Large scale: 
1. 展示出London范围内，地铁线路的发展，从无到有，从古至今
2. 展示出London范围内，人口分布/密度的变化，
3. 展示出London范围内，用地类型的变化，
4. 展示出London范围内，CBD的区位变化？或许吧
5. 展示人口重心的迁移（标准差椭圆）
6. 展示经济收入变化的分布？

Middle scale: 
1. 沿线的人口分布变化，
2. 沿线的用地类型变化
3. 旧线路与新线路的综合交互？ 展示出新添线路对于人口、用地类型的影响
4. 经济收入的变化？

Small scale:
1. Stratford的非自然扩张（主观因素比较多，所以用规划图去做感觉会比较好.. 需要矢量化
2. 展示Stratford 范围内铁路线路的变化
3. 展示范围内站点的使用人数变化（按时间发展
4. 展示Stratford的区域变化：边界变化、人口变化、经济（收入？）变化、landuse changing...
5. 人口就业类型变化？人口年龄结构？人口薪资结构？


## Data requirement
1. London公共铁路交通线路变化矢量数据
2. London用地类型数据(矢量/栅格)
3. London人口分布数据（Wards/SMAO）
4. 薪资结构数据
5. 就业类型数据
6. 人口年龄构成数据
7. 人口职业类型
8. POI数据（按时间/带类型）
9. Stratford的规划前后的数据（比如：规划图
10. Startford的城市景观建模（如果做得到的话，可能需要实地考察，要么就去看看有没有现成的


## Function Design

## Detail Design
### Frontside design
interface, chart design
interaction design
### Background design

## Data Reqirement
## Development Path

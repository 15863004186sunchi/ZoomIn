# ZoomIn数据分析系统(前端):sunny:~

## 介绍
自在行客是一款基于人工智能技术的个性化推荐引擎网站，可以根据每个用户的兴趣、出游偏好以及消费能力等多个维度进行自助游行程的推荐与规划。目的是力图解决用户在安排行程规划过程中，旅游信息过载、难以做出最佳出游决策等痛点，达到个性化定制的目的。依靠AI技术代替用户扎入到过剩的网络出游信息中，将用户从大数据的汪洋大海中真正解救出来，能够真正的做到轻轻松的说走就走。:pig:

在线地址：[http://120.79.146.91:8080/zoomin/](http://120.79.146.91:8080/zoomin/)

## 技术选型

前端：Vue + ElementUI

后端：Python + Tomcat + MySql

## 功能
1. 用户可以创建各种数据分析任务
2. 对用户的数据进行处理、筛选
3. 对数据维度生成可视化图表
4. 对数据维度进行数据挖掘
5. 将用户任务发布

## 运行截图

![](https://cdn.algbb.fun/zoomin/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86.png)

![](https://cdn.algbb.fun/zoomin/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90.png)

![](https://cdn.algbb.fun/zoomin/%E6%95%B0%E6%8D%AE%E6%8C%96%E6%8E%98.png)

## 安装运行

* ##### 第一步
    * 克隆项目到本地`git clone http://github.com/zhcxk1998/ZoomIn
* #### 第二步
    * `npm i`安装依赖
* #### 第三步
    * 构建运行服务`npm run dev`
* #### 第四部
    * 浏览器输入`localhost:8080`

## 目录结构

    |-- [build]                   // webpack构建
    |-- [public]                  // 静态资源
    |-- [src]                     // 客户端代码
        -- [component]            // 组件代码
        -- [router]               // 项目路由
        -- [assets]               // 静态数据
        -- [store]                // 状态管理
        -- [utils]                 // 工具函数
    |-- .gitignore                // git忽略配置
    |-- package-lock.json         // npm
    |-- package.json              // npm
    ...
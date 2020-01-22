# ZoomIn数据分析系统(前端):sunny:~

## 介绍
随着信息时代的到来，数据量日益膨胀，寻找一种能够有效分析、处理数据的手段的需
求也日益迫切，在当今社会生产活动中，数据分析可视化正成为一种越来越普遍的需求。
ZoomIn 采用简单易懂的 web 操作界面来为用户提供将复杂数据可视化和使用模型对数
据深度挖掘的功能，让用户能够通过对数据进行清洗、统计分析、训练相应的机器学习
模型之后深度挖掘出隐藏在数据中的潜在价值。:pig:

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

### 数据处理
![](http://cdn.algbb.cn/screenshots/zoomin/数据处理.png)

### 数据分析
![](http://cdn.algbb.cn/screenshots/zoomin/数据分析.png)

### 数据挖掘
![](http://cdn.algbb.cn/screenshots/zoomin/数据挖掘.png)

### 任务发布
![](http://cdn.algbb.cn/screenshots/zoomin/任务发布.png)

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
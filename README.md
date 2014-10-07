meteor_study
============
meteor 自学 每一个branch 代表一个阶段

├── README.md
├── client             ----  client端
├── lib                ----  存放自己的library
├── public             ----  存放上传文件 啥的 图片
├── server             ----  存放服务器端的文件

ps:
	因为meteor准确的来说属于数据/事件驱动框架， 因此他没有明确的mvc概念。在meteor中 Collection属于Model层，
	view : 就是html模板， 模板中的template负责逻辑方便的操作既Template对象就是Collection;

1: mrt  meteor 的关系
	首先你可以把mrt 想象成meteor的超集。
	其次你可以把他想象成 meteor插件管理器。相当于node的npm
	TODO  small.lock small.json 关系

2: 数据库在哪？
	meteor 把数据库放在自己的.meteor/local 下，以方便自己可以随时调用。启动shell查看必须先启动 meteor服务 然后 meteor mongo

3: 常用包介绍：
	autopublish是一个用来自动发布服务器端collection到客户端的库。
	insecure是一个允许客户端对服务器端publish出来的数据有全部read/write权限的库。
	preserve-inputs比较难解释一些，它指在meteor自动更新dom时，对于form中的各种输入组件，不重新生成。
	具体见：http://http://docs.meteor.com/。

4: route 包
	1： 安装 meteor add iron:route@1.0.0-pre
	2:  必须放在根目录  还未找到什么原因。  将route.js放到server里就不行 https://github.com/EventedMind/iron-router/issues/897
	3:  如果路由中指定了 template 那么就不需要在模板中进行调用了

5: forevert 产品环境启动的工具  http://www.minh.io/tech/2013/12/01/running-meteor-forever/


待学习：
	1：http://www.chorusjs.com/docs/
	2: 是否加入angular更好?  http://www.cnblogs.com/sskyy/p/3197917.html
	3: 跨release运行程序  http://stackoverflow.com/questions/15867135/how-do-i-run-a-specific-release-of-meteor

神秘事件:
	1: meteor  在直接运行github上的实例的时候 经常崩溃，目前无法找到原因，暂保留 meteor github上也没有相关记录，因此先记录
	2：meteor  d3sqy0vqsdhku.cloudfront.net  速度在国内超级慢，因为可以在https://install.meteor.com 中拼接download url
		例如： 这是我mac上的url
		https://d3sqy0vbqsdhku.cloudfront.net/packages-bootstrap/0.9.3.1/meteor-bootstrap-os.osx.x86_64.tar.gz

帮助网站:
	http://www.jianshu.com/p/ps8C8N
	http://www.likebin.net/meteorlist.html
	http://zh.discovermeteor.com/chapters/github/

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  使用3天感受  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
0: meteor  在one page上使用真的是不二的选择（当然如果稳定版本出现，就更完美了)   考虑angular加入是否更好? 【TODO】
1: meteor 一个语言，想法非常棒。 但是meteor 本身还不太稳定，meteor错误信息太少，因为太多次在我这里出现  神秘事件中的1
2：middleware 中间件是个问题， 对于习惯express 或者koa 这些常见的nodejs框架，需要在逻辑思维上进行改变。 【TODO】
3：自动化 非常不错。 我使用sass  会自动加载 并编译
4: 效率是否如网站所说 还未验证 就先不说。  【TODO】
5：上传 等复杂问题 还未进行 稍后进行评价
6: 莫名其妙的假死

总结 问题不少，产品使用 还早

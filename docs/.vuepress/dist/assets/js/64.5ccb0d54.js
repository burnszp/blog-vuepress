(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{368:function(t,i,e){"use strict";e.r(i);var a=e(1),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"xcode中git连接github教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xcode中git连接github教程","aria-hidden":"true"}},[t._v("#")]),t._v(" xcode中git连接Github教程")]),t._v(" "),e("p",[t._v("代码版本控制是开发者开发过程中必不可少的环节，xcode中已经将Git作为内置的源代码控制（Source Control）工具了，接下来讲述一下如何与Github连接。")]),t._v(" "),e("h2",{attrs:{id:"安装git并生成ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装git并生成ssh","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Git并生成ssh")]),t._v(" "),e("p",[t._v("如果你要使用Git，那么首要任务是安装一个Git，并生成一个ssh私钥，这里不再作陈述，不会的同学可以去Google。")]),t._v(" "),e("h2",{attrs:{id:"创建git源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建git源","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建git源")]),t._v(" "),e("p",[t._v("打开xcode，创建一个项目，输入项目的相关信息后一直点击下一步，在创建工程的最后一步Xcode会有一个复选框Create Git repository on my Mac，如果选择了它，git源就会被添加到工程目录中。例子如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tKfTcgy1fo26ob2lb9j30zq0h0dhl.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"连接github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接github","aria-hidden":"true"}},[t._v("#")]),t._v(" 连接github")]),t._v(" "),e("p",[t._v("首先你要有一个Github，然后在Github中创建一个仓库，记住不要点击生成README.md文件，最后拿到仓库的ssh地址。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tKfTcgy1fo26vkf4ouj30qa0f4ac6.jpg",alt:""}})]),t._v(" "),e("p",[t._v("然后打开命令行，进入到项目目录中，输入命令：git remote add origin git@github.com:codeteenager/ShareDemo.git，即可连接到github中。接下来你就可以使用xcode自带的Source Control进行代码的拉取和提交了")])])}],!1,null,null,null);s.options.__file="ios1.md";i.default=s.exports}}]);
sass、tag文件编译
======================

## 使用 
	在终端 进入文件夹后
	npm install

## 项目信息配置
 
 在appPkg.json对应的项目信息，如：
 ```javascript
 {
	"weihuobao": {
		"name": "weihuobao",
		"sass": [
			"index.scss"
		],
		"tags": {
			"components": [
				"modal.tag"
			],
			"pageTags": [
				"weihuobao/**/*"
			]
		}
	}
}
 ```

 在 gulpFile.js里配置对应项目的相关信息

 比如：var appPkg = require('./appPkg.json').weihuobao;

## 编译目录配置

 	var source = './source/', //源码目录
		output = './appSource/weihuobao/'; // 编译后文件输出目录

## 运行 
	
	在项目的根目录 运行 gulp watch
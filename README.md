sass、tag文件编译
======================

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
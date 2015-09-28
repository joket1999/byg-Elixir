/**
 * @author joshua
 * @description sass、tag文件编译
 * @create 2015-07-01 16:40
 * 
 */

var fs = require('fs');
var stat = fs.stat;
var gulp = require('gulp');
var elixir = require('laravel-elixir');
var appPkg = require('./appPkg.json').weihuobao;
var utils = require('byg-elixir-tag/lib/utils');

require('laravel-elixir-sass-compass');
require('byg-elixir-tag');



/*!
 * 路径配置
 *
 * 文件目录
 *
 * |---source
 * |   |
 * |   |---sass
 * |   |
 * |   |---tags
 * |   |   |
 * |   |   |---components
 * |   |   |
 * |   |   |---pageTags
 * |   |
 * |   |---config.rb	
 * |
 * |---dist
 * |   |
 * |   |---css
 * |   |
 * |   |---js
 * |	   |
 * |	   |---components
 * |	   |
 * |	   |---pageTags
 * |		   
 * |
 */

var source = './source/', //源码目录
	output = './appSource/weihuobao/'; // 编译后文件输出目录

var options = {
	source: source,
	output: output,
	sass: source + 'sass/' + appPkg.name, //sass源目录
	tags: source + 'tags', //tag源目录
	fonts: source + 'fonts', //字体源目录
	images: source + 'images', //图片源目录
	css: output + 'css', //css的输出目录
	tagDist: output + 'js', //tag生成的js文件的目录
	configFile: source + 'config.rb', //config.rb位置
};

var sassOptions = {
	config_file: options.config_file,
	style: "expanded", //  "nested", "compressed", "expanded"
	sass: options.sass,
	css: options.css,
	font: options.fonts,
	image: options.images
};


// 执行编译
elixir(function(mix) {

	// 如果木有source目录，先创建source目录
	utils.mkdirs(options.source, function() {
		// 如果不存在 config.rb 文件，创建 config.rb 文件
		fs.exists('./source/config.rb', function(exists) {
			if(!exists){
				fs.writeFileSync(options.source + 'config.rb', 'http_path = "/" \ncss_dir = "css" \nsass_dir = "sass" \nimages_dir = "img" \njavascripts_dir = "js" \nenable_sourcemaps = true \nsass_options = {:sourcemap => true} \nEncoding.default_external = "utf-8"');
			}
		});
	});

	// 编译sass文件
	appPkg.sass && mix.compass(appPkg.sass, options.css, sassOptions);

	// 编译tag文件
	appPkg.tags && mix.riot(appPkg.tags, options);
});
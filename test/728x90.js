(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.a01 = function() {
	this.initialize(img.a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a02 = function() {
	this.initialize(img.a02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a03 = function() {
	this.initialize(img.a03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a04 = function() {
	this.initialize(img.a04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a05 = function() {
	this.initialize(img.a05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a06 = function() {
	this.initialize(img.a06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a07 = function() {
	this.initialize(img.a07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a08 = function() {
	this.initialize(img.a08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a09 = function() {
	this.initialize(img.a09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a10 = function() {
	this.initialize(img.a10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a11 = function() {
	this.initialize(img.a11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a12 = function() {
	this.initialize(img.a12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a13 = function() {
	this.initialize(img.a13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a14 = function() {
	this.initialize(img.a14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a15 = function() {
	this.initialize(img.a15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a16 = function() {
	this.initialize(img.a16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a17 = function() {
	this.initialize(img.a17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a18 = function() {
	this.initialize(img.a18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a19 = function() {
	this.initialize(img.a19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a20 = function() {
	this.initialize(img.a20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.botao = function() {
	this.initialize(img.botao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c01 = function() {
	this.initialize(img.c01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c02 = function() {
	this.initialize(img.c02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c03 = function() {
	this.initialize(img.c03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c04 = function() {
	this.initialize(img.c04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c05 = function() {
	this.initialize(img.c05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c06 = function() {
	this.initialize(img.c06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c07 = function() {
	this.initialize(img.c07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c08 = function() {
	this.initialize(img.c08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c09 = function() {
	this.initialize(img.c09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c10 = function() {
	this.initialize(img.c10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c11 = function() {
	this.initialize(img.c11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c12 = function() {
	this.initialize(img.c12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c13 = function() {
	this.initialize(img.c13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c14 = function() {
	this.initialize(img.c14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.c15 = function() {
	this.initialize(img.c15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d01 = function() {
	this.initialize(img.d01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d02 = function() {
	this.initialize(img.d02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d03 = function() {
	this.initialize(img.d03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d04 = function() {
	this.initialize(img.d04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d05 = function() {
	this.initialize(img.d05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d06 = function() {
	this.initialize(img.d06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d07 = function() {
	this.initialize(img.d07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d08 = function() {
	this.initialize(img.d08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.d09 = function() {
	this.initialize(img.d09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGBmQgJgaAAgkQAAgjAJgaQAKgZALAAQAMAAAKAZQAIAaABAjQgBAkgIAaQgKAZgMAAQgLAAgKgZgAhiBmQgXgZABglQgBgkAXgZQAXgZAkAAQAjAAAVAZQAYAZAAAkQAAAlgYAZQgVAZgjAAQgkAAgXgZgAhBAJQgJANAAASQAAATAJANQAKAOAQgBQAPABAKgOQAJgNAAgTQAAgSgJgNQgKgNgPgBQgQABgKANgABGhLQgIgJAAgMQAAgMAIgIQAKgKALABQAMgBAJAKQAIAIABAMQgBAMgIAJQgJAHgMAAQgLAAgKgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-12.6,24.3,25.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGBmQgJgaAAgkQAAgjAJgaQAKgZALAAQAMAAAKAZQAIAaABAjQgBAkgIAaQgKAZgMAAQgLAAgKgZgAhiBmQgXgZABglQgBgkAXgZQAXgZAkAAQAjAAAVAZQAYAZAAAkQAAAlgYAZQgVAZgjAAQgkAAgXgZgAhBAJQgJANAAASQAAATAJANQAKAOAQgBQAPABAKgOQAJgNAAgTQAAgSgJgNQgKgNgPgBQgQABgKANgABGhLQgIgJAAgMQAAgMAIgIQAKgKALABQAMgBAJAKQAIAIABAMQgBAMgIAJQgJAHgMAAQgLAAgKgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-12.6,24.3,25.3);


(lib.d09_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d09_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d08_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d08_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d07_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d07_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d06_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d05_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d04_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d03_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d02_1, new cjs.Rectangle(0,0,728,90), null);


(lib.d01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.d01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d01_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c15_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c14_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c13_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c12_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c11_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c10_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c09_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c09_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c08_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c08_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c07_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c07_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c06_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c05_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c04_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c03_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c02_1, new cjs.Rectangle(0,0,728,90), null);


(lib.c01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c01_1, new cjs.Rectangle(0,0,728,90), null);


(lib.botao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.botao();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.botao_1, new cjs.Rectangle(0,0,728,90), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a20_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a19_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a18_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a17_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a16_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a15_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a14_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a13_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a12_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a11_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a10_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a09_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a09_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a08_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a08_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a07_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a07_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a06_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a05_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a04_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a03_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a02_1, new cjs.Rectangle(0,0,728,90), null);


(lib.a01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.a01_1, new cjs.Rectangle(0,0,728,90), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_165 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(165).call(this.frame_165).wait(1));

	// cinza
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B2B2B2").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(363.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(166));

	// logo-texto-oi
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGBmQgJgaAAgkQAAgjAJgaQAKgZALAAQAMAAAKAZQAIAaABAjQgBAkgIAaQgKAZgMAAQgLAAgKgZgAhiBmQgXgZABglQgBgkAXgZQAXgZAkAAQAjAAAVAZQAYAZAAAkQAAAlgYAZQgVAZgjAAQgkAAgXgZgAhBAJQgJANAAASQAAATAJANQAKAOAQgBQAPABAKgOQAJgNAAgTQAAgSgJgNQgKgNgPgBQgQABgKANgABGhLQgIgJAAgMQAAgMAIgIQAKgKALABQAMgBAJAKQAIAIABAMQgBAMgIAJQgJAHgMAAQgLAAgKgHg");
	this.shape_1.setTransform(672.6,46.9);

	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(672.6,46.9);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(672.7,44.6,1.081,1.081);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance}]},129).to({state:[{t:this.instance_1}]},16).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({_off:true,scaleX:1.08,scaleY:1.08,x:672.7,y:44.6},16,cjs.Ease.get(1)).wait(21));

	// gradient
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-27.6,0,27.7,0).s().p("AgrEQQhJgXgygaQgkgSgXgTQhQhAAvi1QAQg+AdhCIACgFQAXg1ATggQAWgjAmAAQBBAABeBgQAOANAOAQQBHBPA4BoQBHB/ABBXIAAANQgGBVhXAFIgSAAQhXAAh6gpg");
	this.shape_2.setTransform(679.9,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-26.4,2,27.2,-2).s().p("ABSEqQgmgFgsgLIgmgKQgggKgbgKQgjgNgcgPQgVgKgSgMIgTgOQgnghgJg9QgJg8AWhUIABgCQAPg9AehBIACgFIACgFQAWgvATgeQAUgeAegEIAJgBQA1gEBGA4IAIAGIAQAMIAKAJQAPAMAOAOIAKAKQAcAeAZAjQAiAvAbA5IAJAQQA3BzgBBQIAAAMQgDAqgWAWQgWAXgpAFQgVACgXAAQgbAAgdgDg");
	this.shape_3.setTransform(679.2,47.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-25.4,3.9,26.7,-3.9).s().p("ABTEiQglgCgrgJIgmgJQgfgJgbgJQgigNgcgOQgVgLgQgLIgTgPQgngggJg7QgLg9AWhRIAAgCQAPg8Afg/IACgFIACgEQAWguAUgdQAUgdAegGIAIgBQA1gHBEAwIAHAFIARAKIALAIQAPAKAOANIAKAJQAeAbAYAjQAhAtAZA6IAIARQAxBwgCBPIgBANQgEAogUAXQgVAXgnAHQgeAGgkAAIgegBg");
	this.shape_4.setTransform(678.5,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-24.3,5.6,26.3,-5.7).s().p("AAHEUQgSgDgUgFQgegHgcgJQghgMgbgPQgVgKgQgMQgKgGgIgIQgmgggLg6QgLg8AUhPIAAgCQAPg7Agg9IACgFIACgFQAWgrAWgdQATgbAdgHIAIgCQA1gKBCAoIAIAEIARAIIAKAHQAQAJAOALIAKAIQAfAZAYAiQAgAsAXA7IAHAQQAsBvgEBPIgBANQgEAmgUAXQgUAYgkAJQgpALgzAAIgEAAQgjAAgngHg");
	this.shape_5.setTransform(677.9,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-23.3,7.1,25.9,-7.6).s().p("AAKERQgSgDgUgEQgdgHgbgIQgigLgagPQgUgKgRgMIgRgOQglghgMg4QgMg8AThNIABgBQAOg6Agg8IACgFIACgEQAXgqAWgdQAUgaAcgIIAIgCQA0gNBBAhIAHADIASAHIALAGQAPAHAPAKIAKAHQAgAWAYAiQAfArAUA7IAHARQAnBtgGBOIgBANQgFAlgSAYQgUAYgiALQgmAOgxADIgXAAQgZAAgdgDg");
	this.shape_6.setTransform(677.3,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-22.4,8.6,25.5,-9.2).s().p("AAMENQgRgCgTgEQgegFgbgIQgggLgbgPQgTgKgQgLIgSgPQgkgggMg3QgOg8AThLIAAgBQAPg5Agg7IADgFIACgEQAWgoAXgcQAUgZAbgJIAIgCQA0gQBAAaIAHADIARAFIALAEQARAGAPAJIAKAHQAgAUAYAhQAeAqATA7IAFARQAjBsgHBOIgCAMQgFAkgRAYQgTAZggAMQgkARgwAFQgSADgUAAQgSAAgUgCg");
	this.shape_7.setTransform(676.7,47.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-21.5,10,25.2,-10.8).s().p("AAPEKQgSgBgTgDQgdgFgagIQgggKgbgPQgTgJgQgMIgRgOQgjghgNg2QgPg7AThJIAAgBQAOg5Ahg5IADgFIACgEQAWgmAYgcQAUgYAagKIAIgDQA0gSA+AUIAHACIASADIALAEQARAEAPAIIAKAGQAhASAYAhQAdApARA8IAFARQAeBqgJBNIgBANQgGAjgQAYQgSAZgeAOQgjATguAIQgWAEgbAAIgZAAg");
	this.shape_8.setTransform(676.2,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-20.7,11.1,24.8,-12.3).s().p("AAREHQgRgBgTgCQgcgFgbgHQgggKgagOQgSgKgQgMIgRgOQgigggOg1QgQg8AShHIAAAAQAOg4Ahg4IADgFIACgEQAXglAZgcQATgXAagLIAIgCQA0gVA8APIAIAAIASACIALADQARADAPAHIALAFQAhARAYAhQAdAnAOA9IAFARQAaBpgKBMIgCANQgGAigPAYQgRAagcAPQgiAVgtALQgcAHgkAAIgJAAg");
	this.shape_9.setTransform(675.7,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-20,12.3,24.5,-13.6).s().p("AgRECQgcgDgagHQgggJgagPQgSgJgPgMIgRgOQgighgOg0QgRg7AShFIAAgBQANg3Aig3IADgFIACgEQAXgjAagcQATgWAagLIAHgDQA0gXA7AJIAHAAIASABIAMACQARACAQAFIAKAFQAiAPAYAgQAcAnANA9IAEARQAXBogMBMIgCANQgGAhgPAYQgQAagaARQghAXgrANQgfAKgpAAQgSAAgSgDg");
	this.shape_10.setTransform(675.3,47.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-19.4,13.5,24.2,-14.7).s().p("AgPECQgcgDgagHQgfgIgagPQgRgJgQgMIgQgOQgighgOgzQgSg7ARhEIAAAAQANg3Ajg2IADgFIACgDQAXgjAagbQATgVAZgMIAHgEQA0gYA6AEIAIgBIASAAIALABQASABAQAFIAKAEQAjANAXAhQAcAmAMA9IADARQATBngMBMIgCAMQgHAhgOAYQgQAagYASQgfAZgqAPQgeALgqABIgHAAQgNAAgPgBg");
	this.shape_11.setTransform(675,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-18.8,14.7,23.9,-15.6).s().p("AgNEDQgbgDgagGQgfgJgagOQgRgKgPgLQgJgHgHgIQgigggPgyQgSg7AQhDIABAAQAMg2Ajg1IAEgFIACgDQAXgiAagaQAUgVAYgNIAHgDQA0gbA5AAIAHgBIATgCIALABQASAAAQAEIALAEQAjAMAXAgQAbAlAKA+IADAQQARBngOBLIgCAMQgHAggOAYQgOAbgYATQgeAagpARQgdANgpACIgOABIgVgBg");
	this.shape_12.setTransform(674.6,47.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-18.3,15.7,23.6,-16.4).s().p("AgLEDQgbgCgagGQgfgIgagOQgRgKgPgMQgIgGgHgIQghgggQgyQgTg6AQhCIABAAQAMg1Ajg0IAEgFIACgEQAXggAbgbQATgUAZgNIAGgEQA0gcA4gEIAIgCIASgCIAMAAQASgBAQADIAKAEQAkAKAXAgQAbAlAJA+IACAQQAOBmgOBLIgDAMQgHAfgNAZQgOAbgWATQgdAcgoATQgdAOgpADIgRABIgRgBg");
	this.shape_13.setTransform(674.3,47.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-17.8,16.7,23.5,-17).s().p("AgKEFQgbgCgagGQgegIgagOQgQgJgPgMQgJgHgHgHQggghgQgxQgUg6AQhAIAAgBQANg1AjgzIAEgFIACgDQAXggAbgaQAUgUAYgOIAGgDQA0geA3gHIAIgDIASgDIAMAAQASgCARADIAKADQAkAJAXAgQAaAkAIA+IACARQAMBlgPBKIgDAMQgHAfgNAZQgOAbgVAUQgcAegnAUQgcAPgoAEIgYABIgLAAg");
	this.shape_14.setTransform(674.1,47.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-17.4,17.5,23.2,-17.6).s().p("AgJEFQgbgBgagGQgegHgZgOQgRgKgOgLIgQgPQgggggQgwQgUg7APg/IAAAAQANg1AkgyIADgFIACgEQAXgfAcgaQAUgTAXgOIAGgEQA0gfA3gKIAHgDIATgEIALgBQATgCARACIAKADQAlAIAWAgQAaAjAHA/IACARQAJBlgPBJIgDAMQgHAegNAZQgNAbgUAWQgbAegnAVQgbAQgpAFQgMACgNAAIgJgBg");
	this.shape_15.setTransform(673.9,47);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-17.1,18.2,23,-18.1).s().p("AgJEGQgaAAgagGQgegHgZgPQgQgJgPgMIgPgOQgggggQgwQgVg7APg+IAAAAQANg0AjgyIAEgFIACgEQAXgeAdgaQATgSAXgPIAGgEQA0ggA2gNIAIgDQAJgDAKgBIALgCQATgDAQACIALACQAlAIAWAfQAaAjAGA/IACARQAHBlgQBJIgDAMQgHAegMAZQgNAbgUAWQgaAfgmAXQgbAQgoAGQgOABgOAAIgHAAg");
	this.shape_16.setTransform(673.7,46.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-16.9,18.8,22.9,-18.5).s().p("Ag8EBQgegHgZgPQgQgJgPgMIgPgOQgfgggRgvQgVg7APg+QAMg0AlgxIADgFIACgDQAXgeAdgaQATgSAXgQIAGgEQA0ggA2gPIAHgDIATgFIAMgCQASgEARACIALACQAlAHAWAfQAaAjAGA/IABARQAGBkgRBJIgDAMQgHAdgMAZQgNAcgTAWQgZAgglAYQgcARgoAGQgRACgRAAQgaAAgagGg");
	this.shape_17.setTransform(673.6,46.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-16.7,19.2,22.7,-18.8).s().p("Ag8ECQgdgHgZgOQgRgJgOgMIgPgOQggghgQgvQgVg6AOg/QAMgyAlgyIAEgFIACgDQAXgdAcgaQAUgSAXgQIAGgDQAzgiA2gRIAHgDIATgFIAMgCQASgEARABIALACQAlAHAXAfQAZAiAFBAIABAQQAFBkgRBJIgDAMQgIAdgLAZQgNAbgSAXQgZAhglAYQgbASgoAGQgRADgRAAQgagBgagFg");
	this.shape_18.setTransform(673.5,46.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-16.6,19.6,22.6,-19).s().p("AgHEIQgaAAgagFQgegHgZgOQgQgJgOgMIgPgOQgfghgRgvQgWg6APg+QAMgyAkgyIAEgFIACgDQAXgdAdgZQAUgSAWgQIAGgEQA0giA1gSIAIgDIATgGIALgCQATgEARABIALACQAlAGAWAfQAaAiAEBAIABAQQAFBkgSBJIgDAMQgIAdgLAZQgMAbgSAXQgZAiglAYQgaASgoAHQgPACgOAAIgFAAg");
	this.shape_19.setTransform(673.4,46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-16.5,19.8,22.6,-19.1).s().p("Ag7EDQgdgGgZgPQgQgJgPgMIgPgOQgfgggRgvQgVg6AOg+QAMgyAlgxIAEgFIACgDQAXgeAdgZQATgSAXgQIAGgEQAzgiA1gSIAIgEIATgGIALgCQATgEARABIALACQAlAGAXAfQAZAiAEA/IABARQAEBjgRBJIgDAMQgIAdgLAZQgNAbgRAYQgaAhgkAZQgaASgoAHQgSADgQAAQgaAAgagGg");
	this.shape_20.setTransform(673.4,46.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-16.5,19.8,22.5,-19.2).s().p("Ag7EDQgwgLglgfQgqgjgVg6QgVg6AOg+QANg2Aqg1QAmgxA4gnQA2gmA4gTIAIgEIATgGQAfgIAbAEQAlAGAXAfQAcAnACBLQAFCUgpBaQgeBDg9ArQgaASgoAHQgTADgRAAQgZAAgZgGg");
	this.shape_21.setTransform(673.4,46.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-19.1,17.1,24.5,-17.2).s().p("AhEEEQgdgHgZgPQgTgKgQgPQgmghgXgyIgGgPQgWg+AMhAIAAAAQAMg9Apg4IAFgGQAKgNAKgKIANgMQAIgHAJgFQAJgGAMgFIAZgMIAfgOIAjgPIAdgMIAYgJIAJgDIADgBQAIgDAJgBIAXgEQATgBASAGIAJADQAYAIASAWIAJAKQALAPAIARQALAUAIAVQAFAMADARIABAFQADAQABASQABAYgBAXQgCAfgGAdQgLA6gYAtQgIAQgLAPQghAvgyAfQgbAQglAGIgIABQgQACgPAAQgeAAgdgHg");
	this.shape_22.setTransform(673.6,46.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-21.6,14.5,26.2,-15.4).s().p("AhNEEQgfgIgagQQgTgLgSgPQgngkgYg1IgGgQQgYhAALhDIAAgBQAKhCApg6IAGgHQAKgNAKgKQAHgHAHgFQAJgGAKgDQAIgFAOgBQAOgDANgFIAhgKIAmgNIAfgMIAZgIIAJgDIADgBIASgEQANgCALAAQAUAAATAIIAJAEQAWAKAUAYIAJALQAMARAJAPIAaAjQAIAJAFAPIACAFQAFAPADATQACAYgBAaQgCAggIAfQgNA9gcAuQgJARgMAPQglAvg3AeQgdAPgmAFIgIABIgbACQgjAAghgKg");
	this.shape_23.setTransform(673.9,46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-23.9,12,27.8,-13.8).s().p("AhVEFQgggJgbgRQgUgMgSgRQgpglgZg3IgHgRQgZhDAJhHIAAAAQAJhHAqg8IAFgHQAKgPALgKQAIgHAIgEQAJgFALgBQAIgEAPACQAPgBAOgCQARgCASgFIAogMIAhgKIAbgIIAJgDIADgBQAJgCAJgBQAOgCAMAAQAUABATALIAJAFQAWALAUAbIAJAMIAYAgQAQATAQAKQALAGAHANIADAEQAIAOADAVQAEAYgCAcQgCAigJAgQgPA/gfAwQgLARgNAPQgpAxg6AbQgfAPgoAFIgJABIgUABQgpAAgmgMg");
	this.shape_24.setTransform(674.1,46.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-26,9.9,29.4,-12.1).s().p("AhdEGQgggKgcgSQgWgNgSgRQgqgngag5IgHgSQgbhGAIhKIAAAAQAIhKApg/IAGgIQALgPAKgKQAJgIAIgDQAKgFAMABQAHgDARAFQAQACAOgBQATABASgEQAVgEAVgGIAkgKIAbgIIAKgDIADAAIATgDQAOgCANABQAUACAUANIAJAFQAUANAWAeIAJAMIAaAgQASASAUAGQANADAJAMIAEAEQAKANAEAVQAFAZgCAeQgCAjgKAiQgRBBgjAyQgLARgOAPQgtAxg+AaQghAOgpAEIgJABIgTAAQgsAAgpgNg");
	this.shape_25.setTransform(674.3,47);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-28,7.7,30.7,-10.7).s().p("AhkEHQghgLgdgTQgWgOgUgSQgrgpgbg7IgHgSQgchIAHhNIAAAAQAHhPAphAIAGgIQALgRALgKQAJgHAIgDQALgEAMACQAHgBATAHQARAEAOABQAUACATgCQAWgDAWgFIAmgKIAcgIIAKgCIADgBQAKgCAKgBQAOgBANACQAWADATAOIAJAHQAUANAWAhIAKAMQAPAUANANQAUARAXABQAPAAALALIAEAEQAMAMAFAXQAGAZgCAfQgCAkgLAkQgSBDgmAzQgNARgPAQQgvAxhCAZQgjAOgrADIgIABIgLAAQgzAAgugPg");
	this.shape_26.setTransform(674.5,47.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-29.7,5.9,32,-9.3).s().p("AhqEIQgigMgegUQgXgPgUgSQgsgqgcg9IgHgTQgehKAGhQIAAAAQAGhSAqhCIAFgJQAMgRALgKQAJgIAJgCQALgDANADQAHAAAUAJQASAHAOACQAVAEAUgBQAXgCAXgFQARgDAWgHIAdgHIALgCIADgBIAUgCQAPgBANACQAWAEAUAQIAJAHQATAPAXAjIAKAMQAQAVANAMQAWARAagDQASgCANAJIAEADQAOAMAGAYQAHAZgCAhQgDAlgLAlQgUBFgpA0QgNASgQAPQgzAyhEAYQglANgsADIgJAAIgJAAQg2AAgwgQg");
	this.shape_27.setTransform(674.7,47.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-31.3,4.6,33.2,-7.8).s().p("AhwEMQgjgNgfgVQgXgPgUgTQgtgsgdg+IgIgTQgehMAFhTIAAAAQAFhVAqhEIAFgJQAMgSALgKQAKgIAKgCQALgCAOAFQAGAAAVAMQATAIAPAEQAVAGAVgBQAYgBAYgEQAQgDAYgHIAdgHIAMgCIADgBIAVgCQAPAAAOADQAWAEAUASIAJAHQASAQAYAlIAKANQAQAVAPAMQAYAQAcgGQAUgFAOAIIAFADQAQAMAHAYQAHAagCAiQgCAlgNAnQgVBHgsA1QgOASgRAQQg1AyhHAXQgmAMgtADIgKAAIgFAAQg6AAgzgSg");
	this.shape_28.setTransform(674.8,46.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-32.8,3.5,34.2,-6.2).s().p("Ah1ESQgkgNgfgWQgYgQgUgTQgvgtgdhAIgIgUQgfhNAEhVQAEhYAqhGIAFgJQAMgSAMgKQAKgIAKgCQALgCAPAGQAGABAWAOQAUAKAPAFQAVAHAWAAQAZAAAZgEQAQgDAZgGIAegHIAMgCIADgBIAVgBQAQAAAOADQAWAEAVAUIAJAIQARARAZAmIAKAOQARAWAPALQAaAPAfgJQAVgHAPAHIAGADQARALAIAZQAHAagBAkQgDAlgNAoQgWBJguA2QgPASgSAQQg4AzhJAWQgnAMgvABIgJABQg+AAg3gUg");
	this.shape_29.setTransform(675,46.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-34,2.7,35.1,-4.7).s().p("AgBEsQhBAAg4gVQgkgNgggXQgYgQgVgUQgvgugfhCIgHgTQghhPAEhXQADhaAqhHIAGgKQAMgTALgKQALgIAKgBQAMgCAPAHQAGACAXAPQAUAMAPAGQAXAJAWAAQAaABAZgEQARgCAZgHIAfgHIAMgBIADgBIAWgBQAPAAAPADQAXAFAVAVIAJAJQAQARAZAoIALAOQARAXAQAKQAbAQAhgNQAXgIARAGIAGADQASAKAIAaQAJAagCAlQgDAmgNApQgYBKgwA3QgPASgTAQQg6AzhLAVQgpAMgvABIgIAAg");
	this.shape_30.setTransform(675.1,45.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-35.1,2,36,-3.5).s().p("Ah9EcQglgOghgXQgYgRgVgUQgwgvgfhDIgIgUQghhQADhYIAAgBQADhcAphIIAGgJQANgUALgKQALgJAKgBQANgBAPAIQAGADAYARQAUANAQAHQAXAJAWABQAbACAagEQARgCAagGIAfgHIAMgCIAEgBIAWgBQAQABAOADQAXAGAVAWIAKAJQAPASAaAqIAKAOQATAXAQAKQAcAPAjgPQAYgKASAFIAHADQATAKAIAaQAJAbgBAlQgDAngOAqQgZBLgxA4QgQASgTAQQg8A0hNAUQgqALgwABIgJABQhBgBg5gWg");
	this.shape_31.setTransform(675.2,45.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-36.1,1.4,36.6,-2.4).s().p("AgEE4QhDgBg6gWQglgPghgXQgZgSgVgUQgxgwgfhEIgIgUQgihSADhZQAChfAqhJIAGgJQAMgVAMgJQALgJAKgBQANAAAQAIIAeAVQAVAOAPAIQAYALAXABQAbADAagEQARgCAbgGIAggHIAMgCIAEAAQALgCALABQAQAAAPAEQAXAGAWAXIAJAKQAPATAaAqIALAOQASAYASAJQAcAPAlgRQAZgLATAFIAHACQAUAJAJAbQAJAbgCAmQgCAogPAqQgZBMgzA5QgRASgTARQg+AzhOAUQgrALgxABIgIAAg");
	this.shape_32.setTransform(675.3,45.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-36.8,0.9,37.2,-1.5).s().p("AgFE8QhEgBg6gXQgmgPghgYQgZgRgWgVQgxgwgfhFIgJgVQgihSAChbQAChgAqhJIAGgKQAMgVAMgJQALgJALgBQANAAAQAJIAeAXQAWAPAPAIQAYAMAYABQAbADAbgDQARgCAcgHIAfgGIANgCIAEAAIAWgBQAQABAQAEQAXAGAVAYIAJAKQAQATAaArIAKAOQATAZASAJQAeAOAmgTQAagMATAFIAHACQAVAJAJAbQAKAbgCAnQgCAogPArQgaBNg1A5QgQASgUARQg/AzhQAUQgrALgxAAIgJAAg");
	this.shape_33.setTransform(675.3,44.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-37.4,0.6,37.6,-0.8).s().p("AgGE/QhEgBg7gXQgmgQgigYQgZgRgWgWQgxgwgghGIgJgUQgihTABhcQAChhAqhLIAGgJQANgWAMgJQALgJALAAQAMAAARAJIAfAYQAVAQAQAIQAYANAYACQAcADAbgDQARgCAcgHIAhgGIAMgCIADAAQAMgBALAAQARABAPAEQAXAHAWAYIAJAKQAPAUAbAsIAKAOQATAZASAJQAeAOAogUQAagNAUAEIAIACQAVAJAKAbQAKAcgCAnQgDAogPAsQgbBNg1A6QgRASgUARQhAAzhRATQgsALgxAAIgJAAg");
	this.shape_34.setTransform(675.4,44.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-37.8,0.3,37.9,-0.3).s().p("AgHFCQhFgCg7gYQgmgPgigYQgZgSgWgVQgygygghFIgIgVQgjhUABhcQAChiAphLIAGgKQANgVAMgKQAMgJAKAAQANAAARAKIAfAZQAWAQAQAJQAYANAYACQAcADAbgDQASgBAcgHIAhgGIAMgCIAEAAIAWgBQARABAPAEQAYAHAWAZIAJAKQAOAUAbAtIALAOQATAZASAJQAfAOAogVQAbgOAUAEIAIACQAWAIAKAcQAKAcgCAnQgDApgPArQgbBPg2A5QgRATgVAQQhAA0hSATQgsAKgyABIgJAAg");
	this.shape_35.setTransform(675.4,44.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-38,0,38.1,-0.1).s().p("AgIFDQhFgCg7gYQgmgPgigZQgagRgWgWQgxgxghhHIgIgUQgjhUABhdQABhjAqhKIAGgKQANgVAMgKQALgJALAAQANAAARAKIAfAZQAWAQAQAKQAZANAYACQAcAEAbgEQARgBAdgHIAhgGIAMgCIAEAAQALgBAMAAQAQACAQAEQAXAHAWAZIAJAKQAPAVAbAsIAKAOQAUAaASAIQAfAPAogXQAcgOAUAEIAIACQAWAIAKAcQALAcgCAoQgDAogQAsQgbBPg2A6QgSATgUAQQhBA0hSASQgtALgyAAIgJAAg");
	this.shape_36.setTransform(675.5,44.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFFD59","#C1F254","#85E850","#52E04D","#26D94B","#00D449","#00D249","#00D149","#00D04A","#00D051","#00D060","#00CF7B","#00CFA3","#00CEFA"],[0,0.078,0.161,0.243,0.322,0.392,0.451,0.498,0.549,0.616,0.69,0.773,0.871,1],-38.1,0,38.2,0).s().p("AjRECQhTg6guhlQgshfABhnQAChpAvhPQANgVAMgJQAMgKALABQANAAAQAKIAgAZQAWARAQAJQAYANAYACQAcAEAcgDQARgBAdgHQAigHAPgBQAcgDAbAHQAcAJAaAiQAPAUAbAtQAZAlAXALQAfAOApgWQAggRAYAJQAWAIAKAcQAKAbgCAoQgCApgQAsQgkBohUBEQhlBRiNAAQh2AAhchCg");
	this.shape_37.setTransform(675.5,44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},110).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).wait(21));

	// mask-d (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_148 = new cjs.Graphics().p("AcVEqIAAk1IUEAAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_graphics_148,x:309.8,y:29.8}).wait(18));

	// d09.png
	this.instance_2 = new lib.d09_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(156).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(5));

	// d08.png
	this.instance_3 = new lib.d08_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(155).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(6));

	// d07.png
	this.instance_4 = new lib.d07_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(7));

	// d06.png
	this.instance_5 = new lib.d06_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(153).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(8));

	// d05.png
	this.instance_6 = new lib.d05_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(152).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(9));

	// d04.png
	this.instance_7 = new lib.d04_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(151).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(10));

	// d03.png
	this.instance_8 = new lib.d03_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(11));

	// d02.png
	this.instance_9 = new lib.d02_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(149).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(12));

	// d01.png
	this.instance_10 = new lib.d01_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(148).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(13));

	// botao
	this.instance_11 = new lib.botao_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(143).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(18));

	// c15.png
	this.instance_12 = new lib.c15_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(139).to({_off:false},0).to({alpha:1},5).wait(22));

	// c14.png
	this.instance_13 = new lib.c14_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(134).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(27));

	// c13.png
	this.instance_14 = new lib.c13_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(133).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(28));

	// c12.png
	this.instance_15 = new lib.c12_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(132).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(29));

	// c11.png
	this.instance_16 = new lib.c11_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(131).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(30));

	// c10.png
	this.instance_17 = new lib.c10_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(130).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(31));

	// c09.png
	this.instance_18 = new lib.c09_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(129).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(32));

	// c08.png
	this.instance_19 = new lib.c08_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(370,88,1,1,0,0,0,370,48);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(128).to({_off:false},0).to({y:48,alpha:1},5,cjs.Ease.get(1)).wait(33));

	// c07.png
	this.instance_20 = new lib.c07_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(370,98,1,1,0,0,0,370,48);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(127).to({_off:false},0).to({y:48,alpha:1},5,cjs.Ease.get(1)).wait(34));

	// c06
	this.instance_21 = new lib.c06_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150,75,1,1,0,0,0,150,25);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(126).to({_off:false},0).to({y:25,alpha:1},5,cjs.Ease.get(1)).wait(35));

	// c05.png
	this.instance_22 = new lib.c05_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(125).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(36));

	// c04.png
	this.instance_23 = new lib.c04_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(124).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(37));

	// c03.png
	this.instance_24 = new lib.c03_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(123).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(38));

	// c02.png
	this.instance_25 = new lib.c02_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(122).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(39));

	// c01.png
	this.instance_26 = new lib.c01_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(121).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(40));

	// a20.png
	this.instance_27 = new lib.a20_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(25).to({_off:false},0).to({alpha:1},5).wait(68).to({alpha:0},5).to({_off:true},1).wait(62));

	// a19.png
	this.instance_28 = new lib.a19_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(20).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(45));

	// a18.png
	this.instance_29 = new lib.a18_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(19).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(46));

	// a17.png
	this.instance_30 = new lib.a17_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(18).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(47));

	// a16.png
	this.instance_31 = new lib.a16_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(17).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(48));

	// a15.png
	this.instance_32 = new lib.a15_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(16).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(49));

	// a14.png
	this.instance_33 = new lib.a14_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(364,105,1,1,0,0,0,364,45);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(15).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5).to({y:-25},5).to({_off:true},1).wait(50));

	// a13.png
	this.instance_34 = new lib.a13_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(14).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// a12.png
	this.instance_35 = new lib.a12_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(13).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(52));

	// a11.png
	this.instance_36 = new lib.a11_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(12).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// a10.png
	this.instance_37 = new lib.a10_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(11).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(54));

	// a09.png
	this.instance_38 = new lib.a09_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(10).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// a08.png
	this.instance_39 = new lib.a08_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(11).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(83).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// a07.png
	this.instance_40 = new lib.a07_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(364,75,1,1,0,0,0,364,45);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(10).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:15,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// a06
	this.instance_41 = new lib.a06_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(370,108,1,1,0,0,0,370,48);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(9).to({_off:false},0).to({y:48,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:58},5,cjs.Ease.get(1)).to({y:18,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// a05.png
	this.instance_42 = new lib.a05_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(8).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:-5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// a04.png
	this.instance_43 = new lib.a04_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(7).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:-5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(58));

	// a03.png
	this.instance_44 = new lib.a03_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(6).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:-5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(59));

	// a02.png
	this.instance_45 = new lib.a02_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(5).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:-5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// a01.png
	this.instance_46 = new lib.a01_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(364,95,1,1,0,0,0,364,45);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(4).to({_off:false},0).to({y:45,alpha:1},5,cjs.Ease.get(1)).wait(85).to({y:55},5,cjs.Ease.get(1)).to({y:-5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(61));

	// bg
	this.instance_47 = new lib.bg_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,729,91);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,728.5,90.5);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/a01.png", id:"a01"},
		{src:"images/a02.png", id:"a02"},
		{src:"images/a03.png", id:"a03"},
		{src:"images/a04.png", id:"a04"},
		{src:"images/a05.png", id:"a05"},
		{src:"images/a06.png", id:"a06"},
		{src:"images/a07.png", id:"a07"},
		{src:"images/a08.png", id:"a08"},
		{src:"images/a09.png", id:"a09"},
		{src:"images/a10.png", id:"a10"},
		{src:"images/a11.png", id:"a11"},
		{src:"images/a12.png", id:"a12"},
		{src:"images/a13.png", id:"a13"},
		{src:"images/a14.png", id:"a14"},
		{src:"images/a15.png", id:"a15"},
		{src:"images/a16.png", id:"a16"},
		{src:"images/a17.png", id:"a17"},
		{src:"images/a18.png", id:"a18"},
		{src:"images/a19.png", id:"a19"},
		{src:"images/a20.png", id:"a20"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/botao.png", id:"botao"},
		{src:"images/c01.png", id:"c01"},
		{src:"images/c02.png", id:"c02"},
		{src:"images/c03.png", id:"c03"},
		{src:"images/c04.png", id:"c04"},
		{src:"images/c05.png", id:"c05"},
		{src:"images/c06.png", id:"c06"},
		{src:"images/c07.png", id:"c07"},
		{src:"images/c08.png", id:"c08"},
		{src:"images/c09.png", id:"c09"},
		{src:"images/c10.png", id:"c10"},
		{src:"images/c11.png", id:"c11"},
		{src:"images/c12.png", id:"c12"},
		{src:"images/c13.png", id:"c13"},
		{src:"images/c14.png", id:"c14"},
		{src:"images/c15.png", id:"c15"},
		{src:"images/d01.png", id:"d01"},
		{src:"images/d02.png", id:"d02"},
		{src:"images/d03.png", id:"d03"},
		{src:"images/d04.png", id:"d04"},
		{src:"images/d05.png", id:"d05"},
		{src:"images/d06.png", id:"d06"},
		{src:"images/d07.png", id:"d07"},
		{src:"images/d08.png", id:"d08"},
		{src:"images/d09.png", id:"d09"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
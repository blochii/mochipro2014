/*
 * phi
 */


/*
 * 定数
 */
var SCREEN_WIDTH        = 960;
var SCREEN_HEIGHT       = 640;
var CENTER_X            = SCREEN_WIDTH /2;
var CENTER_Y            = SCREEN_HEIGHT/2;
var POINT_RADIUS        = 80;
var TEXT                = "tmlib.js";
var TEXT                = "愛してるよ";
// var TEXT                = "★";
var TEXT_MAX_HEIGHT     = 250;
var PARTICLE_WIDTH      = 10;
var PARTICLE_HEIGHT     = 10;
var PARTICLE_SPACE      = 15;
var PARTICLE_IMAGE      = null;


if (document.location.search) {
    TEXT = decodeURI(document.location.search.substr(1));
}

var Filter = tm.createClass({
    superClass: tm.app.Shape,
    
    init: function() {
        this.superInit(SCREEN_WIDTH, SCREEN_HEIGHT);
        
        this.alpha = 0.95;
        this.originX = this.originY = 0;
        this.canvas.clearColor("white");
    },
    
    update: function(app) {
        if (app.pointing.getPointing()) {
            var x = app.pointing.x;
            var y = app.pointing.y;
            var radialGradient = tm.graphics.RadialGradient(x, y, 0, x, y, POINT_RADIUS);
            radialGradient.addColorStopList([
                { offset: 0.0, color: "hsla(  0, 75%, 50%, 0.9)" },
                { offset: 0.5, color: "hsla(120, 75%, 50%, 0.7)" },
                { offset: 0.9, color: "hsla(240, 75%, 50%, 0.2)" },
                { offset: 1.0, color: "hsla(240, 75%, 50%, 0.0)" },
            ]);
            this.canvas.setGradient(radialGradient);
            this.canvas.globalCompositeOperation = "destination-out";
            this.canvas.fillCircle(x, y, POINT_RADIUS);
        }
    }
});

/*
 * main 処理
 */
tm.preload(function() {
    // 画像を作成
    var c = PARTICLE_IMAGE = tm.graphics.Canvas();
    c.resize(360*15, PARTICLE_HEIGHT);
    for (var i=0; i<360; ++i) {
        c.fillStyle = "hsl(" + (360/360)*i + ", 60%, 50%)";
        c.fillRect(i*10, 0, 10, 10);
    }
    //c.saveAsImage();
});

/*
 * メイン処理
 */
tm.main(function() {
    app = tm.app.CanvasApp("#world");
    app.fps = 30;
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    app.fitWindow();
    app.background = "rgba(0, 0, 0, 1)";
    
    // レンダリング用キャンバス
    var tempCanvas = tm.graphics.Canvas();
    tempCanvas.width = app.width;
    tempCanvas.height= app.height;
    tempCanvas.font = TEXT_MAX_HEIGHT + "px 'Jockey One'";
    tempCanvas.textAlign    = "center";
    tempCanvas.textBaseline = "middle";
    tempCanvas.fillText(
        TEXT,
        tempCanvas.width/2,
        TEXT_MAX_HEIGHT/2,
        tempCanvas.width
    );
    var heightOffset = 100;
    var heightOffset = app.canvas.height/2 - TEXT_MAX_HEIGHT/2;
    var bitmap = tempCanvas.getBitmap();
    
    for (var height=0; height<tempCanvas.height; height+=PARTICLE_SPACE) {
        for (var width=0; width<tempCanvas.width; width+=PARTICLE_SPACE) {
            var p = bitmap.getPixel(width, height);
            if (p[3] == 255) {
                var x = width;
                var y = height+heightOffset;
                // var angle = tm.util.Random.randint(0, 360);
                var angle = Math.floor(width/tempCanvas.width*360);
                var particle = Particle(x, y, angle);
                app.currentScene.addChild(particle);
            }
        }
    }
    
    // フィルターを追加
    var filter = Filter();
    filter.addChildTo(app.currentScene);
    
    // 更新
    app.currentScene.update = function() {
        var p = app.pointing;
        var k = app.keyboard;
    };
    app.currentScene.draw = function(c) {
        var p = app.pointing;
        
        c.save();
        c.fillStyle = "rgba(255, 255, 255, 0.1)";
        c.fillCircle(p.x, p.y, POINT_RADIUS);
        c.restore();
    }
    
    app.run();
});



/**
 * パーティクルクラス
 */
var Particle = tm.createClass({
    superClass: tm.app.Sprite,
    
    init: function(x, y, angle) {
        this.superInit(null, PARTICLE_WIDTH, PARTICLE_HEIGHT);
        this.image = PARTICLE_IMAGE;
        this.srcRect.x = angle*10;
        this.srcRect.width = 10;
        
        this.position.set(100, 100);
        
        this.x = tm.util.Random.randint(0, SCREEN_WIDTH);
        this.y = tm.util.Random.randint(0, SCREEN_HEIGHT);
        this.tweener.move(x, y, 1000, "easeOutCirc");
        this.rotation = 45;
        this.blendMode = "lighter";
    },
    
    update: function(app) {
        var p = app.pointing;
        
        // 拡大
        var length = tm.geom.Vector2.distance(this.position, p.position);
        if (length < POINT_RADIUS) {
            this.scaleX = this.scaleY = 2;
        }
        else {
            this.scaleX = this.scaleY = 1;
        }
        
        // 回転
        if (p.getPointing()) {
            this.rotation += 20;
        }
        else {
            this.rotation = 45;
        }
    }
});

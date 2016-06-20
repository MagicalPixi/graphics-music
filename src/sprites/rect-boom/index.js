/**
 * Created by zyg on 16/6/16.
 */

var basicWidth = 200;
var basicHeight = basicWidth;

var dxdy = [
  [-1,-1],
  [1,-1],
  [-1,1],
  [1,1]
]

function smallHide(rect,direction){
  var dx = dxdy[direction][0],
    dy = dxdy[direction][1];

  var speed = 3;
  var max = 60
  var count = 0;

  var x0 = rect.x
  var y0 = rect.y

  var _render =  rect.render;

  rect.render = function () {

    var d = speed * (count++)

    if(d >= max ){
      count = 0
      this.visible = false;
      return this.render = _render;
    }

    this.x = x0 + dx * d
    this.y = y0 + dy * d

    _render && _render.call(this)
  }
}

function hide(rect){

  var _render = rect.render;

  rect.render = function () {
    if(this.alpha <= 0){
      return this.render = _render;
      this.alpha = 1;
    }
    this.alpha -= 0.1

    _render && _render.call(this)
  }

  return rect
}

module.exports = function () {

  var sw = basicWidth/2
  var sh = basicHeight/2;
  var ssw = sw/2
  var ssh = sh/2

  var c = new PIXI.Container()
  c.showPlay = function () {
    hide(rect)
    srArr.map(function (sr,i) {
      smallHide(sr,i)
    })
  }

  var rect = new PIXI.Graphics()
  rect.beginFill(0xffffff)
  rect.drawRect(0,0,basicWidth,basicHeight)
  rect.endFill()
  c.addChild(rect);


  var srArr = [];
  for(var i=0;i<4;i++){
    var rs = new PIXI.Graphics();
    rs.beginFill(0xffffff)
    rs.drawRect(0,0,sw,sh)
    rs.endFill()

    rs.x = (i%2) * sw
    rs.y = parseInt(i/2) * sh

    srArr.push(rs)

    c.addChild(rs)
  }


  c.render = function () {
    this.children.map(function (c) {
      c.render && c.render()
    })
  }


  return c;
}
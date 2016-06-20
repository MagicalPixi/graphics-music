/**
 * Created by zyg on 16/6/15.
 */
module.exports = function (render) {

  var stage = new PIXI.Container();


  var rectBoom = require('../../sprites/rect-boom')

  var r = rectBoom();

  r.x = 200
  r.y = 200

  stage.addChild(r)

  stage.interactive = true;
  stage.on('mousedown', click)
  stage.on('touchstart', click)

  function click() {
    r.showPlay()
  }

  render(stage)
}
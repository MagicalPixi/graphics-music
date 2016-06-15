var loader = require('../../loader');
var addResource = require('./addResource')

var texts = [
  '方块1',
  '圆形1'
]

module.exports = function (render) {


  var startButtonFn = require('../../sprites/start-button')

  var stage = new PIXI.Container();

  texts.map(function (t, i) {
    var textObj = startButtonFn(t)

    textObj.x = (i % 4) * 120 + 30
    textObj.y = parseInt(i / 4) * 100 + 30

    textObj.interactive = true

    textObj.on('mousedown', fn)
    textObj.on('touchstart', fn)

    function fn(){
      console.log(1)
      window['scene'+(i+1)](render)
    }

    stage.addChild(textObj)
  })

  render(stage);
};
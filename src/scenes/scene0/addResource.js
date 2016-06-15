var json = [
  

];
var png = [
  
];

module.exports = function (add,callback) {

  add(json,'json','')
  .add(png,'png','')
  .load(callback);
}
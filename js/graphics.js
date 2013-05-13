
var Graphics = (function() {

  var areaSizeX;
  var areaSizeY;
  var coordinateAxisLineWidth = 0.5;
  var scale = 10;
  var margin = 20;

  function convertToRealPoint(srcX, srcY) {

  };

  function showCoordinateAxis(canvas, areaSizeX, areaSizeY) {
    canvas.strokeStyle = 'rgb(128, 128, 128)';
    canvas.lineWidth = coordinateAxisLineWidth;
    xAxisSrcX = margin;
    xAxisSrcY = areaSizeY/2;
    xAxisDistX = areaSizeX - margin;
    xAxisDistY = areaSizeY/2;
    yAxisSrcX = areaSizeX/2;
    yAxisSrcY = margin;
    yAxisDistX = areaSizeX/2;
    yAxisDistY = areaSizeY - margin;
    canvas.beginPath();
    canvas.moveTo(xAxisSrcX, xAxisSrcY);
    canvas.lineTo(xAxisDistX, xAxisDistY);
    canvas.closePath();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(yAxisSrcX, yAxisSrcY);
    canvas.lineTo(yAxisDistX, yAxisDistY);
    canvas.closePath();
    canvas.stroke();

    canvas.lineWidth = 0.1;
    for (var i = margin + scale; i < areaSizeY - margin; i = i + scale) {
      canvas.beginPath();
      canvas.moveTo(xAxisSrcX, i);
      canvas.lineTo(xAxisDistX, i);
      canvas.closePath();
      canvas.stroke();
    };

    for (var j = margin + scale; j < areaSizeX - margin; j = j + scale) {
      canvas.beginPath();
      canvas.moveTo(j, yAxisSrcY);
      canvas.lineTo(j, yAxisDistY);
      canvas.closePath();
      canvas.stroke();
    };
  };

  function setBackgroundColor(context, areaSizeX, areaSizeY) {
    context.beginPath();
    context.fillStyle = 'rgb(64,64,64)';
    context.fillRect(margin, margin, areaSizeX - 2 * margin , areaSizeY - 2 * margin);
  };

  function showAxisName(context) {
    context.font = "10pt Arial";
    context.fillText("Y Axis", 200, 10);
    context.fillText("X Axis", 400, 200);
  };

  return function(canvas, areaSizeX, areaSizeY, showAxis) {
    var canvas = canvas;
    var areaSizeX = areaSizeX;
    var areaSizeY = areaSizeY;
    var showAxis = showAxis;
    setBackgroundColor(canvas, areaSizeX, areaSizeY);
    if (showAxis) {
      showCoordinateAxis(canvas, areaSizeX, areaSizeY);
    };
    showAxisName(canvas);
  };
})();

Graphics.prototype = {
};

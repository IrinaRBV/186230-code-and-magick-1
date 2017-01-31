'use strict';

window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = rgba(0, 0, 0, 0.7);
	ctx.fillRect(110, 20, 280, 430);

	ctx.fillStyle = rgba(256, 256, 256, 1.0);
	ctx.strokeRect(100, 10, 270, 420);
	ctx.fillRect(100, 10, 270, 420);

	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура, вы победили!', 120, 40);
	ctx.fillText('Список результатов', 120, 70);

  
  var max = -1;
  var min = Infinity;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  } 


	var heigHistograms = 150;
	var histogramX = 40;
	var columnIndent = 50;
	var step = heigHistograms / max;;

	for (var i = 0; i < times.length; i++) {
		var name = names[i];
		var time = times[i];

		var height = step * time;

		ctx.restore();
    ctx.fillStyle = 'black';
    ctx.fillText(name, histogramX + columnIndent * i, 120 + heigHistograms);
    ctx.fillText(time.toFixed(0), histogramX + columnIndent * i, heigHistograms - height + 90);
	}

	if (name === 'Вы') {
		ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	} else {
		  var histogramBlue = ((Math.random() * 5) * 50).toFixed(0) + ', ' + '0.' + (4 + Math.floor((Math.random() * 5)));
      ctx.fillStyle = 'rgba(0, 0, ' + histogramBlue;
	}
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), 
	['Петя', 'Юля', 'Вася', 'Вы'],
  [25.07, 45.02, 15.25, 10.20]);



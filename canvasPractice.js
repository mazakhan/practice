var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
class block{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.color = "#FF0000"
		this.size = 20
		this.type = 0
	}
	draw(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size-1, this.size-1);
	}
}
var arr = []
for (var i = 0; i < 20; i++){
	var row = []
	for (var j = 0; j < 20; j++){
		var sq = new block(i*20, j*20)
		row.push(sq)
	}
	arr.push(row)
}

var paths = []

function printMouse(){
	var x = event.clientX;
	var y = event.clientY;
	if (x > 0 && x < 408){
		if (y > 0 && y < 408){
			document.getElementById("text").innerHTML = x + ", " + y
			var sq = arr[parseInt((x/20)-.5)][parseInt((y/20)-.5)]
			sq.color = "#00FFFF"
			if (!findInGrid(1)){
				sq.type = 1
				sq.color = "#F0F8FF"
			}
			else if (!findInGrid(2)){
				sq.type = 2
				sq.color = "#000000"
			}
			else{
				sq.type = 3
				sq.color = "#5F9EA0"
			}
		}
	}
}
function draw(){
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < arr[i].length; j++)
				arr[i][j].draw(ctx)
	}
}
function finder(){
	var path = []
	pathFinder(findInGrid(1), path)
	for (var i = 0; i < paths.length; i++){
		console.log(paths[i].length)
	}
	for (var i = 0; i < paths.length; i++){
		if (path.length === 0){
			path = paths[i]
		}
		else if(paths[i].length < path.length){
			path = paths[i]
		}
	}
	for (var i = 0; i < path.length; i++){
		path[i].color = "#000000"
	}
	draw()
}
function pathFinder(loc, path){
	if (!findInGrid(2)){
		return true
	} 
	//up
	if (loc[0] > 0 && (arr[loc[0]-1][loc[1]].type === 0 || arr[loc[0]-1][loc[1]].type === 2)){
		var newLoc = [loc[0]-1, loc[1]]
		sq = arr[newLoc[0]][newLoc[1]]
		sq.type = 1
		path.push(sq)
		if (pathFinder(newLoc, path)){
			var samePath = []
			for (var i = 0; i < path.length; i++){
				samePath.push(path[i])
			}
			paths.push(samePath)

		}
		sq.type = 0
		path.pop()
	}
	//down
	if (loc[0] < arr.length-1 && (arr[loc[0]+1][loc[1]].type === 0 || arr[loc[0]+1][loc[1]].type === 2)){
		var newLoc = [loc[0]+1, loc[1]]
		sq = arr[newLoc[0]][newLoc[1]]
		sq.type = 1
		path.push(sq)
		if (pathFinder(newLoc, path)){
			var samePath = []
			for (var i = 0; i < path.length; i++){
				samePath.push(path[i])
			}
			paths.push(samePath)

		}
		sq.type = 0
		path.pop()
	}
	//left
	if (loc[1] > 0 && (arr[loc[0]][loc[1]-1].type === 0 || arr[loc[0]][loc[1]-1].type === 2)){
		var newLoc = [loc[0],loc[1]-1]
		sq = arr[newLoc[0]][newLoc[1]]
		sq.type = 1
		path.push(sq)
		if (pathFinder(newLoc, path)){
			var samePath = []
			for (var i = 0; i < path.length; i++){
				samePath.push(path[i])
			}
			paths.push(samePath)

		}
		sq.type = 0
		path.pop()
	}
	if (loc[1] < arr.length-1 && (arr[loc[0]][loc[1]+1].type === 0 || arr[loc[0]][loc[1]+1].type === 2)){
		var newLoc = [loc[0],loc[1]+1]
		sq = arr[newLoc[0]][newLoc[1]]
		sq.type = 1
		path.push(sq)
		if (pathFinder(newLoc, path)){
			var samePath = []
			for (var i = 0; i < path.length; i++){
				samePath.push(path[i])
			}
			paths.push(samePath)
		}
		sq.type = 0
		path.pop()
	}
	return false
}


function findInGrid(num){
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < arr[i].length; j++){
			if (arr[i][j].type == num){
				return [i, j]
			}
		}
	}
	return false
}
const grid_ul = document.getElementById("grid")
const start = undefined
const end = undefined
var canClick = true
var mode = undefined
for (let i = 0; i < 20; i++){
    row = document.createElement("ul")
    row.setAttribute("class", "rows")
    row.setAttribute("Id", "row" + i)
    for (let j = 0; j < 20; j++){
        col = document.createElement("li")
        col.setAttribute("class", "cols")
        col.setAttribute("Id", "col" + j)
        row.appendChild(col)
    }
    grid_ul.appendChild(row)
}


function main(){
    hover()
    checkSnak()
    //doStuff()
}

// function djikstras(){

// }

function hover(){
    grid_ul.addEventListener("mouseenter", function(){
        rows = grid_ul.getElementsByClassName("rows")
        for (let i =0; i< rows.length; i++){
            rows[i].addEventListener("mouseenter", function(){
                cols = rows[i].getElementsByClassName("cols")
                for (let j = 0; j < cols.length; j++){
                    cols[j].addEventListener("mouseenter", function(){
                        col = cols[j]
                        col.classList.add("hovered")
                    })
                    cols[j].addEventListener("mouseleave", function(){
                        cols[j].classList.remove("hovered")
                    })
                    cols[j].onclick = function(){
                        if (cols[j].classList.contains("clicked")){
                            console.log("bluk")
                            cols[j].classList.remove("clicked")
                        }
                        else{
                            console.log("chuk")
                            cols[j].classList.add("clicked")
                        }
                    }
                }
            })
        }
    })
}

function checkSnak(){
    const snakButton = document.getElementById("snak")
    snakButton.onclick = function(){snake()}
}

function doStuff(){
    if (mode === "snake"){
        snake()
    }
}

function snake(){
    let game_over = false
    let snake = []
    var rows = grid_ul.getElementsByClassName("rows")
    let pos = [[randint(0, rows.length), randint(0, rows.length)]]
    //0 is north, 1 is east, 2 is south, 3 is west
    let direction = 1
        setInterval(function(){//if (!game_over){
            pos.push([])


        }, 20)
}


function randint(a,b){
    return parseInt((Math.random()*(a-b))+ b)
}

main()

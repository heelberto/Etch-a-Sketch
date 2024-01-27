const body = document.body;
const etchASketchContainer = document.createElement("div");
const gridContainer = document.createElement("div");

//etchASketchContainer.classList.add("etch-a-sketch-container");
gridContainer.classList.add("grid-container");


body.style.display = "flex"
body.style.justifyContent = "center";
etchASketchContainer.style.maxWidth = "960px";
etchASketchContainer.style.maxHeight = "960px";
//etchASketchContainer.style.border = "2px solid black";
gridContainer.style.display = "flex"

const numOfColumns = prompt("How many squares by how many squares would you like? 10-100")

body.append(etchASketchContainer);
etchASketchContainer.append(gridContainer);



for(let i = 0;i <numOfColumns;i++)
{   
    const newColumn = document.createElement("div");

    const columnName = "column" + (i+1);
    newColumn.classList.add(columnName);

    for(let j = 0;j<numOfColumns;j++)
    {
        const newSquare = document.createElement("div");
        //const squareName = i 

        newSquare.style.border = "2px solid black";
        let widthString = (960/numOfColumns) + "px"
        newSquare.style.width = widthString;
        newSquare.style.height = widthString;

        newSquare.addEventListener('mouseover',function(){
            newSquare.classList.add('active');
        });
    
        newColumn.appendChild(newSquare);
    }
    gridContainer.appendChild(newColumn);
    
}



/*
gridContainer.addEventListener('mouseover',function(e){
    if(e.target.tagName.toLowerCase() == 'div'){
        e.target.classList.add('active');
    }
});
*/

//gridContainer.addEventListener('mouseout', function (e) {
//    if (e.target.tagName.toLowerCase() === 'div') {
        //e.target.classList.remove('active');
//    }
//});
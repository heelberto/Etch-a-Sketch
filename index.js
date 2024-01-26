const body = document.body;
const etchASketchContainer = document.createElement("div");
const gridContainer = document.createElement("div");

etchASketchContainer.classList.add("etch-a-sketch-container");
gridContainer.classList.add("grid-container");

const numOfColumns = 16;

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
        const squareName = i 

        newSquare.style.border = "2px solid black";
        newSquare.style.width = "50px";
        newSquare.style.height = "50px";
    
        newColumn.appendChild(newSquare);
    }
    gridContainer.appendChild(newColumn);
    
}

gridContainer.addEventListener('mouseover',function(e){
    if(e.target.tagName.toLowerCase() == 'div'){
        e.target.classList.add('active');
    }
});

gridContainer.addEventListener('mouseout', function (e) {
    if (e.target.tagName.toLowerCase() === 'div') {
        //e.target.classList.remove('active');
    }
});
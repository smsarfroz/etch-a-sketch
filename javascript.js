/*
How to make a 16x16 grid of square divs ? 
insert 16 div horizontally in first line 
then insert 16 divs in next line just below it and so on.
How to do this ?

is hover like a onlick button ? 
do I have to addEventlistener for this ?
add a hover function for each square individually, right
how would divs look like in html file 
we could just style it in css file instead of doing it through dom
how do I do onhover here? 
give a popup asking the user to input the size 
why is new grid of custom size not generating ?

After a new input, delete the previous grid

How to ensure the size that the grid takes is constant regardless of grid length ? 

*/
const container = document.querySelector('#container');

const button = document.createElement("button");
button.textContent = "input square size";
container.appendChild(button);

let squareSize;
button.addEventListener('click', () => {
    squareSize = prompt("Enter the size of the sketching grid less than 100");
    console.log(squareSize);
    generateGrid();
});

console.log(squareSize);
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function generateGrid() {
    
    const totalSize = 50;
    const sketch = container.querySelector(".grid");
    if(sketch) {
        sketch.remove();
    }

    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);

    for (let i = 0; i < squareSize; ++i) {
        //rowi
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        //this row will contain 16 squares horizontally

        for (let j = 0; j < squareSize; ++j) {

            const squareDimension = 960/squareSize;
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `width: ${squareDimension}px; height: ${squareDimension}px`;
            row.appendChild(square);
            // ; border:2px solid black
            const col = random_rgba();

            //note - progressive darkening effect doesn't work yet
            square.addEventListener('mouseenter', () => {
                let curOpacity = parseFloat(square.style.opacity) || 0; 
                square.style.backgroundColor = col;
                if(curOpacity < 1) {
                    square.style.opacity+=0.1;
                }
            });
        }

        //how to flex these 16 squares in a row ?
        //just do inline css to div row 
        //but can do this css after I have already appended it as a child into container ? 

        row.style.cssText = "display:flex";
    }

}
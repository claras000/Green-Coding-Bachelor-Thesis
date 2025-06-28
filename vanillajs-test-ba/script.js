// Dateikomplexität
const TIEFE = 10;
const ELEMENTANZAHL = 10;

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById("root"); // adds Elements
    // recursive Element
    for (let i = 0; i <= ELEMENTANZAHL; i++) {
        const rekusivCopy = document.createElement("div");
        rekusivCopy.classList.add("rekursivElement");
        addChild(rekusivCopy, TIEFE)
        root.append(rekusivCopy);
    }
    const button = document.getElementById("colorButton");
    button.addEventListener("click", changeEverySecondCircleColor);
});

let counter = 0;
const targetLogMessage = "colors are changed";

/**
 * adds inherited elementgroups
 * @param {parentElement} circle
 */
function addChild(circle, number) {
    if (counter <= number) {
        const divElement = createParent();
        const node = document.createElement("p");
        const text = document.createTextNode(`Aktuelle Tiefe: ${counter}`);
        const circleChild = createCircle(counter);
        node.appendChild(text);
        divElement.appendChild(node);
        divElement.appendChild(circleChild);
        circle.appendChild(divElement);
        counter++;
        addChild(divElement, number);
        counter = 0;
    }
}

/**
 * creates circle with style
 * @returns circle
 */
function createCircle(index) {
    const circle = document.createElement("div");
    circle.className = "circle";
    const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
    const randomRadius = `${Math.floor(Math.random() * 51)}%`;
    if (index % 2 === 0)
        circle.style.borderRadius = randomRadius;
    circle.style.backgroundColor = randomColor;
    return circle;
}

//create parent element
function createParent() {
    const borderTop = document.createElement("div");
    borderTop.className = "borderTop";
    return borderTop;
}

//set circle color
function setColor(element) {
    const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
    const randomRadius = `${Math.floor(Math.random() * 51)}%`;
    element.style.backgroundColor = randomColor;
    element.style.borderRadius = randomRadius;
}

// set every second circle color new
function changeEverySecondCircleColor() {
    const circles = document.querySelectorAll(".circle");
    for (let i = 0; i < 9; i++)
        console.log("colors are changed");

    const colorChangePromises = Array.from(circles).map((circle, index) => {
        if (index % 2 === 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    setColor(circle)
                    resolve();
                }, 0);
            });
        }
        return Promise.resolve();
    });

    // Log after complete rendering due to promise
    Promise.all(colorChangePromises).then(() => {
        console.log("colors are changed");
    });
}


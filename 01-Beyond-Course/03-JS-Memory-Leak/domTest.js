const testDiv = document.createElement("div");
testDiv.style.height = "200px";
testDiv.style.width = "200px";
testDiv.style.backgroundColor = "red";

document.querySelector("body").appendChild(testDiv);

const testBtn = document.createElement("button");
testBtn.style.height = "100px";
testBtn.style.width = "100px";

document.querySelector("body").appendChild(testBtn);

let clickEventListener = () => {
    testDiv.remove();
    console.log(testDiv);
}

testBtn.addEventListener("click", () => {
    testDiv.remove();
    console.log(testDiv);
});

testBtn.addEventListener("mouseout", () => {
    testBtn.removeEventListener("click", clickEventListener);
    clickEventListener = null;
})
let inp = document.getElementById("inp")
let array = []
let screen = document.getElementById("screen")

function add() {
    array.push(inp.value);
    screen.innerHTML = ""
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        screen.innerHTML += `
        <div class="w-50 bg-warning text-white border rounded" id="div2">
        <span>${element}</span>
        <button class="btn btn-success text-white" id="but3" onclick="edit(${index})">EDIT</button>
        <button class="btn btn-danger text-white" id="but2" onclick="del(${index})">DELETE</button>
        </div>
        `
        show.innerHTML = "Schedule added successfully";
    }
}

function del(index) {
    array.splice(index, 1);
    console.log(array);
    alert("You have delected a list");
    screen.innerHTML = ""
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        screen.innerHTML += `
        <div class="w-50 bg-warning text-white border rounded" id="div2">
        <span>${element}</span>
        <button class="btn btn-success text-white" id="but3" onclick="edit(${index})">EDIT</button>
        <button class="btn btn-danger text-white" id="but2" onclick="del(${index})">DELETE</button>
        </div> 
        `
        show.innerHTML = "Schedule deleted successfully";
    }
}

function edit(index) {
    array.splice(index, 1, "new");
    console.log(array);
    alert("You have replaced a list");
    screen.innerHTML = ""
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        screen.innerHTML += `
        <div class="w-50 bg-warning text-white border rounded" id="div2">
        <span>${element}</span>
        <button class="btn btn-success text-white" id="but3" onclick="edit(${index})">EDIT</button>
        <button class="btn btn-danger text-white" id="but2" onclick="del(${index})">DELETE</button>
        </div> 
        `
        show.innerHTML = "Schedule replaced successfully";
    }
}
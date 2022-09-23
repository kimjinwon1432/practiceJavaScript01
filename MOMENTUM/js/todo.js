const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input"); //document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
        //use const -> ocur an error... "Assignment to constant variable"
let toDos = [];//비어있으면 페이지 초기화할때마다 localstorage에 저장된 것ㅇ ㅣ초기화됨.
const TODOS_KEY='todos';



function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id)
        //toDo : toDos 내부요소 중 하나...
    li.remove(); //remove li in DOM
                // li.id type is string --> turns into int.. DOM makes id to string
    toDos = toDos.filter(toDo => toDo.id!== parseInt(li.id));
    saveToDos();
    
}

function paintToDo(newTodo){
    console.log("i will paint ",newTodo )
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText=newTodo.text;
    button.innerText="X"
    button.addEventListener("click", deleteToDo)
    
    li.appendChild(span);
    li.appendChild(button);
    console.dir(button)
    toDoList.appendChild(li);

    console.log(li)
}

function saveToDos(newTodo){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;//copy value
    todoInput.value=""; //clear input\
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), 
    }
    toDos.push(newTodoObj); //when id("number") has saved.. the type is string
    console.log("hi",newTodoObj.id)
    paintToDo(newTodoObj);
    saveToDos();
}   

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos= localStorage.getItem(TODOS_KEY);

function sayHello(item){
    console.log("This is the turn of ",item);
}

if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;//초기화 되는것을 막기위해 이전의 todo값을 불러옴.
    console.log("savedToDos: ", typeof savedToDos.id);
    parsedToDos.forEach(paintToDo); //arrow function ==>
    
}
//지우고싶은 item제외하고 새로운 array를 만든다.
function sexyFilter(){ //true를 반환 -> obj 유지
    return true;
}
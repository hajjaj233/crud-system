var sname = document.getElementById("sitename")
var url = document.getElementById("siteurl")
var label = document.getElementById("thelabel")

var empty = []
if(localStorage.getItem("allInfo") != null){
    empty = JSON.parse(localStorage.getItem("allInfo"))
    showElement()
}
function inputs(){

    

    var list = {
        names:sname.value,
        urls: url.value
    }
   
    empty.unshift(list)
    // valid(empty[i].u)
    showElement()
    localStorage.setItem("allInfo",JSON.stringify(empty))
}


    function showElement(){
    var cartona = ""
    for (i = 0;i < empty.length; i++) {
        cartona+= `
        <div class="col-md-3 m-0 border border-1 border-black border-bottom-0 border-start-0 border-end-0">
                    <div class="index text-center bg-light p-3">
                        <span class="demo">${[i+1]}</span>
                    </div>
                </div>
                <div class="col-md-3 m-0 border border-1 border-black border-bottom-0 border-start-0 border-end-0">
                    <div class="index text-center bg-light p-3">
                        <span class="demo">${empty[i].names}</span>
                    </div>
                </div>
                <div class="col-md-3 m-0 border border-1 border-black border-bottom-0 border-start-0 border-end-0">
                    <div class="index text-center bg-light p-3">
                        <a href="${"http://www" + empty[i].urls+".com"}" class="btn btn-success  text-white px-3"> <i class="fa-solid fa-eye"></i>  visit</a>
                    </div>
                </div>
                <div class="col-md-3 m-0 border border-1 border-black border-bottom-0 border-start-0 border-end-0">
                    <div class="index text-center bg-light p-3 ">
                        
                        <button onclick="deleteItem(${i})" class="btn btn-danger text-white px-3"><i class="fa-solid fa-trash p-1"></i>delete</button>
                    </div>
                </div>
        
        `
        
    }
    document.getElementById("print").innerHTML=cartona;
}
function deleteItem(x){
    empty.splice(x,1)
    showElement()
    localStorage.setItem("allInfo",JSON.stringify(empty))
}


// function valid (y){
//     var regex =/^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-_]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9\-_\/?=&]*)?$/

//     if(regex.test(empty[i].urls) = true){
//         showElement();
//     }else{
//         window.alert("error");
//     }
// }
// invalid
// function isUrlValid(userInput) {
//     var flag = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//     if(flag == null){
//         document.getElementById("thelabel").innerHTML=("an invaled url")
//         empty.splice(x,1)
//     }else{
//         return true;
//     }
// }



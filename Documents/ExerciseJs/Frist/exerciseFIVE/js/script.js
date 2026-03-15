var content = document.getElementById("content");

var ul = document.createElement("ul");

content.appendChild(ul);

function addData() {

    var input = document.getElementById("dato");

    var li = document.createElement("li");

    li.textContent = input.value;

    ul.appendChild(li);

}
    

/*function CreateTable() {
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = "25";
    var td2 = document.createElement("td");
    td2.textContent = "25";

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);

    document.getElementById("content").appendChild(table);  
}*/
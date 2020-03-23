class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for(var updateIndex = 0; updateIndex < grades.length; updateIndex++){
      var tdName = document.createElement("td");
      tdName.textContent = grades[updateIndex].name;
      var tdCourse = document.createElement("td");
      tdCourse.textContent = grades[updateIndex].course;
      var tdGrade = document.createElement("td");
      tdGrade.textContent = grades[updateIndex].grade;
      var trow = document.createElement("tr");
      trow.append(tdName, tdCourse, tdGrade);
      tbody.append(trow);
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var trowRender = document.createElement("tr");
    for(var key in data){
      var tdRender = document.createElement("td");
      tdRender.textContent = data[key];
      trowRender.appendChild(tdRender);
    }
    var tdButton = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn", "btn-danger");
    button.textContent = "DELETE";
    tdButton.appendChild(button);
    trowRender.appendChild(tdButton);
    button.addEventListener("click", deleteGrade(data.id));
    return trowRender;
  }
}

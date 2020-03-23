class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for(var updateIndex = 0; updateIndex < grades.length; updateIndex++){
      var trowRender = this.renderGradeRow(grades[updateIndex], this.deleteGrade);
      tbody.appendChild(trowRender);
    }
    var pElement = document.querySelector("p");
    if(!grades){
      pElement.classList.remove("d-none");
    }else{
      pElement.classList.add("d-none");
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    var trowRender = document.createElement("tr");
    var tdNameRender = document.createElement("td");
    tdNameRender.textContent = data.name;
    trowRender.appendChild(tdNameRender);
    var tdCourseRender = document.createElement("td");
    tdCourseRender.textContent = data.course;
    trowRender.appendChild(tdCourseRender);
    var tdGradeRender = document.createElement("td");
    tdGradeRender.textContent = data.grade;
    trowRender.appendChild(tdGradeRender);
    var tdButtonRender = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "DELETE";
    tdButtonRender.appendChild(deleteButton);
    trowRender.appendChild(tdButtonRender);
    deleteButton.addEventListener("click", function(){
      deleteGrade(data.id)
    });
    return trowRender;
  }
}

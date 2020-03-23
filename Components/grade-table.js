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
}

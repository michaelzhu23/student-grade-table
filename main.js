var table = document.querySelector("table");
var gradeTable = new GradeTable(table);
var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);
var formElement = document.querySelector("form");
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, pageHeader);
app.start();

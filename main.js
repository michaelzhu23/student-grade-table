var table = document.querySelector("table");
var pElement = document.querySelector("p");
var gradeTable = new GradeTable(table, pElement);
var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);
var formElement = document.querySelector("form");
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();

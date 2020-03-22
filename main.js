var table = document.querySelector("table");
var gradeTable = new GradeTable(table);
var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);
var app = new App(gradeTable);
app.start();

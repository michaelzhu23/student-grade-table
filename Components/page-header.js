class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var averageGradeBadge = document.querySelector("span.badge");
    averageGradeBadge.textContent = newAverage;
  }
}

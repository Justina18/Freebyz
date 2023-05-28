function changeTab(tabId) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Show the selected tab content
  var selectedTabContent = document.getElementById(tabId);
  selectedTabContent.style.display = "block";
}


changeTab("tab1");
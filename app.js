// When the DOM has load, run the function load
document.addEventListener("DOMContentLoaded", load);

function load() {
  //initialise the tableau object, wait for the promise to return and grab the name of the dashboard
  tableau.extensions.initializeAsync().then(() => {
    const dashboard = tableau.extensions.dashboardContent.dashboard;
    console.log(dashboard.name);
  });
}
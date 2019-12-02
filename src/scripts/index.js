import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import '../styles/colors.css';
import "../styles/landing-page-header.css";
import "../styles/landing-page-main.css";
import "../styles/landing-page-footer.css";

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs');
  const tabInstances = M.Tabs.init(tabs);
  var collapsible = document.querySelectorAll('.collapsible');
  var collapsibleInstances = M.Collapsible.init(collapsible);
});


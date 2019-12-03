import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';
import '../styles/colors.css';
import '../styles/app-navBar.css';
import '../styles/app-main-header.css';
import '../styles/app-main-cards.css';
import '../styles/app-pagination.css';

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelectorAll('.dropdown-trigger');
  var dropdownInstance = M.Dropdown.init(dropdown);
});


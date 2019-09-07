document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);

    var collapseNav = document.querySelectorAll('.sidenav');
    var collapse = M.Sidenav.init(collapseNav);

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

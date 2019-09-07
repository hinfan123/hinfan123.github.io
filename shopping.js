document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);

    var collapseNav = document.querySelectorAll('.sidenav');
    var collapse = M.Sidenav.init(collapseNav);

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});
$(document).ready(function(){
  $(".add-row").click(function(){
      var item = $("#item").val();
      var type = $("#type").val();
      $('#myTable tr:last').after('<tr><td>'+item+'</td><td>'+ type +'</td></tr>')
  });
)};

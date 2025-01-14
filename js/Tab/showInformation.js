$(document).ready(function() {

  $("#tab1_content").hide();
  $("#tab2_content").hide();
  $("#tab3_content").hide();
  $("#tab4_content").hide();
  $("#tab5_content").hide();
  $("#tab6_content").hide();

  $("#tab1").click(function() {
    $("#tab1_content").show();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();
    $("#tab6_content").hide();
  });

  $("#tab2").click(function() {
    $("#tab2_content").show();
    $("#tab1_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();
    $("#tab6_content").hide();
  });

  $("#tab3").click(function() {
    $("#tab3_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();
    $("#tab6_content").hide();
  });

  $("#tab4").click(function() {
    $("#tab4_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab5_content").hide();
    $("#tab6_content").hide();
  });
  $("#tab5").click(function(){
    $("#tab5_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab6_content").hide();
  });
  $("#tab6").click(function(){
    $("#tab6_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();
  })

  
});
function invisibleAll () {
  $(".stepone").css("display", "none");
  $(".steptwo").css("display", "none");
  $(".stepthree").css("display", "none");
  $(".stepfour").css("display", "none");
  $(".stepfive").css("display", "none");
  $(".stepsix").css("display", "none");
  $(".stepseven").css("display", "none");

  $(".imageconnect").css("display", "none");
  $(".imagechoose").css("display", "none");
  $(".imagemake").css("display", "none");
  $(".imagesee").css("display", "none");
  $(".imagepress").css("display", "none");
  $(".imagepull").css("display", "none");
}

$(document).ready(function(){
  $(".btn").on("click",function(){
    invisibleAll();
    $(".stepone").css("display", "inline-block")
    $(".imageconnect").css("display", "inline-block")
    $(".intro").css("display", "none")
  });
  $(".btn2").on("click",function(){
    invisibleAll();
    $(".steptwo").css("display", "inline-block")
    $(".imagechoose").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
  $(".btn3").on("click",function(){
    invisibleAll();
    $(".stepthree").css("display", "inline-block")
    $(".imagemake").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
  $(".btn4").on("click",function(){
    invisibleAll();
    $(".stepfour").css("display", "inline-block")
    $(".imagesee").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
  $(".btn5").on("click",function(){
    invisibleAll();
    $(".stepfive").css("display", "inline-block")
    $(".imagepress").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
  $(".btn6").on("click",function(){
    invisibleAll();
    $(".stepsix").css("display", "inline-block")
    $(".imagepull").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
  $(".btn7").on("click",function(){
    invisibleAll();
    $(".stepseven").css("display", "inline-block")
      $(".intro").css("display", "none")
  });
});

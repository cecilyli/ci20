

function invisibleAll () {
  $(".steponeconnect").css("display", "none");
    $(".steptwochoose").css("display", "none");
  $(".connecttext").css("display", "none");
    $(".wordconnect").css("display", "none");
      $(".wordchoose").css("display", "none");
        $(".choosetext").css("display", "none");
    $(".wordconnected").css("display", "none");
      $(".wordchosen").css("display", "none");
      $(".wordmake").css("display", "none");
        $(".wordpulled").css("display", "none");
      $(".columnthreepull").css("display", "none");
        $(".stepthreemake").css("display", "none");
          $(".stepthreetransform").css("display", "none");

              $(".waittext").css("display", "none");
              $(".stepfourwait").css("display", "none")
              $(".wordwait").css("display", "none");
              $(".columnthreewait").css("display", "none");
                $(".wordready").css("display", "none");

                  $(".wordpress").css("display", "none");
                    $(".stepfivepress").css("display", "none")
                      $(".wordpressed").css("display", "none");
                        $(".columnthreepress").css("display", "none");
                        $(".presstext").css("display", "none");

                        $(".wordpull").css("display", "none");
                          $(".stepsixpull").css("display", "none")
                          $(".wordpulled2").css("display", "none");
                            $(".wordpull6").css("display", "none");
                            $(".columnthreepull2").css("display", "none");

                                $(".stepsevenenjoy").css("display", "none");
                               $(".content7").css("display", "none");

}

$(document).ready(function(){
  $(".one").on("click",function(){
    invisibleAll();
    $(".steponeconnect").css("display", "inline-block")
    $(".connecttext").css("display", "inline-block")
        $(".wordconnect").css("display", "inline-block");
            $(".wordconnected").css("display", "inline-block");


  });
  $(".two").on("click",function(){
    invisibleAll();
    $(".steptwochoose").css("display", "inline-block")
    $(".choosetext").css("display", "inline-block")
        $(".wordchoose").css("display", "inline-block");
            $(".wordchosen").css("display", "inline-block");


  });

  $(".three").on("click",function(){
    invisibleAll();
    $(".stepthreemake").css("display", "inline-block")
    $(".maketext").css("display", "inline-block")
        $(".wordmake").css("display", "inline-block");
            $(".wordpulled").css("display", "inline-block");
              $(".stepthreetransform").css("display", "inline-block");
                $(".columnthreepull").css("display", "inline-block");



  });
  $(".four").on("click",function(){
    invisibleAll();
        $(".stepfourwait").css("display", "inline-block")
        $(".wordwait").css("display", "inline-block");
    $(".waittext").css("display", "inline-block")
      $(".columnthreewait").css("display","inline-block");
        $(".wordready").css("display", "inline-block");




  });


  $(".five").on("click",function(){
    invisibleAll();

        $(".wordpress").css("display", "inline-block");
          $(".stepfivepress").css("display", "inline-block")
          $(".wordpressed").css("display", "inline-block");
         $(".columnthreepress").css("display", "inline-block");
         $(".presstext").css("display", "inline-block");




  });

  $(".six").on("click",function(){
    invisibleAll();

        $(".wordpull").css("display", "inline-block");
          $(".stepsixpull").css("display", "inline-block")
          $(".wordpulled2").css("display", "inline-block");
            $(".wordpull6").css("display", "inline-block");
             $(".columnthreepull2").css("display", "inline-block");


  });

  $(".seven").on("click",function(){
    invisibleAll();

        $(".stepsevenenjoy").css("display", "inline-block");
  $(".content7").css("display", "inline-block");

  });
});

$(document).ready(function() {

      $(".slider").on("input", function() {

        var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
        $(this).css('background', '-webkit-linear-gradient(left, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + percent + '%, hsl(224, 65%, 95%) ' + percent + '%)');

        var value = Number($(this).val());
        switch (value) {
         case 50:
            $(".views").html("50K PAGEVIEWS");
            Price(12);
            break;

          case 100:
            $(".views").html("100K PAGEVIEWS");
            Price(16);
            break;

          case 150:
            $(".views").html("500K PAGEVIEWS");
            Price(24);
            break;

          case 200:
            $(".views").html("1M PAGEVIEWS");
            Price(36);
            break;

          default:
            $(".views").html("10K PAGEVIEWS");
            Price(8);
            break;
        }
      });


      function Price(p) {
        if ($(".form-check-input").prop("checked")) {
          p = 0.75 * p;
        } else {
          p = p;
        }
        $(".pricing").html("$" + p + ".00");
      }

       $(".form-check-input").on("change",function(){
         var value = $(".pricing").text().replace(/[^0-9\.]/g,"");
         var price = parseInt(value);
         if($(this).prop("checked")){
           $(".pricing").html("$" + 0.75*price + ".00");
         }else{
           $(".pricing").html("$" + price/0.75 + ".00");
         }
       });

    });

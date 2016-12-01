/*
 Created by Kristina Turukhanova, Buguzov Akhmed, Ruslan Aliev, Isa Eldarhanov, Musa Djamiliev on 27.11.2016.
 */
jQuery(document).ready(function(){
	
    /*Animate scroll*/
    $("a[href^='#']").click(function(){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html, body").animate({
            scrollTop : destination
        },1000);
        return false;
    });

     $(".burger_menu").click(function(){
        $(this).next().slideToggle();
    });

    /*Accordion script*/
     $(".accordion p").hide().prev().click(function(){
        $(".accordion p").slideUp();
        $(this).next().not(":visible").slideDown();
    });

    /*Tabs script*/
    $(".tab_item").not(":first").hide();
    $(".tab_container .tab").click(function(){
        $(".tab_container .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

     //E-mail Ajax Send
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});/*end Ready*/
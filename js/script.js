$(function()
{    
    function showSection(sectionID)
    {
        $("section").hide();
        $(sectionID).fadeIn();
    }

    showSection("#experience");

    $(".js-navlink").click(function(){
        event.preventDefault();

        if($(this).parent().hasClass("uk-active"))
            return;

        $(".uk-active").removeClass("uk-active");
        showSection($(this).attr("href"));
        $(this).parent().addClass("uk-active");
        UIkit.offcanvas("#offcanvas-nav").hide();
    });
});

$(function()
{    
    function showSection(sectionID)
    {
        $("section").hide();
        $(sectionID).fadeIn();
    }

    showSection("#experience");

    $(".nav-link").click(function(){
        event.preventDefault();

        if($(this).hasClass("active"))
            return;

        $(".active").removeClass("active");
        showSection($(this).attr("href"));
        $(this).addClass("active");
    });
});

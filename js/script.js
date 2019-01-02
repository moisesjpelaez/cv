$(function()
{
    // Menu and submenu variables
    var menuNames = ["Acerca de", "Diseño de Videojuegos", "Otros", "Contacto"];
    var menuItems = [[],
        ["Completados", "En desarrollo", "Pausados"],
        ["3d", "Música"],
        []];
    // End of menu and submenu variables

    // Custom contents
    var aboutContent = "<div class='about'>Diseñador y Desarrollador de Videojuegos<br>Desarrollador Web<br>Tecnólogo en Mecatrónica egresado de ITLA<br>Fundador de RainArt Games<br></div>";

    var contactContent = "";
    contactContent += "<div id='contact-card'>";
    contactContent += "<div class='contact-left'>";
    contactContent += "<div class='contact-name'>Moisés Peláez</div>";
    contactContent += "<div class='contact-title'>Diseño y Desarrollo de Videojuegos</div>";
    contactContent += "</div>";
    contactContent += "<div class='contact-right'>";
    contactContent += "<div class='contact-mail'>moises.jpelaez@gmail.com<br>(809) 501-8532</div>";
    contactContent += "</div>";
    contactContent += "</div>";
    // End of custom contents

    // Content objects

    // Games
    var paused = [
        ["NoneLands Alpha Demo", "nonelands-demo", "Juego aventura, plataforma 3d con algunos elementos RPG. Arte y conceptos de Moro Studios.<br>Plataformas: PC, Mac, Linux<br><br><a href='http://gamejolt.com/games/nonelands/45528' target='_blank'>Demo</a>"]];
    var pausedObjects = [];
    var pausedString = "";

    // Assigns the data to be called on click
    pausedString += "<div class='sub-main' data-content='2'>";

    for (var i = 0; i < paused.length; i++)
    {
        pausedObjects.push(new GameItem(paused[i][0], paused[i][1], paused[i][2]));
        pausedString += pausedObjects[i].htmlString;
    }

    pausedString += "</div>";

    var development = [["Gallina Hen Reloaded", "gallina-hen-reloaded", "Top-Down shooter donde la Gallina deberá rescatar a los pollitos. Remake de Gallina Hen.<br>Plataformas: PC, Mac, Linux<br><br><a href='http://gamejolt.com/games/gallina_hen_reloaded/259512' target='_blank'>Prototipo</a>"],
    ["Metakora", "metakora-prototype", "Juego aventuras y exploración inspirado en las sagas de Metroid. Más detalles pronto.<br>Plataformas: PC, Mac, Linux<br><br><a href='http://gamejolt.com/games/metakora-prototype/162305' target='_blank'>Prototipo</a>"]];
    var developmentObjects = [];
    var developmentString = "";

    // Assigns the data to be called on click
    developmentString += "<div class='sub-main' data-content='1'>";

    for (var i = 0; i < development.length; i++)
    {
        developmentObjects.push(new GameItem (development[i][0], development[i][1], development[i][2]));
        developmentString += developmentObjects[i].htmlString;
    }

    developmentString += "</div>";

    var releases = [
        ["NoneLands Prototype", "nonelands-prototype", "Juego aventura, plataformas 3d. Prototipo de NoneLands.<br>Plataformas: PC, Mac, Linux<br><br><a href='https://vimeo.com/73550183' target='_blank'>Video</a>"],
        ["Durim", "durim", "Durim es un juego casual para Android disponible en Google Play<br>Plataformas: Android, Web<br><br><a href='http://gamejolt.com/games/durim/45901' target='_blank'>Juego</a>"],
        ["Gallina Hen", "gallina-hen", "Juego hecho en 72 horas. Ganador del segundo lugar en el GameJam Santo Domingo.<br>Plataformas: PC, Mac, Linux<br><br><a href='https://moisesjpelaez.itch.io/gallinahen' target='_blank'>Juego</a>"],
        ["NoneRace", "nonerace", "Juego de carreras desarrollado junto a la Comunidad Dominicana de Desarrolladores de Videojuegos.<br>Plataformas: Windows, Mac, Linux<br><br><a>No disponible</a>"]];
    var releaseObjects = [];
    var releaseString = "";

    // Assigns the data to be called on click
    releaseString += "<div class='sub-main' data-content='0'>";

    for (var i = 0; i < releases.length; i++)
    {
        releaseObjects.push(new GameItem (releases[i][0], releases[i][1], releases[i][2]));
        releaseString += releaseObjects[i].htmlString;
    }

    releaseString += "</div>";

    var gameString = releaseString + developmentString + pausedString;

    // Others
    var images = ["3d-girl", "air", "akio", "gun", "jetpack"];
    var imageString = "";

    imageString += "<div class='sub-main' data-content='0'>";

    for (var i = 0; i < images.length; i++)
    {
        imageString += "<div class='image' data-image='" + images[i] + "' style=background-image:url('img/3d/" + images[i] + ".jpg')></div>";
    }

    imageString += "</div>";

    var musics = [["Air", "3d-platformer-music"],
        ["Gallina Hen", "gallinahen-music"],
        ["Prueba en Linux Multimedia Studio", "lmms-test"],
        ["NoneRace Menú Principal", "nonerace-menu-track"],
        ["NoneRace Carrera", "nonerace-race-track"],
        ["Eyeball", "eyeball"],
        ["Key Objects", "key-objects"],
        ["Rojo", "rojo"]];
    var musicObjects = [];
    var musicString = "";

    musicString += "<div class='sub-main' data-content='1'>";

    for (var i = 0; i < musics.length; i++)
    {
        musicObjects.push(new AudioObject(musics[i][0], musics[i][1]));
        musicString += musicObjects[i].htmlString;
    }

    musicString += "</div>";

    var otherString = imageString + musicString;
    // End of content objects

    // Blend all contents, the menuContents.length should be same as menuName.length and menuItems.length
    var menuContents = [aboutContent, gameString, otherString, contactContent];

    // Left menu panel
    var menuString = "";

    for (var i = 0; i < menuNames.length; i++)
    {
        menuString += "<div class='left-menu-button' data-content='" + i + "'>" + menuNames[i] + "</div>";
    }

    $("#left-menu").html(menuString);
    // End of left menu panel

    // Sub-content
    var webContentObjects = [];
    var contentString = "";

    for (var i = 0; i < menuNames.length; i++)
    {
        webContentObjects.push(new WebContent (menuNames[i], menuItems[i], menuContents[i]));
        contentString += "<div class='sub-content' data-content='" + i + "'>";
        contentString += webContentObjects[i].htmlString;
        contentString += "</div>";
    }

    $("#sub-content").html(contentString);
    $(".sub-content").hide();
    $(".sub-main").hide();
    // End of sub-content

    // Main menu interaction
    $(".left-menu-button:first-child").addClass("selected");
    $(".sub-content:first-child").show();

    $(".left-menu-button").click(function()
    {
        $(".left-menu-button").removeClass("selected");
        $(".content-menu-item").removeClass("selected");
        $(this).addClass("selected");

        $(".sub-content").hide();
        $(".sub-main").hide();
        $(".sub-main:first-child").show();
        $(".content-menu-item:first-child").addClass("selected");
        $(".sub-content").each(function(i)
        {
            if ($(".left-menu-button.selected").attr("data-content") == i)
            {
                $(this).fadeIn();
            }
        });

        $(".app-title").siblings().hide();
    });
    // End of main menu interaction

    // Content menu interaction
    $(".content-menu-item").click(function()
    {
        $(".content-menu-item").removeClass("selected");
        $(this).addClass("selected");

        $(".sub-main").hide();
        $(".sub-main").each(function(i)
        {
            if ($(".content-menu-item.selected").attr("data-content") == $(this).attr("data-content"))
            {
                $(this).fadeIn();
            }
        });

        $(".app-title").siblings().hide();
    });
    // End of content menu interaction

    // Lightbox interaction
    $(".image").click(function()
    {
        var currentImage = "<div class='blender-image' style=background-image:url('img/3d/" + $(this).attr("data-image") + ".jpg')></div>";
        $("#light-content").html(currentImage);
        $(".light-box").fadeIn();
    });

    $(".app-title").siblings().hide();

    $(".app-title").on("mouseover", function()
    {
        $(this).siblings().fadeIn();
        $(this).parent().addClass("top-view");
    });

    $(".app-title").on("mouseleave", function()
    {
        var $current = $(this);
        $(this).siblings().hide();
        $current.parent().removeClass("top-view");
    });

    $(".app-title").click(function()
    {
        var currentApp = "<iframe class='webapp' src='webapps/" + $(this).attr("data-folder") + "/main.html'></iframe>";
        $("#light-content").html(currentApp);
        $(".light-box").fadeIn();
    });

    $(".light-box").hide();
    $(".light-box").click(function(event)
    {
        $(".light-box").fadeOut();
    });
    // End lightbox interaction
});

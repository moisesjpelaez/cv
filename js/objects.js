function WebContent (title, menuItems, mainContent)
{
    this.title = title || "";
    this.menuItems = menuItems || [];
    this.mainContent = mainContent || "";

    this.htmlString = this.setString();
}

WebContent.prototype = {
    setString: function ()
    {
        var title = this.title;
        var menuItems = this.menuItems;
        var mainContent = this.mainContent;
        var htmlString = "";

        htmlString += "<div class='content-title'>" + title + "</div>";
        htmlString += "<div class='content-menu'>";

        for (var i = 0; i < menuItems.length; i++)
        {
            htmlString += "<div class='content-menu-item' data-content='" + i + "'>" + menuItems[i] + "</div>";
        }

        htmlString += "</div>";
        htmlString += "<div class='main-content'>" + mainContent + "</div>";

        return htmlString;
    }
}

function GameItem (title, image, content)
{
    this.title = title || "";
    this.image = image || "";
    this.content = content || "";

    this.htmlString = this.setString();
}

GameItem.prototype = {
    setString: function()
    {
        var title = this.title;
        var image = this.image;
        var content = this.content;
        var htmlString = "";
        var dataItem = this.dataItem;

        htmlString += "<div class='item' style=background-image:url('img/games/" + image + ".jpg')>";
        htmlString += "<div class='item-content'>";
        htmlString += "<div class='item-title'>" + title + "</div>";
        htmlString += "<div class='item-description'>" + content + "</div>";
        htmlString += "</div>";
        htmlString += "</div>";

        return htmlString;
    }
}

function AppItem (title, folder, content)
{
    this.title = title || "";
    this.folder = folder || "";
    this.content = content || "";

    this.htmlString = this.setString();
}

AppItem.prototype = {
    setString: function()
    {
        var title = this.title;
        var folder = this.folder;
        var content = this.content;
        var htmlString = "";
        var dataItem = this.dataItem;

        htmlString += "<div class='app'>";
        htmlString += "<div class='app-title' data-folder='" + folder + "'>" + title + "</div>";
        htmlString += "<div class='app-box'></div>";
        htmlString += "<div class='app-description'>" + content + "</div>";
        htmlString += "</div>";

        return htmlString;
    }
}

function AudioObject (title, source)
{
    this.title = title || "";
    this.source = source || "";
    this.htmlString = this.setString();
}

AudioObject.prototype = {
    setString: function ()
    {
        var title = this.title;
        var source = this.source;
        var htmlString = "";

        htmlString += "<div class='audio'>";
        htmlString += "<div class='audio-title'>" + title + "</div>";
        htmlString += "<div class='audio-container'><audio controls>";
        htmlString += "<source src='music/" + source + ".ogg' type='audio/ogg'>";
        htmlString += "</audio></div>";
        htmlString += "</div>";

        return htmlString;
    }
}

// function fillString (array, object, Constructor, customClass, customData)
// {
//     var varString = "";
//
//     for (var i = 0; i < array.length; i++)
//     {
//         varString += "<div class='sub-main' data-content='" + i + "'>";
//
//         for (var j = 0; j < array[i].length; j++)
//         {
//             object.push(new Constructor (array[i][0], array[i][1], array[i][2]));
//         }
//
//         varString += "</div>";
//     }
// }

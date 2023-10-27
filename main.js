$(document).ready(function(){
    //Modal
$(".feed-content").click(function(){
    $(".modal").removeClass("hidden");
})
    var inFeed = true;
    var inProjects = false;
    var inAbout = false;
    var inContact = false;

    //Load Feed When Starts
    $("#mainbody").load("feed.html")
    //To Feed 
    $("#feed").click(function(){
        $("#mainbody").load("feed.html")
        inFeed = true;
        inProjects = false;
        inAbout = false;
        inContact = false;
        updateUnderline();
    });

    //To Projects
    $("#projects").click(function(){
        $("#mainbody").load("projects.html")
        inProjects = true;
        inFeed = false;
        inAbout = false;
        inContact = false;
        updateUnderline();   
    });

    //To AboutMe
    $("#aboutme").click(function(){
        $("#mainbody").load("aboutme.html")
        inAbout = true;
        inProjects = false;
        inFeed = false;
        inContact = false;
        updateUnderline();
    });

    //To Contact
    $("#contact").click(function(){
        $("#mainbody").load("contact.html")
        inContact = true;
        inProjects = false;
        inFeed = false;
        inAbout = false;
        updateUnderline();
    })

  
updateUnderline();

function updateUnderline(){
    $(".nav-item").removeClass("underline-item");
    if(inFeed === true){
        $('#feed').addClass("underline-item");
    }else if (inProjects === true){
        $('#projects').addClass("underline-item");
    }else if (inAbout === true){
        $('#aboutme').addClass("underline-item");
    }else if(inContact === true){
        $('#contact').addClass("underline-item");
    }
}

});


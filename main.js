$(document).ready(function(){

    //Modal com Event Delegation
   /* $("#mainbody").on("click", ".feed-content", function () {
        $(this).find(".modal").removeClass("hidden");
        $(this).find(".overlay").removeClass("hidden");
    });

    $("#mainbody").on("click", ".btn-close", function () {
        $(this).closest(".modal").addClass("hidden");
        $(this).closest(".overlay").addClass("hidden");
        alert("clicked")
        console.log($(this).closest(".modal").addClass("hidden"));
    });  - Necessario Ajustar*/ 

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

    //Dark Mode
    $('.cover-image').click(function(){
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")){
            $(".cover-image").css({
                'background-color' : 'var(--quartenary-color )'
            })
            $("#light-bulb").css({
                'opacity': '1'
            });
            $('#light-bulb-2').css({
                'opacity': '0'
            })
        }else{

            $(".cover-image").css({
                'background-color' : 'var(--main-color)'
            })
            $('#light-bulb-2').css({
                'opacity': '1'
            })
            $('#light-bulb').css({
                'opacity': '1'
            })
        }
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


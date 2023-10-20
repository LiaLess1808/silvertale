//================================================================================
//===================================== MENU =====================================
//================================================================================  
    var checkbox = document.getElementById("check-icon");
    var moveSidebar = document.getElementById("sidebar");

    checkbox.addEventListener(
        "change", 
        function() 
        {
            if (checkbox.checked) 
            {
                // Mostrar o sidebar quando a checkbox está marcada
                moveSidebar.style.left = "0px"; 
            } 
            else 
            {
                // Sumir com o sidebar quando a checkbox está desmarcada
                moveSidebar.style.left = "-280px"; 
                
            }
        }
    );

//================================================================================
//==================================== SIDEBAR ===================================
//================================================================================
    let arrow = document.querySelectorAll(".arrow");

    for (var i = 0; i < arrow.length; i++) 
    {
        arrow[i].addEventListener(
            "click", 
            (e) => 
            {
                //selecting main parent of arrow

                let arrowParent = e.target.parentElement.parentElement;
                arrowParent.classList.toggle("showMenu");
            }
        );
    }

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);

    $(function () 
    {
        resizeScreen();

        $(window).resize(
            function () 
            {
                resizeScreen();
            }
        );

        $('.bx-menu').click(
            function () 
            {
                if (document.body.clientWidth > 400) 
                {
                    $('.sidebar').toggleClass('close');
                } 
                else 
                {
                    $('.sidebar').toggleClass('small-screen');
                }
            }
        );

        function resizeScreen() 
        {
            if (document.body.clientWidth < 400) 
            {
                $('.sidebar').addClass('close');
            } 
            else 
            {
                $('.sidebar').removeClass('close');
            }
        }
    });
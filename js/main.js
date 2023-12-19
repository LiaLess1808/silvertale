//================================================================================
//================================ LOCK SCROLL ===================================
//================================================================================

document.addEventListener("DOMContentLoaded", function () 
{
    var dSCheckbox = document.getElementById("check-icon");

    dSCheckbox.addEventListener("change", function () 
    {
    
        // Adiciona ou remove o ouvinte de eventos de rolagem dependendo do estado da checkbox
        
        if (dSCheckbox.checked) 
        {
            window.addEventListener("wheel", blockScroll, { passive: false });
        } 
        else 
        {
            window.removeEventListener("wheel", blockScroll);
        }
    });

    function blockScroll(event) 
    {
        event.preventDefault();
    }
});
//================================================================================
//============================= LANG DROPDOWN ====================================
//================================================================================
    

    function dropDown() 
    {
        document.getElementById("dropDownLang").classList.toggle("showIdiomas");
    }
  
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) 
    {
        if (!event.target.matches('.dropDownButton') && !event.target.matches('#iconLang')) 
        {
            var dropdowns = document.getElementsByClassName("idiomas");
            var i;
            for (i = 0; i < dropdowns.length; i++) 
            {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('showIdiomas')) 
                {
                    openDropdown.classList.remove('showIdiomas');
                }
            }
        }
    }
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
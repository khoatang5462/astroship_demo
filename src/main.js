
const topMenu = document.getElementById('top-menu');
const toggleMenu = document.getElementById('top-menu-icon');
const icon = toggleMenu.querySelector('.fa-xmark')
topMenu.classList.add('hidden');

toggleMenu.onclick = function (){
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-xmark")
    }
    else{
         icon.classList.replace("fa-xmark", "fa-bars")
    }
}

toggleMenu.addEventListener('click', () => {
  topMenu.classList.toggle('hidden')  
})

// drop down menu


const dropDownMenu = document.getElementById('dropdown-menu');
const dropDownIcon = document.getElementById('dropdownNavbarLink');
const chevronIcon = document.querySelector('.fa-chevron-down'); 


dropDownMenu.classList.add('hidden');

dropDownIcon.onclick = function (event) {
    event.stopPropagation();

    if (chevronIcon.classList.contains("fa-chevron-up")) {
        chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }

    dropDownMenu.classList.toggle('hidden');
};

document.onclick = function (event) {
    if (!dropDownIcon.contains(event.target) && !dropDownMenu.contains(event.target)) {
        dropDownMenu.classList.add('hidden');

        if (chevronIcon.classList.contains("fa-chevron-up")) {
            chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
        }
    }
};


// 

const headerBorder = document.getElementById('header');
const header = document.getElementsByTagName('header')[0]; 

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) { 
        headerBorder.style.borderBottom = '1px solid #E5E7EB'; 
        header.style.padding = '5px 0'; 
    } else {
        headerBorder.style.borderBottom = 'none'; 
        header.style.padding = '16px 0'; 
    }
});


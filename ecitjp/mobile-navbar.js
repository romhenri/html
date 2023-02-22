const mobileMenu = document.getElementById('mobile-menu')


addEventListener("click", menu())


function menu() {
    console.log('Funcionou');
}

// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//         this.mobileMenu = document.querySelector(mobile-menu)
//         this.navList = document.querySelector (class: nav-list)
//         this.navLinks = document.querySelectorAll(navLinks)

//         this.activeClass = "active";
//     }

//     addClickEvent() {
//         this.mobileMenu.addEventListener("click", () => console.log("Só Deus sabe como, mas deu certo."))
//     }

//     init() {
//         if (this.mobileMenu){
//             this.addClickEvent();
//         } return this;
//     }
// }

// const mobileNavBar = new MobileNavbar (
//     ".mobile-menu"
//     ".nav-list"
//     ".nav-list li"

// )


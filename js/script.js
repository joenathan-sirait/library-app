function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    const profilesidebar = document.getElementById("profile-sidebar")
    const actionsidebar = document.getElementById("action-sidebar")
    const main = document.getElementById("main")
    if (sidebar.classList.contains("col-lg-1") || profilesidebar.classList.contains("d-none") ||  actionsidebar.classList.contains("d-none")) {
        main.classList.add("col-lg-10")
        sidebar.classList.add("col-lg-2");
        sidebar.classList.add("col-md-2");
        profilesidebar.classList.remove("d-none")
        actionsidebar.classList.remove("d-none")
        sidebar.classList.remove("col-lg-1");
        sidebar.classList.remove("col-md-1");
        main.classList.remove("col-lg-11");
      
    } else {
        sidebar.classList.remove("col-lg-2")
        sidebar.classList.remove("col-md-2")
        main.classList.remove("col-lg-10")
        profilesidebar.classList.add("d-none")
        actionsidebar.classList.add("d-none")
        sidebar.classList.add("col-lg-1");
        sidebar.classList.add("col-md-1");
        main.classList.add("col-lg-11");
      
    }
    console.log("test");
  }
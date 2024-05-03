import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

return(
  <nav>
    return(
      {linksList}
    )
  </nav>

)
}

export default NavBar;

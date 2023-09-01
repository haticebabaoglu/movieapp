import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
    <nav class="navbar">
      <div class="logo">
        <a href="#">TVDB</a>
      </div>
      <ul class="links">
        <li><a href="#">Filmler</a></li>
        <li><a href="#">Diziler</a></li>
        <li><a href="#">Kisiler </a></li>
        <li><a href="#">Daha fazla</a></li>
      </ul>
      <div class="box">
    <form name="search">
        <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();"/>
    </form>
    <i class="fas fa-search"></i>

</div>
    </nav>
  </header>
    </div>
  );
};

export default Navbar;
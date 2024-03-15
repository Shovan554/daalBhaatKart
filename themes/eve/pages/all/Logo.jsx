import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.png" alt="DaalBhaatKart"  style={{ maxWidth: '100px', maxHeight: '100px' }}/>
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};

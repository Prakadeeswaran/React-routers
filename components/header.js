import React from "react";
import Navbar from "./navbar";
class Header extends React.Component {
  navList = [
    { id: 1, value: "Bus", varity: "Volvo" },
    { id: 1, value: "Car", varity: "Audi" },
    { id: 1, value: "Train", varity: "Chennai Express" }
  ];
  render() {
    return <Navbar navList={this.navList} />;
  }
}
export default Header;

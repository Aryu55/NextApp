import { Fragment } from "react";
import MainNavigation from "./main-navigation.jsx"

const layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{children}</main>
    </Fragment>
  );
};

export default layout;

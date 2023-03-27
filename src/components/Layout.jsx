import Contact from "../pages/Contact";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Contact />
    </>
  );
};

export default Layout;

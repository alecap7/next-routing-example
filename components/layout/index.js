import Head from "./head";
import Nav from "./nav";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = ({ children, pageTitle }) => (
  <div style={layoutStyle}>
    <Head title={pageTitle} />
    <Nav />
    {children}
  </div>
);

export default Layout;

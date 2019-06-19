import Layout from "../components/layout";

const Content = props => <h2>About</h2>;

const Page = props => (
  <Layout pageTitle="My app - about">
    <Content />
  </Layout>
);

export default Page;

import Layout from "../components/layout";

const Content = props => <h2>Home</h2>;

const Page = props => (
  <Layout pageTitle="My app - home">
    <Content />
  </Layout>
);

export default Page;

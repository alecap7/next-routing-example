import Layout from "../components/layout";
import Link from "next/link";
import { withRouter } from "next/router";

const PostLink = ({ id }) => (
  <li>
    <Link as={`/posts/${id}`} href={`/posts?id=${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

const PostContent = ({ id }) => (
  <div>
    <h1>{id}</h1>
  </div>
);

const isEmpty = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const Posts = ({ router }) => (
  <React.Fragment>
    {isEmpty(router.query) ? (
      <Layout pageTitle="My app - posts">
        <h1>Posts</h1>
        <ul>
          <PostLink id="post1" />
          <PostLink id="post2" />
          <PostLink id="post3" />
        </ul>
      </Layout>
    ) : (
      <PostContent id={router.query.id} />
    )}
  </React.Fragment>
);

export default withRouter(Posts);

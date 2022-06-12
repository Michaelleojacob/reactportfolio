import Disqus from 'disqus-react';
import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState('');
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
    import(`../blog/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const disqusShortname = 'michaelleojacob.portfolio'; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: 'https://michaelleojacob.github.io/reactportfolio/', //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <Helmet>
        <title>michaelleojacob react-portolfio - blog details</title>
        <meta
          name='description'
          content='michaelleojacob react-portolfio - blog details'
        />
      </Helmet>
      <div className='mi-blog-details mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Markdown>{content}</Markdown>
          <div className='mi-blog-details-comments mt-30'>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;

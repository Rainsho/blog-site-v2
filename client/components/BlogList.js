import React from 'react';
import Link from 'next/link';

const BlogList = ({ loading, blogs, me }) => {
  console.log('me in blog list', me);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      {blogs.map(({ id, name }) => (
        <p key={id}>
          <Link href={`/blog/${id}`}>
            <a>{name}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default BlogList;

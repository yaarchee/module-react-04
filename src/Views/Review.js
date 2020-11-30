import makeFetch from '../Services/makeFetch';
import { useEffect, useState } from 'react';

export default function Review({ rev }) {
  console.log(rev);
  return (
    <>
      {rev.length > 0 ? (
        <ul>
          {rev.map(({ author, content }, index) => (
            <li key={index}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Oops something wrong..</p>
      )}
    </>
  );
}

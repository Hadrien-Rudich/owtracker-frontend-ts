import { useState } from 'react';
import RQ1 from './RQ1';
import RQ2 from './RQ2';

export default function RQMain() {
  const [currentPage, setCurrentPage] = useState(<RQ1 />);

  return (
    <div>
      <button
        className="button bg-fourthColor text-secondaryTextColor"
        type="button"
        onClick={() => setCurrentPage(<RQ1 />)}
      >
        RQ1
      </button>
      <button
        className="button bg-thirdColor text-secondaryTextColor"
        type="button"
        onClick={() => setCurrentPage(<RQ2 />)}
      >
        RQ2
      </button>
      <button type="button" onClick={() => setCurrentPage(<RQ id={1} />)}>
        First Post
      </button>
      {currentPage}
    </div>
  );
}

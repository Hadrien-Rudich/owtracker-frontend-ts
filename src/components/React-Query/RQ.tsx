/* eslint-disable no-nested-ternary */
import { useQuery } from '@tanstack/react-query';
import { getPost } from './api/posts';
import { getUser } from './api/users';

export default function Post({ id }: { id: number }) {
  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  });

  if (postQuery.status === 'loading') {
    return <h1 className="text-5xl text-activeColor mt-24">Loading...</h1>;
  }

  if ((postQuery.status = 'error')) {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>
        {postQuery.data.title}
        {userQuery.isLoading
          ? 'Loading user...'
          : userQuery.isError
          ? 'Error loading user'
          : userQuery.data.name}
      </h1>
      <p>{postQuery.data.body}</p>
    </div>
  );
}

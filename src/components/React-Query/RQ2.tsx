import {
  useQuery,
  //  useMutation, useQueryClient
} from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
}
const posts: Post[] = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
  { id: 3, title: 'post 3' },
];

function RQ2() {
  const wait = (ms: number) => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // const queryClient = useQueryClient();

  // const newPostMutation = useMutation({
  //   mutationFn: (title: string) => {
  //     return wait(1000).then(() => posts.push({ id: posts.length + 1, title }));
  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['posts']);
  //   },
  // });

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  if (postsQuery.isLoading) {
    return <h3 className="text-5xl text-activeColor mt-24">Loading...</h3>;
  }
  if (postsQuery.isError) {
    return (
      <pre className="text-5xl text-activeColor mt-24">
        {JSON.stringify(postsQuery.error)}
      </pre>
    );
  }

  return (
    <div className="text-5xl text-activeColor mt-24">
      <h1>Posts List 2</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
      {/* {!newPostMutation.isLoading ? (
        <button
          type="button"
          className="bg-thirdColor text-5xl w-12 border"
          onClick={() => newPostMutation.mutate('New Post')}
        >
          +
        </button>
      ) : (
        <p>...</p>
      )} */}
    </div>
  );
}

export default RQ2;

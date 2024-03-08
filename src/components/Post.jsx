import "../css/Post.css";
export default function Post({ posts }) {
  
    const postItem = posts.map((post) => {
    return (
      <li key={post.id} style={{listStyle: 'none', borderBottom: '1px dashed green'}}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    );
  });

  return <ul>{postItem}</ul>;
}

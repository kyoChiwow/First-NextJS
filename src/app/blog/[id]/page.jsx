import Link from "next/link";

async function page({ params }) {
  const { id } = params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await data.json();

  return (
    <div className="mt-8">
      <header>
        <h1 className="text-3xl text-center font-bold">Blog Details Here!</h1>
      </header>
      <div className="card bg-base-100 w-[50%] mx-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{post.title}!</h2>
          <p>{post.body}</p>
          <div className="card-actions justify-end">
            <Link href={"/"} className="btn btn-outline">
              Back Home!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

// Home.jsx
import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      appwriteService.getPosts().then((posts) => {
        setPosts(posts.documents);
      });
    }
  }, [authStatus]);

  const handleSearch = () => {
    if (searchTerm) {
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredPosts);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-full py-8">
      <Container>
        {authStatus ? (
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-full max-w-md">
                <div className="flex items-center border border-gray-200 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleSearch}
                    placeholder="Search..."
                    className="w-full pl-8 text-sm text-gray-700 outline-none"
                  />
                </div>
              </div>
            </div>
            {searchResults.length > 0 ? (
              <div className="flex flex-wrap">
                {searchResults && searchResults.map((post) => (
                  <div key={post.$id} className="p-2 w-1/4">
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap">
                {posts && posts.map((post) => (
                  <div key={post.$id} className="p-2 w-1/4">
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-48">
            <h1 className="text-2xl font-bold">Please Login to see Posts</h1>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
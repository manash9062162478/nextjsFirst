"use client"
import { SinglePost, SingleUser, useStore } from "../store/useStore";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();

  const [user, setUser] = useState<SingleUser>();
  const { posts, fetchPosts,fetchSinglePost } = useStore();
  
  const [singlePosts, setSinglePosts] = useState<SinglePost | null>();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    fetchPosts();
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Add loading state if needed
  }

  return (
    <div className="flex">
      {/* Left Part: User Profile */}
      <div className=" h-full w-1/4 p-4 ">
        <div className="w-80 h-full flex flex-col items-center fixed shadow-2xl left-0 top-0  py-9">
          <img
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="User"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <p className="font-bold text-xl text-center">
              {user.firstname} {user.lastname}
            </p>
            <p className="text-gray-600 text-center">{user.email}</p>
            <div className="mt-5">
              <div className="text-gray-700 font-semibold   p-4">
                <p>
                  <span className="text-green-700 mr-2">DOB:</span>
                  {user.birthDate}
                </p>
                <p>
                  <span className="text-green-700 mr-2">Address:</span>
                  {user.address.street}, {user.address.city},{" "}
                  {user.address.zipcode}
                </p>
                <p>
                  <span className="text-green-700 mr-2">Phone:</span>
                  {user.phone}
                </p>
                <p>
                  <span className="text-green-700 mr-2">Website:</span>
                  {user.website}
                </p>
                <p>
                  <span className="text-green-700 mr-2">Company:</span>
                  {user.company.name}
                </p>
                <img style={{width:"200",height:"200"}} className="mt-20  rounded" src="https://cdn.ttgtmedia.com/rms/onlineimages/screenshot_1_google_maps_on_desktop_f_mobile.jpg" alt="" />
                <button className="mt-5 border bg-red-800 w-3/4 rounded text-white font-semibold py-2"  onClick={()=>{
                    localStorage.clear()
                    router.push('/');
                }}  >Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="ml-1/4  p-4 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          {posts &&
            posts.map((post: SinglePost, index: number) => (
              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title.slice(0, 25)}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.content.slice(0, 52)}
                  </p>
                  <button
                    
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                    onClick={()=>{fetchSinglePost(post.id);setSinglePosts(posts.find(e=>e.id===post.id))}}
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {singlePosts && (
        <div style={{width:"75%",right:"10px",height:"100vh"}} className="fixed top-0   bg-black z-20">
          <button
                onClick={()=>setSinglePosts(null)}
            className="absolute top-2 right-2 text-white hover:border rounded-full"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-4 bg-slate-300 h-full">

            <img src={singlePosts.image} alt={singlePosts.title} className="rounded-lg w-1/2" />
          <h3 className="text-2xl font-bold mb-4">{singlePosts.title}</h3>
            <p className="text-gray-700 mb-4">{singlePosts.content}</p>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Profile;

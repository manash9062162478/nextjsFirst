import create from 'zustand';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface SingleUser extends User {}

interface Post {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
}

export interface SinglePost extends Post {}

interface StoreState {
  users: User[];
  posts: Post[];
  singlePost: SinglePost | null;
  singleUser: SingleUser | null;
  fetchUsers: () => Promise<void>;
  fetchPosts: () => Promise<void>;
  fetchSinglePost: (id: number) => Promise<void>;
  fetchSingleUser: (id: number) => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  users: [],
  posts: [],
  singlePost: null,
  singleUser: null,
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.org/users');
    const users = await response.json();
    console.log("users",users);
    
    set({ users });
  },
  fetchPosts: async () => {
    const response = await fetch('https://jsonplaceholder.org/posts');
    const posts = await response.json();
    set({ posts });
  },
  fetchSinglePost: async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.org/posts/${id}`)
    const post = await response.json();
    set({ singlePost: post });
  },
  fetchSingleUser: async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.org/users?id=${id}`);
    const user = await response.json();
    set({ singleUser: user });
  },
}));

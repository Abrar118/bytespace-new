export type Course = {
  title: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
};

// Rows are fixed in the design, not natural wrapping.
export const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
] as const;

export const courseAvatars = [
  "/assets/avatars/hero-avatar-02.png",
  "/assets/avatars/course-avatar-02.jpg",
  "/assets/avatars/course-avatar-03.jpg",
  "/assets/avatars/course-avatar-04.jpg",
] as const;

const shared = {
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
};

export const courses = [
  {
    ...shared,
    title: "Learn Figma from Basic",
    image: "/assets/course-figma.jpg",
  },
  {
    ...shared,
    title: "Build Digital Asset",
    image: "/assets/course-digital-assets.jpg",
  },
  {
    ...shared,
    title: "the Power of Big Data",
    image: "/assets/course-big-data.jpg",
  },
  {
    ...shared,
    title: "Balancing Productivity and Wellbeing",
    image: "/assets/course-productivity.jpg",
  },
  {
    ...shared,
    title: "Mastering Money Management",
    image: "/assets/course-money-management.jpg",
  },
  {
    ...shared,
    title: "From Idea to Startup Success",
    image: "/assets/course-startup.jpg",
  },
] as const satisfies readonly Course[];

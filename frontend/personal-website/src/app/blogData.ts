export interface BlogType {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: BlogType[] = [
  {
    title: "Dinner Date with Xavier",
    date: "10/22/23",
    description: "Over the Summer I had a Fun Day Chefing with My Bestie",
    slug: "/blogs/blog2"
  },
  {
    title: "My Cats",
    date: "10/23/23",
    description: "Meet My Cats Investigating My Bagel",
    slug: "/blogs/blog1"
  }
];

export default blogs;
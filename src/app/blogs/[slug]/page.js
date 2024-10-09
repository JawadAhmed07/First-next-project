const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        slug: "getting-started-with-nextjs",
        description: "A beginner’s guide to setting up your first Next.js project.",
    },
    {
        id: 2,
        title: "Understanding Next.js Routing",
        slug: "understanding-nextjs-routing",
        description: "Learn how routing works in Next.js, including pages and dynamic routes.",
    },
    {
        id: 3,
        title: "Next.js vs. React: Key Differences",
        slug: "nextjs-vs-react",
        description: "An overview of the differences between React and Next.js and when to use each.",
    },
    {
        id: 4,
        title: "Building a Blog with Next.js",
        slug: "building-a-blog-with-nextjs",
        description: "Step-by-step guide to building a simple blog using Next.js and Markdown.",
    },
    {
        id: 5,
        title: "Deploying Your Next.js App",
        slug: "deploying-your-nextjs-app",
        description: "A guide to deploying your Next.js app on platforms like Vercel and Netlify.",
    },
];

export async function generateMetadata({ params }, parent) {
    const slug = params.slug;
    const blog = blogs.find((data) => data.slug === slug);

    if (!blog) {
        return {
            title: "Blog not found",
        };
    }

    return {
        title: blog.title,
    };
}

export default function BlogsDetails({ params }) {
    const blog = blogs.find((data) => data.slug === params.slug);

    if (!blog) {
        return (
            <div className="container mx-auto p-20 text-center">
                <h1 className="font-bold border my-1 p-2 border-pink-300 text-3xl">Blog not found</h1>
            </div>
        );
    }

    return (
        <div className="container capitalize mx-auto p-20 text-center">
            <h1 className="font-bold border my-1 p-2 border-pink-300 text-3xl">{blog.title}</h1>
            <h1 className="font-bold border my-1 p-2 border-pink-300 text-3xl">{blog.description}</h1>
        </div>
    );
}

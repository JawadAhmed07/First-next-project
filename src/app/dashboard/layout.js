import Link from "next/link";

export default function DashboardLayout({ children }) {
  return <section className="min-h-screen  flex">
    <div className="border-r-2 border-r-purple-800">
      <Link
        className="text-center p-2 w-full block hover:bg-purple-200" href="/dashboard/settings">
        Settings
      </Link>
      <Link
        className="text-center p-2 w-full block hover:bg-purple-200" href="/dashboard/profile">
        profile
      </Link>
    </div>
    {/* <div className="w-2/3 "></div> */}

    {children}</section>
}

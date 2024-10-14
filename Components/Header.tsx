import Link from "next/link";

export default function Header() {
    return (
        <ul className="flex gap-10 bg-pink-100">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">contactus</Link></li>
    </ul>
    )
}
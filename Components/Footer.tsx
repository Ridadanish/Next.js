import Link from "next/link";

export default function Footer() {
    return (
        <ul className="flex gap-10 bg-blue-100">
      <li><Link href="/details">More Details</Link></li>
      <li><Link href="/certifications">Certifications</Link></li>
      <li><Link href="/sociallinks">SocialLinks</Link></li>
    </ul>
    )
}
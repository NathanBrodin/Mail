import Link from "next/link";


export default function Discover() {
    return (
        <div>
            <h1>Discover Mail</h1>

            <Link href="/api/auth/login">Log in</Link>
        </div>
    )
}
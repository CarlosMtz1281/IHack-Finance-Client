import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <h1>LANDING PAGE</h1>
      <Link href={"/signin"}>
        <button>Sign in</button>
      </Link>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p className="font-bold">Yo soy about page</p>
      <p>
        <Link href={"/about/address"} className="text-blue-500 underline">
          Address page
        </Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Address page
      </button>
    </div>
  );
};

export default AboutPage;

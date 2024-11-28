"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <p className="text-5xl hidden md:block text-center">
        Hello {user?.username}!!!
      </p>
      <UserButton />
    </>
  );
}

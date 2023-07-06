"use client";

import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "@/functions/All_Apis";
import { Suspense } from "react";

export default function ClientPage() {
  const { data, error } = useSWR("api/character", fetcher);
  console.log(data);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">Client Page</p>
      <Suspense fallback={<>Loading...</>}>
        {data?.map((c) => (
          <ul key={c.id}>
            <Link
              passHref
              href={`/server/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
            >
              <li>{c.name}</li>
            </Link>
          </ul>
        ))}
      </Suspense>
    </section>
  );
}

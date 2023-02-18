import Head from "next/head";
import Card from "../components/card";
import { useState } from "react";
import { jobListings } from "../src/data";

export default function Home() {
  const [jobPosting, setJobPosting] = useState(jobListings[0]);

  return (
    <>
      <Head>
        <title>NodeFlair Clone</title>
        <meta name="description" content="NodeFlair Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-10 text-center text-5xl">NodeFlair Clone</header>

      <div className=" bg-gray-100">
        <div className="container mx-auto sm:flex sm:flex-row flex flex-col sm:px-52 shrink-0">
          <div className="basis-1/4">
            <ul>
              {jobListings.map((data, key) => {
                return (
                  <div onClick={() => setJobPosting(data)}>
                    <Card props={data} />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col flex-shrink flex-grow">
            <div className="sticky top-2 max-h-screen bg-white rounded-lg text-left p-2 m-2 mx-1">
              <p>{jobPosting.job_title}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 text-center text-5xl ">Footer</section>
    </>
  );
}

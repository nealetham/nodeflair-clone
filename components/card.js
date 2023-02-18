import { IoLocationSharp } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import Image from "next/image";

const Stack = ({ stack }) => {
  return (
    <div className="flex flex-row gap-2 m-1 mx-3">
      {stack.map((val) => {
        return (
          <h1 className="bg-gray-100 rounded-lg p-1 px-2 text-sm text-gray-500 font-medium break">
            {val}
          </h1>
        );
      })}
    </div>
  );
};

export default function Card({ props }) {
  return (
    <>
      <section className="shadow-sm bg-white p-2 m-1 my-2 rounded-lg cursor-pointer hover:shadow-lg duration-200 hover:-translate-y-0.5 border border-r-2 border-gray-300">
        <div className="flex flex-row justify-between p-1">
          <div className="flex flex-row flex-grow">
            <div
              className=" self-start justify-center content-center md:mr-2 flex-grow-0 mr-4"
              id="company_image"
            >
              <Image
                src={props.img}
                width={55}
                height={55}
                alt={props.company}
                className="rounded-lg m-2 mt-1"
              />
            </div>

            <div className="flex flex-grow">
              <div className="basis-5/6" id="job_description">
                <div className="flex flex-row">
                  <h1 className="text-sm pt-0.5">{props.company}</h1>
                  <div className="flex flex-row px-3">
                    <p>{props.rating}</p>
                    <MdStarRate className="pt-2 text-lg" />
                  </div>
                </div>

                <div>
                  <h1 className="flex flex-grow font-bold leading-5">
                    {props.job_title}
                  </h1>
                </div>

                <div className="flex flex-row gap-2 mb-1 mt-1">
                  <h1 className="text-nodeflair-dark font-semibold whitespace-nowrap text-sm">
                    {props.age} ago
                  </h1>
                  <div className="flex flex-row">
                    <IoLocationSharp className="text-md text-gray-400 mt-0.5" />
                    <h1 className="text-sm text-gray-400">{props.location}</h1>
                  </div>
                </div>

                <div className="flex flex-row m-1">
                  <h1 className="whitespace-nowrap text-sm pt-0.5 font-semibold ">
                    S${props.starting_pay} - S${props.ending_pay} / mth
                  </h1>
                  <h1 className="bg-gray-100 text-sm font-normal mt-0.5 mx-2 px-2">
                    EST
                  </h1>
                </div>
              </div>
            </div>

            <div className=" overflow-x-clip p-1 min-w-max">
              <h1 className="text-nodeflair-dark px-2 bg-nodeflair-light text-center py-1 font-medium rounded-md break-words ...">
                {props.role}
              </h1>
            </div>
          </div>
        </div>
        <hr className="-mb-1 mx-3 mt-0  " />

        <div className="whitespace-nowrap overflow-clip mt-2">
          <Stack stack={props.stack} />
        </div>
      </section>
    </>
  );
}

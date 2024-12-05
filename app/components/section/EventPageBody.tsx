import React from "react";

interface IEventPageBody {
  key: number;
  title: string;
  descrition: string;
  descritionOne: string;
}
const EventPageBody = ({
  key,
  title,
  descrition,
  descritionOne,
}: IEventPageBody) => {
  return (
    <section className="flex flex-col justify-center items-end" key={key}>
      <div className="py-20 max-w-screen-sm flex flex-col">
        <h3 className="text-5xl font-barlow font-semibold">{title}</h3>
        <p className="text-2xl font-sans py-4">{descrition}</p>
        <p className="text-2xl font-sans">{descritionOne}</p>
      </div>
    </section>
  );
};

export default EventPageBody;

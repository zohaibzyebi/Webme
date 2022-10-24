import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredPortfolio } from "../../data/services";

export default function Services() {
  const [hover, setHover] = useState(1);


  return (
    <div id="services" className="my-20">
      <h1 className="title"> WEBMEDIGITAL </h1>

      {/* <ul>
        {list.map((item) => (
          <ServiceList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="flex justify-center flex-wrap my-5 services" id="services">
        {featuredPortfolio.map((d, i) => (
          <Link href={`/services/${d.id}`} key={d.id}>
            <div
              className={`w-full md:w-1/5 m-5 md:m-10 p-5 flex flex-col items-center justify-center cursor-pointer shadow rounded-lg ${
                hover == i && "hover"
              }`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
            >
              <Image src={d.img} alt="" height="150" width="150" className="rounded-full" />
              <h3 className="text-xl font-bold text-blue-900 my-5">{d.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ServiceList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

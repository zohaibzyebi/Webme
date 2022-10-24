import Head from "next/head";
import React from "react";
import Payment from "../../components/Service/Payment";
import { featuredPortfolio } from "../../data/services";

const Service = ({ service }) => {
  if (!service) return <h1>No service found</h1>;

  return (
    <div className="container my-5">
      <Head>
        <title>{service.title}</title>
      </Head>
      <img src={service.img} className="w-full h-[400px] mx-auto" alt="" />
      <h1 className="title">{service.title}</h1>
      <p>{service.description}</p>

      <Payment service={service} />
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = featuredPortfolio.map((item) => `/services/${item.id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  console.log(context);
  const currentService = featuredPortfolio.find((item) => item.id === +context.params.id);

  return {
    props: { service: currentService || null },
  };
};

export default Service;

import React from "react";
import Title from "./Title";
import { service } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />

      <div className="section-center services-center">
        {service.map((link) => {
          return (
            <article className="service" key={link.id}>
              <span className="service-icon">
                <i className={link.classnameicon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{link.service}</h4>
                <p className="service-text">{link.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

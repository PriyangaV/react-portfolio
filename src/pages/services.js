import React from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaSyncAlt
} from "react-icons/fa";

const Services = () => {
  const servicesArray = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: "Progressive Web Apps",
      subTitle: "html, css, javascript",
      description:
        "The design adapts to the different screen sizes of the devices."
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Frontend JavaScript",
      subTitle: "React, Angular, Ember, Vue.js",
      description:
        "I'm more front end focused and love to work with latest technologies."
    },
    {
      id: 3,
      icon: <FaServer />,
      title: "Backend JavaScript",
      subTitle: "Node.js, Express.js, Mongoose",
      description:
        "The best tools for developing JS applications with minimal code that can run on any device."
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "DBMS",
      subTitle: "MongoDB, MySQL, Postgres, GraphQL",
      description: "I use the most popular databases for my apps."
    },
    {
      id: 5,
      icon: <FaSyncAlt />,
      title: "Agile/Scrum",
      subTitle: "Jira, Trello, Slack",
      description:
        "I use agile/scrum methodologies and using collaboration tools such as Jira, Trello, Slack."
    }
  ];
  return (
    <>
      <section className='service section' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='Services'>What I do</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='row services'>
            {servicesArray.map((service) => {
              return (
                <div className='service-item animate-top' key={service.id}>
                  <div className='service-item-inner'>
                    <div className='icon'>{service.icon}</div>
                    <h2>{service.title}</h2>
                    <h4>{service.subTitle}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

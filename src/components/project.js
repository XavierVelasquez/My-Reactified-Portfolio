import React from 'react';

function Project(props) {
  return (
    <section id={props.id}>
      <h2>{props.title}</h2>
      <img className="project-img" src={props.image} alt={props.title} />
      <a href={props.link}>GitHub Repository</a>
    </section>
  );
}

export default Project;
import React from 'react';
import './Projects.css';
import { faSearch,faCalendarAlt,faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projects = [
    {
      name: 'LuceneAI-Search',
      description: 'Integrates Apache Lucene with AI to enhance JabRef\'s search, improving performance and relevance for large bibliographic databases using NLP and ML.',
      githubUrl: 'https://github.com/harshithsaiv/LuceneAI-Search',
      icon: faSearch
    },
    {
      name: 'TimeTuner',
      description: 'TimeTuner is a Python application that facilitates scheduling appointments using OpenAI\'s GPT-3.5 model and Google Calendar API. It parses office hours, checks availability, and creates events in the calendar.',
      githubUrl: 'https://github.com/harshithsaiv/TimeTuner',
      icon: faCalendarAlt
    },
    {
      name: 'Code_weaving',
      description: 'This repository contains an SML program designed to calculate the sum of a specific series.',
      githubUrl: 'https://github.com/harshithsaiv/Code_weaving',
      icon: faCode
    },
    {
        name: 'GoSh',
        description: 'This is an implementation of UNIX commands in Golang .',
        githubUrl: 'https://github.com/harshithsaiv/Gosh',
        icon: faCode
      },
    {
        name: 'Joint-BankAccount',
        description: 'This project demonstrates a basic Hardhat use case implmenting a bank account smart conteact shocasing the use case of bloackchain in banking.',
        githubUrl: 'https://github.com/harshithsaiv/Joint-BankAccount',
        icon: faCode
      },
      {
        name: 'DVWA',
        description: 'DVWA (Damn Vulnurable Web Applications ) developed a web application that has user dashboard showing the various web vulnerabilities and the quizzes on those vulnurabilities that help the user to practise the different skills that is required to gain knowledge about web vulnerabilities ',
        githubUrl: 'https://github.com/harshithsaiv/DVWA',
        icon: faCode
      },
      {
        name: 'soapsearch',
        description: 'Search-tool for movies',
        githubUrl: 'https://github.com/harshithsaiv/soap_search',
        icon: faCode
      },
  ];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <a key={project.name} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-box">
            <FontAwesomeIcon icon={project.icon} size="3x" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

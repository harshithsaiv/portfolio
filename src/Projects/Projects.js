import React from 'react';
import './Projects.css';
import { faSearch,faCalendarAlt,faCode,faTerminal,faBuildingColumns,faGlobe,faUserSecret, faMemory} from '@fortawesome/free-solid-svg-icons';
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
        icon: faTerminal
      },
    {
        name: 'Joint-BankAccount',
        description: 'This project demonstrates a basic Hardhat use case implmenting a bank account smart conteact shocasing the use case of bloackchain in banking.',
        githubUrl: 'https://github.com/harshithsaiv/Joint-BankAccount',
        icon: faBuildingColumns
      },
      {
        name: 'DVWA',
        description: 'DVWA (Damn Vulnurable Web Applications ) developed a web application that has user dashboard showing the various web vulnerabilities and the quizzes on those vulnurabilities that help the user to practise the different skills that is required to gain knowledge about web vulnerabilities ',
        githubUrl: 'https://github.com/harshithsaiv/DVWA',
        icon: faGlobe
      },
      {
        name: 'CryptonicPy',
        description: 'An Open-souce Cryptographic library for Python ',
        githubUrl: 'https://github.com/harshithsaiv/CryptonicPy',
        icon: faUserSecret
      },
      {
        name: 'Cache_Memory',
        description: 'This repository contains a Java implementation of a basic cache system.Problem Statement: Design a 4-way set associative memory with page size of 4K for a computer with main memory size of 4G. The CPU has data width of 32 bytes and Cacheline is same as the CPU data width. you can use any software language you prefer to code the 4-way set associative cache controller.',
        githubUrl: 'https://github.com/harshithsaiv/CryptonicPy',
        icon: faMemory
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

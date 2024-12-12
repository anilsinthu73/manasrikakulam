import React from 'react';
import gmRao from '../images/gm_rao.jpg';
import revanth from '../images/revanth.jpg';
import malleswari from '../images/malleswari.jpg';
import sarathBabu from '../images/sarath_babu.jpg';
import suryarao from '../images/suryarao.jpg'
import '../styles/FamousPersons.css';

const FamousPersons = () => {
  const samplePersons = [
    { id: 1, name: "Grandhi Mallikarjuna Rao", dob: "14-07-1950", birthplace: "Rajam", achievements: "Established GMR Group", photo: gmRao, wikiLink: "https://en.wikipedia.org/wiki/Grandhi_Mallikarjuna_Rao" },
    { id: 2, name: "Lolla Venkata Revanth Kumar Sharma", dob: "10-02-1990", birthplace: "Srikakulam", achievements: "Won Indian Idol Season 9", photo: revanth, wikiLink: "https://en.wikipedia.org/wiki/Lolla_Venkata_Revanth_Kumar_Sharma" },
    { id: 3, name: "Karnam Malleswari", dob: "01-06-1975", birthplace: "Voosavanipeta", achievements: "Olympic medalist", photo: malleswari, wikiLink: "https://en.wikipedia.org/wiki/Karnam_Malleswari" },
    { id: 4, name: "Sarath Babu", dob: "31-07-1951", birthplace: "Amadalavalasa", achievements: "Film actor", photo: sarathBabu, wikiLink: "https://en.wikipedia.org/wiki/Sarath_Babu" },
    { id: 5, name: "Kutikuppala Surya Rao", dob: "10-10-1954", birthplace: "Kintali", achievements:"Doctor specializing in HIV/AIDS treatment", photo:suryarao , wikiLink: "https://en.wikipedia.org/wiki/Sarath_Babu" }
  ];

  return (
    <div className="grid"> 
      {samplePersons.map((person) => (
        <div key={person.id} className="card">
          <img src={person.photo} alt={person.name} className="person-photo" />
          <h3 className="person-name">{person.name}</h3>
          <p className="mb-1">DOB: {person.dob}</p>
          <p className="mb-1">Birthplace: {person.birthplace}</p>
          <p className="mb-1">Achievements: {person.achievements}</p>
          <a href={person.wikiLink} target="_blank" rel="noopener noreferrer" className="know-more">
            Know More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FamousPersons;
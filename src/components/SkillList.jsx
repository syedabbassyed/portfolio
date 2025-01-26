import { Skill } from "./Skill";

export const SkillList = ({ skills }) => {
    const skillList = skills.map((skill, index) => 
        <li className="mr-1.5 mt-2" key={index}>
            <Skill skillName={skill}/>
        </li>
    );
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies Used">
            {skillList}
        </ul>
    );
}
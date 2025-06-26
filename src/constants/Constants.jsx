import { GiSpellBook } from "react-icons/gi";
import { FaFaucetDrip } from "react-icons/fa6";
import { GiFirstAidKit } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";



export const heroInfo = {
    title1: "Give Hope,",
    title2: "Save Lives",
    subtitle: "Join us in creating a brighter future for those in need. Your support provides food, shelter, education, and a chance to rise above hardship. Every act of kindness matters.",
    buttonName: "Explore",
    buttonPath: "/Causes",
}


export const hero2Info = {
    title: "Transforming Good Intentions into Good Actions.",
    subtitle: "We believe that every act of compassion has the power to create lasting change. Our mission is to help people like you move from intention to impact—by supporting causes that matter, uplifting communities in need, and building real solutions through service and solidarity. Whether you donate, volunteer, or advocate, your actions help transform hope into progress and care into measurable outcomes. Together, we can build a world where doing good truly makes a difference.",
    lines: [{ id: "1", line: "Choose your cause" }, { id: "2", line: "Donate the amount you like" }, { id: "3", line: "Register on our website" }, { id: "4", line: "Stay tuned about cause" },]

}

export const CatCardInfo = [
{ 
    id:1,
    icon: <GiSpellBook />,
    title: "Education",
    subtitle: "Empowering young minds through access to quality learning resources.",
    
},
{
    id:2,
    icon: <FaFaucetDrip />,
    title: "Clean Water",
    subtitle: "Providing safe,sustainable water solutions for healthier global communities.",
    
},
{
    id:3,
    icon: <GiFirstAidKit />,
    title: "Health Care",
    subtitle: "Delivering essential medical support to all the people who need it most.",
    
},
{
    id:4,
    icon:<FaPeopleGroup /> ,
    title: "Local communities",
    subtitle: "Strengthening neighborhoods through opportunity,support,and shared growth.",
}
];

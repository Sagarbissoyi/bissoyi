import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { link } from "fs";

const Social=()=>{
const socialLinks=[{link:"https://github.com/Sagarbissoyi",icon:IconBrandGithub},{link:"https://www.linkedin.com/in/sagar-bissoyi-7a68242aa/", icon:IconBrandLinkedin},
    {link:"https://www.instagram.com/mr.___sagar___",icon:IconBrandInstagram},{link:"https://leetcode.com/u/Sagar_Bissoyi/", icon:IconBrandLeetcode},
];
const socialIcons=socialLinks.map((socialLink)=>{
   return   <a  href={`${socialLink.link}`} target="_blank" className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
   <socialLink.icon className="-rotate-90" size={30}/>
</a>
})
    return <div className="flex  text-textColor items-center gap-10 fixed bottom-40 -left-40 rotate-90">
  {socialIcons}
<hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor"/>
</div>

}
export default Social;
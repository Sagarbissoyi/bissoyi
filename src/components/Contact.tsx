import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const Contact=()=>{
         const form={
            name:" ",
            email:" ",
            phone:" ",
            message: " "

         }
         const[formData,setFromData]=useState(form);
         const handleChange=(id:string,value:string)=>{
            setFromData({...formData, [id]:value});
         }
            

 return <div className="px-16 mx-20 my-10  font-mono" id="Contact">
         <h1 className="text-4xl  mb-10 font-bold text-center text-white"><span 
         className="text-primaryColor">04.&nbsp;</span>Contact</h1> 
        
        
        <div className="w-[70%] shadow-[0_0_10px_0_#64FFDA] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl ">
            <div className="text-3xl text-white font-semibold">
                Let's Connect
            </div>
            <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange}/>
            <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange}/>
            <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange}/>
            <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange}/>
               <Button fullWidth rightSection={<IconArrowRight size={20}/>}
             className="!text-bgColor !font-bold text-2xl"  variant="filled" size="lg" radius="lg" color="#64FFDA">Send</Button>
        </div>
        
        
        
         </div> 


}
export default Contact;
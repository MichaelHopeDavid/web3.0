import {BsShieldFillCheck} from "react-icons/bs";
import {BsFillPiggyBankFill} from "react-icons/bs";
import {BsFillLightningChargeFill} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";


const ServiceCard = ({color, title, icon, subtitle}) =>(
    <div className = "flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg " >{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12 " >{subtitle}</p>

        </div>
    </div>
)

const Services = () => {
    return (
       <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
           <div className="flex mf:flex-row flex-col items-center justify-between md:p-10 py-12 px-4">
               <div className="flex-1 flex flex-col justify-start items-start">
                   <h1 className="text-white text-3xl sm:text-4xl py-2 text-gradient">
                       Services that we 
                       <br />
                        continue to improve
                   </h1>
               </div>
               <div className="flex-1 flex flex-col justify-start items-center">
                    <ServiceCard 
                        color = "bg-[#2952e3]"
                        title = "Security Guranteed"
                        icon = {<BsShieldFillCheck fontSize={21} className = " text-right " />}
                        subtitle = "Security is guaranteed. We also maintain privacy and the quality of our products"
                    />
                     <ServiceCard 
                        color = "bg-[#8945F8]"
                        title = "Gas Fees Are Your Only Fees"
                        icon = {<BsFillPiggyBankFill fontSize={21} className = " text-right " />}
                        subtitle = "The bare minimum.&quot; A small price to pay for salvation &quot; - Thanos "
                    />
                     <ServiceCard 
                        color = "bg-[#F84550]"
                        title = "Fastest Transactions"
                        icon = {<BsFillLightningChargeFill fontSize={21} className = " text-right " />}
                        subtitle = "Security is guaranteed. We also maintain privacy and the quality of our products"
                    />
               </div>
           </div>
       </div>
    );
}

export default Services;
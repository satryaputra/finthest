import React,{useState}from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/imgAuth.png'

export default function TermsConditionsPage() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <img src={img1} alt="" className="w-full" />
      <div className="px-4">
        <h1 className="text-xl mt-8 font-semibold">Syarat dan ketentuan</h1>
        <div className="h-[20rem] overflow-y-auto mt-7 mb-10 w-full border-t-2 border-b-2 px-2 ">
          <h1 className="leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque possimus nisi fugit. Similique iusto necessitatibus possimus pariatur numquam dolorum perferendis incidunt doloremque, sit excepturi eaque perspiciatis vel repellendus eligendi commodi at quas! Quo sequi soluta corporis molestias! Aliquam facere temporibus tempore error eveniet debitis unde praesentium aspernatur possimus quibusdam molestiae, nemo voluptates suscipit asperiores, corporis a similique placeat adipisci, earum consequuntur rerum! Rem libero numquam reiciendis? Repudiandae cum vero placeat aut! Consectetur earum eum.</h1>
        </div>
        <div className="flex justify-center gap-2">
          {/* <Checkbox id="terms" className="bg-[#FFFFFF] border-[#D0D0D0]" checked={isChecked} onChange={handleCheckboxChange}/> */}
          <input
        type="checkbox"
        id="terms"
        className="bg-[#FFFFFF] border-[#D0D0D0]"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
        <div>
          <button type="button" className="bg-primary w-full rounded mt-10 py-2 text-white" onClick={()=>navigate("/login")} disabled={!isChecked}>Lanjut</button>
        </div>
      </div>
    </div>
  );
}

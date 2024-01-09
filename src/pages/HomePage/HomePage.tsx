import { Link,  } from "react-router-dom";
import imgHomePage from "../../assets/homePage.png";
import imgGradientMobile from "../../assets/gradientMobile.svg";
import Button from "@/components/molecules/Button";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div className="relative">
        <img src={imgHomePage} alt="" className="w-full" />
        <img src={imgGradientMobile} alt="" className="absolute -bottom-1 w-full" />
      </div>
      <div className="px-6 flex flex-col gap-4">
        <h1 className="font-extrabold text-4xl ">Hallo, selamat datang di Finplan!</h1>
        <p className="text-secondary text-lg font-extralight">Sebelum mulai, baca artikel dari kami dulu yuk!</p>
        <Button className="flex mt-7 items-center justify-center py-6 text-lg font-semibold" type="submit" >
          <Link to='/information'>
          Lanjut
          </Link>
        </Button>
      </div>
    </div>
  );
}

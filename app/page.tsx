import Image from "next/image";

import LoginForm from "@/components/forms/LoginForm";


const Home = () => {

  return (
    <div className="flex h-screen max-h-screen overflow-hidden w-full">

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <LoginForm />

          <div className="text-14-regular mt-10 flex justify-center">
            <p className="justify-items-center text-dark-500 xl:text-left">
              © 2024 Digital Twin
            </p>

          </div>
        </div>
      </section>

      <Image
        src="/assets/images/login-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
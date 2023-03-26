import heroImg from '../../images/illustration-intro.png';
import iconAcess from '../../images/icon-access-anywhere.svg';
import iconSecurity from '../../images/icon-security.svg';
import iconCollaboration from '../../images/icon-collaboration.svg';
import iconAnyFile from '../../images/icon-any-file.svg';

export default function Hero() {
  return (
    <section className="hero--section container mx-auto mt-6 text-center lg:max-w-[600px] xl:max-w-[700px]">
      <img src={heroImg} alt="hero image" className="max-w-full md:max-w-[80%] mx-auto" />

      <h2 className="text-3xl text-white font-bold my-6 leading-10">All your files in one secure location, accessible anywhere.</h2>

      <p className="text-white text-base">Fylo stores all your most important files in one secure location. Acces them wherever you need, share and collaborate with friends family, and co-workers.</p>
      <button className="py-4 w-[80%] md:w-auto md:px-[80px] text-white font-bold bg-blueInsideCTA hover:bg-cyanInsideCTA my-6 rounded-full border-none">Get Started</button>

      <div className="info--section mt-32 flex flex-col gap-[5rem]">
        <div className="container--one flex flex-col gap-[5rem] md:flex-row">
          <div className="files--container flex items-center justify-center flex-col text-center">
            <img src={iconAcess} alt="Icon Access Files" />
            <h3 className="text-xl text-white font-bold my-6">Access your files, anywhere</h3>
            <p className="text-white text-base">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>

          <div className="files--container flex items-center justify-center flex-col text-center">
            <img src={iconSecurity} alt="Icon security" />
            <h3 className="text-xl text-white font-bold my-6">Security you can trust</h3>
            <p className="text-white text-base">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
          </div>
        </div>

        <div className="container--two flex flex-col gap-[5rem] md:flex-row">
          <div className="files--container flex items-center justify-center flex-col text-center">
            <img src={iconCollaboration} alt="Icon collaboration" />
            <h3 className="text-xl text-white font-bold my-6">Real-time collaboration</h3>
            <p className="text-white text-base">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          </div>

          <div className="files--container flex items-center justify-center flex-col text-center">
            <img src={iconAnyFile} alt="Icon Any file type" />
            <h3 className="text-xl text-white font-bold my-6">Store any type of file</h3>
            <p className="text-white text-base">Whether you're sharing holdiays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

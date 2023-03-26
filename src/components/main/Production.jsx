import illustrationProductive from '../../images/illustration-stay-productive.png';
import iconArrow from '../../images/icon-arrow.svg';

export default function Production() {
  return (
    <section className="production container mx-auto md:flex items-center justify-between">
      <img src={illustrationProductive} alt="production image" className="mb-8 mx-auto md:w-1/2" />
      <div className="production--content ml-7">
        <h3 className="text-xl text-white font-bold my-6">Stay productive wherever you are</h3>
        <p className="text-white text-base">Never let location be an issue when accessing your files. Fylo has you covered for all of your files storage needs.</p>
        <p className="text-white text-base my-6">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <p className="cta flex items-center text-cyanInsideCTA text-base cursor-pointer relative max-w-[250px] underline">
          See how Fylo works
          <img src={iconArrow} alt="arrow icon" className="ml-1 w-[20px]" />
        </p>
      </div>
    </section>
  );
}

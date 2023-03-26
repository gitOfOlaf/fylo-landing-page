import dataObj from './data';

export default function Testimonials() {
  const data = dataObj.map((dataProp) => {
    return (
      <div className="testimonial bg-darkBlueTestimonialsBG p-6 rounded" key={dataProp.id}>
        <p className="text-white text-sm">Fylo has improved our teams productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className="user--profile flex items-center mt-6">
          <img src={dataProp.img} alt="user image" className="max-w-[35px] rounded-full" />

          <div className="user--info ml-2">
            <h4 className="text-white font-bold text-sm">{dataProp.name}</h4>
            <p className="text-white text-xs mt-1">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    );
  });

  return <section className="testimonials container mx-auto my-[10rem] flex flex-col gap-[1.5rem] md:flex-row p-6">{data}</section>;
}

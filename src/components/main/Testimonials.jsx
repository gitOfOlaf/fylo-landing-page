import statishIMG from '../../images/profile-1.jpg';
import bruceIMG from '../../images/profile-2.jpg';
import IvaIMG from '../../images/profile-3.jpg';

export default function Testimonials() {
  return (
    <section className="testimonials container mx-auto my-[10rem] flex flex-col gap-[1.5rem] md:flex-row">
      <div className="testimonial bg-darkBlueTestimonialsBG p-6 rounded">
        <p className="text-white text-sm">Fylo has improved our teams productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className="user--profile flex items-center mt-6">
          <img src={statishIMG} alt="user image" className="max-w-[35px] rounded-full" />

          <div className="user--info ml-2">
            <h4 className="text-white font-bold text-sm">Satish Patel</h4>
            <p className="text-white text-xs mt-1">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>

      <div className="testimonial bg-darkBlueTestimonialsBG p-6 rounded">
        <p className="text-white text-sm">Fylo has improved our teams productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className="user--profile flex items-center mt-6">
          <img src={bruceIMG} alt="user image" className="max-w-[35px] rounded-full" />

          <div className="user--info ml-2">
            <h4 className="text-white font-bold text-sm">Bruce McKenzie</h4>
            <p className="text-white text-xs mt-1">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>

      <div className="testimonial bg-darkBlueTestimonialsBG p-6 rounded">
        <p className="text-white text-sm">Fylo has improved our teams productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className="user--profile flex items-center mt-6">
          <img src={IvaIMG} alt="user image" className="max-w-[35px] rounded-full" />

          <div className="user--info ml-2">
            <h4 className="text-white font-bold text-sm">Iva Boyd</h4>
            <p className="text-white text-xs mt-1">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Production from './Production';
import Testimonials from './Testimonials';

export default function MainContent() {
  return (
    <main id="main" className="my-[10rem]">
      <Production />
      <Testimonials />
    </main>
  );
}

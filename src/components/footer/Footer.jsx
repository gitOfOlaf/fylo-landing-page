import EmailSignUp from './EmailSignUp';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <footer className="bg-darkBlueFooterBg mt-[25rem] relative md:flex items-center justify-center">
      <EmailSignUp />
      <FooterContent />
    </footer>
  );
}

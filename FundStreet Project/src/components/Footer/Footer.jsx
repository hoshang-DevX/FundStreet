import FooterMiddle from "./FooterMiddle";

function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6 w-full mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <FooterMiddle />
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} FundStreet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
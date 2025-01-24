import Footer from "./Footer";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <div className="w-full lg:w-full">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;

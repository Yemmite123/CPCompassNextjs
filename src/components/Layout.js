import NavBar from './NavbarPage';
import Footer from './Footer';


function Layout(props) {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <NavBar />
      <div>{props.children}</div>
      <Footer />
      <script src="https://unpkg.com/aos@next/dist/aos.js"/>
      <script>
          AOS.init();
      </script>
    </>
  );
}

export default Layout;

import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <Body />
      <Footer
        company={'Avicola Mar y Tierra'}
        socialNetworks={[
          {
            name: 'Instagram',
            icon: "fab fa-instagram",
            link: 'https://www.facebook.com/?locale=es_LA'
          },

          {
            name: 'Facebook',
            icon: "fab fa-facebook",
            link: 'https://www.facebook.com/?locale=es_LA'
          },

          {
            name: 'WhatsApp',
            icon: "fab fa-whatsapp",
            link: 'https://www.facebook.com/?locale=es_LA'

          }]}
        schedules={'8:00 - 6:00'}
      />
    </>
  )
}

export default App
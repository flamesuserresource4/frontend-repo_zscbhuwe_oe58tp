import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Story />
      </main>
      <Footer />
    </div>
  );
}

export default App;

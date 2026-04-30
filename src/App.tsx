import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

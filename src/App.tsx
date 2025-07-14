import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Title } from './components/main/title/Title';

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Title />
            </main>
            <Footer />
        </>
    );
}

export default App;

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Campaigns } from './components/main/campaigns/Campaigns';
import { Title } from './components/main/title/Title';

function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Title />
                <Campaigns />
            </main>
            <Footer />
        </>
    );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './index.css';
import App from './App.tsx';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Theme>
            <Provider store={store}>
                <App />
            </Provider>
        </Theme>
    </StrictMode>
);

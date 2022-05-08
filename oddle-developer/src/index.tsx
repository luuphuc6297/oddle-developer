import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { persistor, store } from 'app/store';
import theme from 'configs/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { history } from 'utils/history';
import CustomRouter from 'utils/router';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <React.Suspense fallback="Loading">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CustomRouter history={history}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <App />
                        </ThemeProvider>
                    </CustomRouter>
                </PersistGate>
            </Provider>
        </React.Suspense>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider, connect } from 'react-redux'
import store from '../state/store';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}


export default MyApp;

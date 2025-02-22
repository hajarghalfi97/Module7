import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import bitcoinRates from './components/bitcoinRates'
import RefCounter from './refCounter'
import VideoPlayer from './videoPlayer'
import ReducerCounter from './reducerCounter'
import SubscribeForm from './subscribeForm'
import { UserProvider } from './context/UserContext'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  return (
    <div className="App">
      <MyThemeProvider>
      {/* <UserProvider> provider component is at top level */}
      {/* <ClockDisplay /> */}
      {/* <ActivityFinder/> */}
      {/* <RefCounter/>
      <VideoPlayer/>
      <ReducerCounter/> */} 
      {/* <SubscribeForm/> */}
      {/* </UserProvider> */}
      {/* <LoginForm/> */}
      </MyThemeProvider>
    </div>
  );
}

export default App;
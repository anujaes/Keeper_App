import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import NoteContainer from './components/noteContainer'

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <NoteContainer />
        </div>
    );
}

export default App;

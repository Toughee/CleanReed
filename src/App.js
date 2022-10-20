import './App.css'
import React from 'react'
import SearchBar from './components/SearchBar.jsx'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="headerStyle">
                    <a href={'https://github.com/Toughee/CleanReed'}>
                        <li className="menuItem">README</li>
                    </a>{' '}
                    <a href={'https://github.com/Toughee/CleanReed/projects/1'}>
                        <li className="menuItem">Roadmap </li>
                    </a>{' '}
                    <a href={'https://github.com/Toughee/CleanReed/wiki'}>
                        <li className="menuItem">Wiki</li>
                    </a>{' '}
                    <a
                        href={
                            'https://github.com/Toughee/CleanReed/tree/main/docs'
                        }
                    >
                        <li className="menuItem">Docs</li>
                    </a>{' '}
                </header>
                <SearchBar />
            </div>
        )
    }
}

export default App

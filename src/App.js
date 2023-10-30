import { useState } from 'react'
import './css/App.css'

const INTERMEDIATECLASS = 'intermediate';
const NAVLISTINITIALSTATE = `nav_list ${INTERMEDIATECLASS} closed`;
const NAVLISTINTERMEDIATESTATE = `nav_list ${INTERMEDIATECLASS}`;
const NAVLISTNEWSTATE = 'nav_list opened';
const NOTINDEXABLE = -1;
const INDEXABLE = 0;


function createNavItem(navLinkContent, hrefValue, key, indexable) {
  return (
    <li className='nav_item' key={ key }><a href={ hrefValue } className='nav_link' tabIndex={ indexable }>{ navLinkContent }</a></li>
  );
}

function navItems(navItemsList) {
  return navItemsList;
}

function createHeader(navItemsList, navListClassname, clickEvent) {
  return (
    <header className='main_header'>
      <button className='hamburger_icon' onClick={ clickEvent }>
        <span className='lines_container'>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </span>
      </button>
      <nav className='main_nav'>
        <ul className= { navListClassname }>
          { navItems(navItemsList) }
        </ul>
      </nav>
    </header>
  );
}

function createSectionElement(heading1text, text, id) {
  return(
    <section className='main_element' key={ id }>
      <h1 className='heading' id={ id }>
        { heading1text }
      </h1>
      <p className='text'>
        { text }
      </p>
    </section>
  );
}

function createMainContent(sectionsList) {
  return (
    <main className='main_content' key={ 'main_content' }>
      { sectionsList }
    </main>
  );
}

function App() {

  let [tabIndexValue, setTabIndex] = useState(NOTINDEXABLE);
  let navItems = [
    createNavItem('About Us', 'about_us', 0, tabIndexValue),
    createNavItem('Services', 'services', 1, tabIndexValue),
    createNavItem('Origin', 'origin', 2, tabIndexValue)
  ];

  let sectionsList = [
    createSectionElement('About Us', 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aliquid rem laborum, iusto sequi aliquam perspiciatis inventore architecto veniam quam repudiandae porro tempore, facilis consequuntur qui odio. Cumque, nam officia?
    Accusantium dolorem eaque, itaque provident eligendi possimus nesciunt porro vero, fuga qui, iure doloremque ad dolor ea tempora minus quidem sapiente quas praesentium. Esse iure veritatis, necessitatibus praesentium at molestiae!
    Totam reiciendis corrupti eius numquam quia officia nemo, magnam deleniti quis enim repudiandae consequatur in minus dolor. Enim obcaecati, tempora, molestiae possimus impedit modi sit necessitatibus suscipit voluptatibus dolorum eos?`,
    'about_us'),
    createSectionElement('Services', 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aliquid rem laborum, iusto sequi aliquam perspiciatis inventore architecto veniam quam repudiandae porro tempore, facilis consequuntur qui odio. Cumque, nam officia?
    Accusantium dolorem eaque, itaque provident eligendi possimus nesciunt porro vero, fuga qui, iure doloremque ad dolor ea tempora minus quidem sapiente quas praesentium. Esse iure veritatis, necessitatibus praesentium at molestiae!
    Totam reiciendis corrupti eius numquam quia officia nemo, magnam deleniti quis enim repudiandae consequatur in minus dolor. Enim obcaecati, tempora, molestiae possimus impedit modi sit necessitatibus suscipit voluptatibus dolorum eos?`,
    'services'),
    createSectionElement('Origin', 
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aliquid rem laborum, iusto sequi aliquam perspiciatis inventore architecto veniam quam repudiandae porro tempore, facilis consequuntur qui odio. Cumque, nam officia?
    Accusantium dolorem eaque, itaque provident eligendi possimus nesciunt porro vero, fuga qui, iure doloremque ad dolor ea tempora minus quidem sapiente quas praesentium. Esse iure veritatis, necessitatibus praesentium at molestiae!
    Totam reiciendis corrupti eius numquam quia officia nemo, magnam deleniti quis enim repudiandae consequatur in minus dolor. Enim obcaecati, tempora, molestiae possimus impedit modi sit necessitatibus suscipit voluptatibus dolorum eos?`,
    'origin'),
  ];

  let navLinks = document.getElementsByClassName('nav_link');
  let heading1s = document.getElementsByClassName('heading');
  let [isOpen, setStatus] = useState(false);
  let [navListState, setStateNavList] = useState(NAVLISTINITIALSTATE);

  for(let i = 0;  i < navLinks.length; ++i ) {
    navLinks[i].addEventListener('click', (event) => {
      closeMenu();
      event.preventDefault();
      window.scrollBy(
        {
          behavior: 'smooth',
          top: heading1s[i].getBoundingClientRect().top - 250,
        }
      );
    } );
  }

  function closeMenu() {
    setStatus(isOpen = false);
    setTabIndex(NOTINDEXABLE);
    setStateNavList(navListState = NAVLISTINTERMEDIATESTATE);
    setTimeout(
      () => {
        setStateNavList(navListState = NAVLISTINITIALSTATE);
      }
      , 
      250);
  }

  function reactToClick() {
    if(!isOpen) {
      setStatus(isOpen = true);
      setStateNavList(navListState = NAVLISTNEWSTATE);
      setTabIndex(INDEXABLE);
    } else {
      closeMenu();
    }
  } 

  return (
    <div className='App'>
      { createHeader(navItems, navListState, reactToClick ) }
      { createMainContent( sectionsList ) }
      <footer className="main_footer">
        <address>
          Autor: Lucien L. Erard<br/>
          &copy; DummyOrg<br/>
        </address>
      </footer>
    </div>
  )
}

export default App

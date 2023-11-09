import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../resources/css/header/header.css'
import NavbarItemList from './NavbarItemList';
import NavbarModal from './NavbarModal';


export default function OnlyHeader() {
    return(
          <Navbar expand="lg" className="bg-black-style position-fixed w-100" >
          <Container className='text-light flex-nowrap'>
          <p className='logo-text p-4'>React-Bootstrap</p>
            <Nav className="ms-auto">
              <div className='d-flex me-5'>
                <NavbarItemList text='Início' />
                <NavbarItemList text='Sobre mim'/>
                <NavbarItemList text='Conhecimentos'/>
                <NavbarItemList text='Projetos'/>
                <NavbarItemList text='Contato'/>
                <NavbarModal />
              </div>
            </Nav>
                </Container>
              </Navbar>
    )
}
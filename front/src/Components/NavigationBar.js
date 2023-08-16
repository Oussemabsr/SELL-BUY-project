import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../JS/Actions/user';


const NavigationBar = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth);
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
  
    return (
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">SELL&BUY</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {isAuth && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
              {isAuth && <Nav.Link as={Link} to="/add">AddPost</Nav.Link>}
              {isAuth && user.isAdmin && ( // Check if user is authenticated and an admin
                <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>
              )}
            </Nav>
            {isAuth ? (
              <button className='logout' onClick={() => dispatch(logout())}>Logout</button>
            ) : (
              <div className='login'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
              </div>
            )}
          </Container>
        </Navbar>
      </header>
    );
  }
  
  export default NavigationBar;
  
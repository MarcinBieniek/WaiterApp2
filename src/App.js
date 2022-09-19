import React from 'react';

import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Tables from './components/pages/Tables/Tables';
import EditTableForm from './components/features/EditTableForm/EditTableForm';
import NotFound from './components/pages/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Tables />} />
          <Route path='/table/:id' element={<EditTableForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

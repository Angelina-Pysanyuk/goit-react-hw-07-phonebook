import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'redux/selectors';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

const App = () => {
  const isLoading = useSelector(getLoadingStatus);
  return (
    <div
      style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default App;

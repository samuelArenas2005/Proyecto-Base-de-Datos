import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'CustomFont',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    maxWidth: 300,
    padding: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
    color: '#333',
  },
  
  inputFocus: {
    borderColor: '#007bff', // Azul cuando está enfocado
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra en Android
  },

  placeholder: {
    color: '#888',
    fontStyle: 'italic',
  },

  disabledInput: {
    backgroundColor: '#f5f5f5',
    color: '#999',
  },
  
});
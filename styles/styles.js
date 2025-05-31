// import { StyleSheet } from 'react-native';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f0f8ff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//   },
//   card: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#e0f7fa',
//     borderRadius: 10,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  gradientBackground: {
    flex: 1,
    backgroundColor: '#0f2027', // fallback if gradient not supported
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    background: 'linear-gradient(180deg, #2C5364, #203A43, #0F2027)', // optional for web or future use
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 80,
  },
  header: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#1e3c53',
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#29b6f6',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: '#4db6ac',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: '#ff5252',
    marginTop: 10,
    fontSize: 14,
  },
  card: {
    marginTop: 30,
    width: screenWidth * 0.9,
    backgroundColor: '#ffffff20',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  city: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#ccc',
    marginTop: 6,
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 120,
    height: 120,
  },
  detailsRow: {
    marginTop: 15,
    alignItems: 'center',
  },
  details: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 5,
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  loadingText: {
    marginTop: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#E0E0E0', // Cambia el color de fondo según tus preferencias
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  thumbnail: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 16,
  },
  seriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default styles;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, FlatList, Alert } from 'react-native';
import axios from 'axios';
import md5 from 'md5';
import styles from './style';

const SeriesMarvel = () => {
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const PUBLIC_KEY = 'db05996db12128a845d152b3b73ae0c6';
    const PRIVATE_KEY = 'fa345614e46bb78eb566c146140f8f3c4eb4379a';
    const API_BASE_URL = 'https://gateway.marvel.com/v1/public/series';

    const ts = new Date().getTime().toString();
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

    const apiUrl = `${API_BASE_URL}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        setSeries(response.data.data.results);
        setLoading(false);
      } catch (error) {
        Alert.alert('Error al consultar series: ' + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const LoadingScreen = () => (
    <View style={styles.container}>
      <ActivityIndicator color={'darkblue'} size={'large'} />
      <Text style={styles.loadingText}>Cargando series...</Text>
    </View>
  );

  const SeriesCard = ({ title, description, thumbnail }) => (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{ uri: `${thumbnail.path}.${thumbnail.extension}` }} />
      <View style={styles.textContainer}>
        <Text style={styles.seriesTitle}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );

  const LoadedScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Series de Marvel</Text>
      <FlatList
        data={series}
        renderItem={({ item }) => (
          <SeriesCard
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );

  return loading ? <LoadingScreen /> : <LoadedScreen />;
};

export default SeriesMarvel;

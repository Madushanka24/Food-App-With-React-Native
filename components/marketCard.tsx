import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { dummyRestaurantsData } from '~/assets/data/restaurantsData';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const MarketCard = ({ }) => {
  return (
      <Pressable className={styles.cardContainer}>
        <View>
          <Image
            source={{ uri: dummyRestaurantsData[0].profileImage }}
            className={styles.cardImage}
            resizeMode="cover"
          />
          <View className={styles.overlay}>
            <Text className={styles.overlayText}>{dummyRestaurantsData[0].delivery} min</Text>
          </View>
        </View>

        <View className={styles.textsContainer}>
          <Text className={styles.restaurantName}>{dummyRestaurantsData[0].name}</Text>
          <View className={styles.ratingContainer}>
            <FontAwesome name="star" size={17} color={'black'} />
            <Text className={styles.rating}>{dummyRestaurantsData[0].rating}</Text>
          </View>
        </View>
        <Text className={styles.price}>{dummyRestaurantsData[0].price} €</Text>
      </Pressable>

  );
};

const styles = {
  cardContainer: 'mt-5',
  cardImage: 'w-full h-[180px] rounded-md',
  overlay: 'absolute bg-white rounded-sm bottom-2 right-2',
  overlayText: 'text-sm dont-semibold py-1 px-2',
  textsContainer: 'flex flex-row items-center justify-between',
  restaurantName: 'text-base font-bold mt-2 text-[#2e303d]',
  ratingContainer: 'flex flex-row items-center',
  rating: 'ml-1 font-bold text-base',
  price: 'text-sm font-[#6e6d72]',
};

export default MarketCard;

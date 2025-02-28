import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container } from "~/components/Container";
import { Header } from "react-native/Libraries/NewAppScreen";
import MarketCard from "~/components/marketCard";
import { FlatList } from "react-native-gesture-handler";
import { dummyRestaurantsData } from "~/assets/data/restaurantsData";

const HomeScreen = () => {
  return(
    <SafeAreaView className={styles.container}>
      <View className={styles.header}>
        <View className={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
          <Text className={styles.addressText}>Your Address Here</Text>
        </View>
      </View>

      <FlatList data={dummyRestaurantsData} showsVerticalScrollIndicator={false}
       keyExtractor={(item)=>item.id.toString()}
       ListEmptyComponent={()=>(
        <Text className={styles.cardTitle}>All Restaurant And Stores</Text>
       )}
       renderItem={({item}) => <MarketCard restaurantData={item} />}
      />

      <MarketCard />

    </SafeAreaView>
  );
};

const styles = {
  container: 'flex-1 p-4 mt-6 bg-white',
  header: 'flex-now-justify-between',
  addressContainer: 'flex-row-items-center',
  addressText: 'ml-2',
  cardTitle: 'mt-4 mb-2 text-lg font-bold'
};

export default HomeScreen;
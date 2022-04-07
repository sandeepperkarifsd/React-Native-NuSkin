import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const data = {
    id: "123",
    name: "ageLoc Lumispa",
    price: "199.00",
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.name}>1 Cleanse</Text>
        <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Text style={{ marginTop: 28, fontSize: 16 }}>My Favorite </Text>
          <Image
            source={require("../../assets/images.jpg")}
            style={styles.imagestyle}
          />
        </View>
      </View>
      <ProductCard result={data}></ProductCard>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    justifyContent: "flex-start",
    flex: 1,
    margin: 25,
    fontSize: 20,
  },
  imagestyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    alignSelf: "center",
    marginRight: 20,
  },
});

export default HomeScreen;

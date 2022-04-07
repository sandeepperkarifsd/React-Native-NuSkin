import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const ProductCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/lumispa.jpg")}
        style={styles.imagestyle}
      />
      <View style={{ marginLeft: 10, marginTop: 10, flex: 1 }}>
        <Text style={styles.name}>{result.name}</Text>
        <Text>${result.price}</Text>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="add-shopping-cart" size={20} color="black" />
          <Text style={styles.name1}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
    margin: 10,
  },
  name: {
    fontWeight: "bold",
  },
  name1: {
    fontWeight: "bold",
    marginLeft: 7,
  },
  button: {
    alignItems: "center",
    borderColor: "black",
    padding: 5,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: "row",
    marginRight: 55,
    justifyContent: "center",
  },
  container: {
    margin: 15,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
});

export default ProductCard;

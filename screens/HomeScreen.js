import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {
  ListItem,
  Divider,
  Button,
  Icon,
  ThemeProvider
} from "react-native-elements";
const { width, height } = Dimensions.get('screen');

export default function HomeScreen() {
  const [ products, setProducts ] = useState([{
    "name": "Sole - Dover, Whole, Fresh",
    "description": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
    "img": "http://dummyimage.com/327x993.jpg/cc0000/ffffff"
  }, {
    "name": "Sobe - Orange Carrot",
    "description": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu",
    "img": "http://dummyimage.com/943x489.bmp/5fa2dd/ffffff"
  }, {
    "name": "Rum - Spiced, Captain Morgan",
    "description": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
    "img": "http://dummyimage.com/243x327.bmp/dddddd/000000"
  }, {
    "name": "Wine - Cousino Macul Antiguas",
    "description": "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
    "img": "http://dummyimage.com/570x594.jpg/cc0000/ffffff"
  }, {
    "name": "Mussels - Cultivated",
    "description": "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
    "img": "http://dummyimage.com/887x484.jpg/cc0000/ffffff"
  }, {
    "name": "Cheese - Brie",
    "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    "img": "http://dummyimage.com/142x349.png/dddddd/000000"
  }, {
    "name": "Spring Roll Wrappers",
    "description": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl",
    "img": "http://dummyimage.com/631x404.bmp/cc0000/ffffff"
  }, {
    "name": "Calypso - Black Cherry Lemonade",
    "description": "bibendum felis sed interdum venenatis turpis enim blandit mi in",
    "img": "http://dummyimage.com/167x187.bmp/dddddd/000000"
  }, {
    "name": "Ostrich - Prime Cut",
    "description": "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
    "img": "http://dummyimage.com/887x841.bmp/cc0000/ffffff"
  }, {
    "name": "Water - San Pellegrino",
    "description": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
    "img": "http://dummyimage.com/959x612.png/5fa2dd/ffffff"
  }, {
    "name": "Tea - Herbal Sweet Dreams",
    "description": "mi integer ac neque duis bibendum morbi non quam nec",
    "img": "http://dummyimage.com/873x714.png/dddddd/000000"
  }, {
    "name": "Alize Gold Passion",
    "description": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
    "img": "http://dummyimage.com/125x258.jpg/ff4444/ffffff"
  }, {
    "name": "Nantucket Apple Juice",
    "description": "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
    "img": "http://dummyimage.com/260x441.bmp/cc0000/ffffff"
  }, {
    "name": "Mussels - Cultivated",
    "description": "amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
    "img": "http://dummyimage.com/355x592.bmp/5fa2dd/ffffff"
  }, {
    "name": "Truffle Shells - White Chocolate",
    "description": "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
    "img": "http://dummyimage.com/502x710.bmp/5fa2dd/ffffff"
  }, {
    "name": "Apple - Northern Spy",
    "description": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
    "img": "http://dummyimage.com/320x743.jpg/ff4444/ffffff"
  }, {
    "name": "Flour - Masa De Harina Mexican",
    "description": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
    "img": "http://dummyimage.com/356x725.bmp/cc0000/ffffff"
  }, {
    "name": "Wine - Vineland Estate Semi - Dry",
    "description": "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
    "img": "http://dummyimage.com/586x714.png/ff4444/ffffff"
  }, {
    "name": "Allspice - Jamaican",
    "description": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
    "img": "http://dummyimage.com/968x216.png/cc0000/ffffff"
  }, {
    "name": "Sugar - Cubes",
    "description": "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
    "img": "http://dummyimage.com/656x112.png/dddddd/000000"
  }]);

  function renderProductList() {
    return (
      <ThemeProvider>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View>
              <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: { uri: item.img } }}
              />
              <Divider />
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
     </ThemeProvider>
    )
    return products.map(product => (
      <View style={styles.productContainer}>
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            imageStyle={styles.productImage}
            source={{ uri: product.img }}
          />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 12, color: '#A5A5A5', el }}>
            {product.description}
          </Text>
        </View>
      </View>
    ))
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {renderProductList()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
    height: 40
  },
  productDetails: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productImageContainer: {
    justifyContent: "center"
  },
  productImage: {
    height: 40,
    width: 40,
    maxHeight: 40
  }
});

import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Card} from 'react-native-paper';
import {Paragraph, Divider} from 'react-native-paper';
import styles from '../css/DeliveryDetailsStyle';

const rupee = <FontAwesome5 name="rupee-sign" color="black" size={20} />;
const truck = <FontAwesome5 name="truck" color="black" size={20} />;
const cart = <MaterialIcons name="shopping-cart" color="black" size={20} />;
const calendar = <FontAwesome5 name="calendar-alt" color="black" size={20} />;
const writingpad = <MaterialIcons name="padding" color="black" size={20} />;
const phone = <FontAwesome5 name="phone-alt" color="black" size={20} />;
const map = <FontAwesome5 name="map-marker-alt" color="black" size={20} />;
const invoiceQty = (
  <MaterialCommunityIcons
    name="newspaper-variant-outline"
    color="white"
    size={20}
  />
);
const delivered = (
  <MaterialCommunityIcons name="truck-check" color="white" size={50} />
);
const undelivered = (
  <MaterialCommunityIcons name="truck-outline" color="white" size={50} />
);

export default function DeliveryDetails({navigation, route}) {
  const {ordersListData, setRefreshing} = route.params; 
  //refresh(true)
  const [DeliveryDetails, setDeliveryDetails] = useState([ordersListData]);


  return (
    <ScrollView style={styles.scrollviewBg}>
      {DeliveryDetails == null
        ? ''
        : DeliveryDetails.map(item => (
          <View>
          <Paragraph style={styles.heading}>{item.customerName}</Paragraph>
            <View style={styles.cardstyle}>
              
              <View style={styles.cardView}>
                <Paragraph>{phone}</Paragraph>
                <Paragraph style={styles.paragraph}>{item.contactno}</Paragraph>
              </View>
              <Divider />
              <View style={styles.cardView}>
                <Paragraph>{map}</Paragraph>
                <View style={styles.addressView}>
                  <Paragraph style={styles.paragraph}>
                    {item.address1}
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    {item.address2}
                  </Paragraph>
                  <Paragraph style={styles.paragraph}>
                    {item.citypincode}
                  </Paragraph>
                </View>
              </View>
              <Divider />
              <View style={styles.cardView1}>
                <Paragraph>{writingpad}</Paragraph>
                <Paragraph style={styles.paragraph}>{item.orderNo}</Paragraph>
              </View>
              <Divider />
              <View style={styles.cardView1}>
                <Paragraph>{calendar}</Paragraph>
                <Paragraph style={styles.paragraph}>{item.orderDate}</Paragraph>
              </View>
              <Divider />
              <View style={styles.quantity}>
                <View style={styles.quantityview}>
                  <Paragraph>{cart}</Paragraph>
                  <Paragraph style={styles.paragraph}>
                    {item.orderQuantity}
                  </Paragraph>
                </View>
                <Divider />
                <View style={styles.cardView1}>
                  <Paragraph>{invoiceQty}</Paragraph>
                  {/* <Paragraph style={styles.paragraph}>
                    {item.invoiceQuantity}
                  </Paragraph> */}
                </View>
              </View>
              <Divider />
              <View style={styles.cardView1}>
                <Paragraph>{truck}</Paragraph>
                <Paragraph style={styles.paragraph}>
                  {item.preferedDeliveryDate}
                </Paragraph>
              </View>
              <Divider />
              {/* <View style={styles.cardView1}>
                <Paragraph>{rupee}</Paragraph>
                <Paragraph style={styles.paragraph}>
                  {item.invoiceAmount}
                </Paragraph>
              </View> */}
              <View style={styles.submitView}>
                <Text
                  onPress={() => {
                    navigation.push(
                      'Undelivered',
                      { InvoiceNo: item.invoiceno,
                        setRefreshing
                        }
                      //driverNumber:phoneNumber }
                    );
                  }}
                  style={styles.submitundelivered}>
                  {undelivered}
                </Text>
                <Text
                  onPress={() => {
                    navigation.push(
                      'RateAndReview',
                       { InvoiceNo: item.invoiceno,
                        setRefreshing
                        }
                        //driverNumber:phoneNumber }
                    );
                  }}
                  style={styles.submitdelivered}>
                  {delivered}
                </Text>
              </View>
            </View>
            </View>
          ))}
    </ScrollView>
  );
}

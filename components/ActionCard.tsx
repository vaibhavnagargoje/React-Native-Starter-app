import { View,
     Text,
     Linking,
      StyleSheet, 
      Image,
      TouchableOpacity
     } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingcontainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21- ES12
            </Text>

        </View>
        <Image
        source={{

            uri: 'https://i.ytimg.com/vi/YwHJCTXg6Es/maxresdefault.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            js 21 introduces various updates, including an upgrade to the V8 engine, stable support for ES Modules, enhancements to diagnostic reports, experimental async local storage, improvements to Worker Threads, and HTTP/2 Server Push support

            </Text>
        </View>
        <View style={styles.footerContainer}>
            <Text numberOfLines={3}>
                
                <TouchableOpacity
                    onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')

                    }
                    >
                    <Text>
                        Read More
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>
      </View>

    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{

    },
    card:{},
    elevatedCard:{},
    headingcontainer:{},
    headerText:{},
    cardImage:{
        height:200,
    },
    bodyContainer:{},
    footerContainer:{}
})
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
                
                </Text>
                <TouchableOpacity
                    onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')

                    }
                    >
                    <Text style={styles.socialLinkks}>
                        Read More
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {styles.socialLinkks}>
                        Share now
                    </Text>
                </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:330,
        height:370,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,

    },
    elevatedCard:{
        backgroundColor:'#f3f',
        elevation:3,
        shadowOffset:{
            width:1,
            height:4,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,


    },
    headingcontainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    headerText:{
        color:'#000',
        fontSize:18,
        fontWeight:'600',

    },
    cardImage:{
        height:200,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinkks:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#ffffff',
        padding:8,
        paddingHorizontal:20,
        borderRadius:6,

    }
})
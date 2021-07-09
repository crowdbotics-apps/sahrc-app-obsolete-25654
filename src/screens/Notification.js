import React from 'react'
import { 
  View, 
  StyleSheet, 
  ScrollView,
  Text,
  TouchableOpacity
  
} from 'react-native'
import { colors } from '../utils/colors'
import HeaderProfile from '../components/HeaderProfile'
import NotificationArea from '../components/NotificationArea'

const Notification = () => (
  <ScrollView>
    <HeaderProfile name="Notification" edit={null}/>
    <View style={styles.body}>
      <TouchableOpacity style={styles.readUnread}>
        <Text style={styles.readUnread}>Unread </Text>
        <Text style={[styles.readUnread, { color: colors.green }]}>(12) </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />
        <NotificationArea 
          content="Lorem Ipsum dolor amit sumit la pesa hesr pog"
          time="1 min ago "
        />

      </View>
    </View>
  </ScrollView>
)
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  readUnread: {
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    marginBottom: 10
  }, 
  body: {
    padding: 20,
    paddingBottom: 30
  }
})
export default Notification;
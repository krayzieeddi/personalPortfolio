import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles';


export default function ContactPage() {
  return (
    <View style={styles.container}>
      <View style={[styles.verticalBar]}>
      <Image source={require('../../assets/images/react-logo.png')} style={{width: 50, height: 50}}/>
      <Text style={styles.titleContainer}> the Contact page</Text>

      <Link push href="./HomePage" style={[styles.links]}>Home Page</Link>
      <Link href="./SkillsPage" style={[styles.links]}>Skills Page</Link>
      <Link href="./ProjectPage" style={[styles.links]}>Project Page</Link>
      </View>
    </View>
  );
}


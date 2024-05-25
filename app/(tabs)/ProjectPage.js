import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles';


export default function ProjectPage() {
  return (
    <View style={styles.container}>
      <View style={[styles.verticalBar]}>
      <Image source={require('../../assets/images/react-logo.png')} style={{width: 50, height: 50}}/>
      <Text style={styles.titleContainer}> the Project page</Text>

      <Link push href="./HomePage" style={[styles.links]}>Home Page</Link>
      <Link href="./SkillsPage" style={[styles.links]}>Skills Page</Link>
      <Link href="./ContactPage" style={[styles.links]}>Contact Page</Link>
      </View>
    </View>
  );
}



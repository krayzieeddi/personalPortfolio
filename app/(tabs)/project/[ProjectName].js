import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import styles from '../../styles';


export default function ProjectNamePage() {
    // takes the url string
    const {ProjectName} = useLocalSearchParams()

    const projectStuff = [
        {
        "firstName": "John",
        "lastName": "Doe",
        },
        {
        "firstName": "Bob",
        "lastName": "Philly",
        }
    ]

  return (
    <View style={styles.container}>
      <View style={[styles.verticalBar]}>
      <Image source={require('../../../assets/images/react-logo.png')} style={{width: 50, height: 50}}/>
      <Text> This Project is about {projectStuff[ProjectName - 1].firstName} page</Text>
      <Text style={styles.titleContainer}> This person's last name is {projectStuff[ProjectName - 1].lastName} page</Text>

      <Link push href="./HomePage" style={[styles.links]}>Home Page</Link>
      <Link href="./SkillsPage" style={[styles.links]}>Skills Page</Link>
      <Link href="./ContactPage" style={[styles.links]}>Contact Page</Link>
      </View>
    </View>
  );
}



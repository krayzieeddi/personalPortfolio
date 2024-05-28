import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles';
import * as ImagePicker from 'expo-image-picker';

export default function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = require('../../assets/images/favicon.png')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.verticalBar]}>
      <Image source={require('../../assets/images/react-logo.png')} style={{width: 50, height: 50}}/>
      <Text style={styles.titleContainer}> the Project page</Text>

      <View style={{width: 50, paddingBottom: 20, paddingTop: 20}}>
        <ImageViewer placeholderImageSource={placeholderImage} selectedImage={selectedImage}/>
      </View>

      <Pressable style={{paddingBottom: 20, paddingTop: 20}} onPress={pickImageAsync}>
        <Text>choose another picture</Text>
      </Pressable>

      <Link push href="./HomePage" style={[styles.links]}>Home Page</Link>
      <Link href="./SkillsPage" style={[styles.links]}>Skills Page</Link>
      <Link href="./ContactPage" style={[styles.links]}>Contact Page</Link>
      </View>
    </View>
  );
}


function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={{ width: 100, height: 100 }}/>
}
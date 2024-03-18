import {Text, SafeAreaView} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <SafeAreaView>
        <Text>Hello this is about</Text>
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;

import { useState } from "react";
import { ImageBackground, View, Image, ScrollView } from "react-native";
import { Flex, Box, Spacer, Text, TextInput, Button } from "@react-native-material/core";

const logoImage = require('../assets/icons/plus.png');
const backgroundImg = require('../assets/images/bg-blue.png');

type TypeFormData = {
  phone: string,
  name: string,
  email: string,
  password: string,
  cPassword: string,
}

const initialData = {
  phone: "",
  name: "",
  email: "",
  password: "",
  cPassword: "",
}

const RegisterScreen = ({ navigation }: any) => {

  const [form, setForm] = useState<TypeFormData>(initialData)
  const handleChange = (key: keyof TypeFormData) => (text: string) => {
    setForm({
      ...form,
      [key]: text
    })
  }

  return (
      <View style={{ height: "100%", display: 'flex', justifyContent: 'center', backgroundColor:"cyan" }}>
        <ScrollView>
          <Flex m={30} radius={30} p={30} bg={'white'} >
            <Flex items="center">
              <Image source={logoImage} style={{ height: 50, width: 50 }} tintColor={'red'} />
              <Flex direction="row">
                <Text variant="h4" color="cyan">
                  Gojo
                </Text>
                <Text variant="h4" color="red">
                  RX
                </Text>
              </Flex>
            </Flex>
            <Box mt={10}>
              <TextInput variant={'filled'} onChangeText={handleChange("name")} value={form.name} label="Name" color="cyan"></TextInput>
            </Box>
            <Box mt={10}>
              <TextInput variant={'filled'} onChangeText={handleChange("phone")} value={form.phone} label="Phone" color="primary"></TextInput>
            </Box>
            <Box mt={10}>
              <TextInput variant={'filled'} onChangeText={handleChange("email")} value={form.email} label="Email" color="primary"></TextInput>
            </Box>
            <Box mt={10}>
              <TextInput variant={'filled'} onChangeText={handleChange("password")} value={form.password} label="Password" color="primary"></TextInput>
            </Box>
            <Box mt={10}>
              <TextInput variant={'filled'} onChangeText={handleChange("cPassword")} value={form.cPassword} label="Confirm Password" color="primary"></TextInput>
            </Box>
            <Box mt={20}>
              <Button title={"Sign Up"} variant={'contained'} color="orange"></Button>
            </Box>
            <Box mt={20}>
              <Button title={"Login"} onPress={() => navigation.navigate('Login')} variant={'contained'} color="darkblue"></Button>
            </Box>
          </Flex>
        </ScrollView>
      </View>
  )
};

export default RegisterScreen;

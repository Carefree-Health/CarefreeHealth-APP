import { StyleSheet, View } from 'react-native'
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup
} from "@/components/ui/button"
import { BellIcon, SearchIcon, SettingsIcon } from '@/components/ui/icon';

export default function Header() {

  return (
    <View style={styles.container}>
      <Image
          size="xs"
          source={require('../../../assets/images/carefree-health-logo-v1.png')}
          alt="image"
      />
      <Input variant="rounded" 
            size="sm" 
            isDisabled={false} 
            isInvalid={false} 
            isReadOnly={false} 
            style={styles.input}
      >
          <InputField type="text" placeholder='검색어를 입력하세요.' />
          <InputSlot onPress={() => console.log('검색을 실행합니다.')}>
            <InputIcon as={SearchIcon} color='black'></InputIcon>
          </InputSlot>
      </Input>
      <ButtonGroup space='xs' style={styles.button_group} flexDirection='row' isAttached={true}>
        <Button style={styles.iconbutton} size='xs'>
          <ButtonIcon as={BellIcon} color='black' size='sm'/>
        </Button>
        <Button style={styles.iconbutton} size='xs'>
          <ButtonIcon as={SettingsIcon} color='black' size='sm' />
        </Button>
      </ButtonGroup>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // width: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "white"
    },
    input: {
      // width: "50%",
      flex: 3,
      alignItems: "center",
      padding: 5,
      justifyContent: "space-around"
    },
    button_group: {
      flex: 0.5
    },
    iconbutton: {
      flex: 0.2,
      color: "black",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
})
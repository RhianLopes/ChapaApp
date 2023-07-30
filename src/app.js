import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox } from 'react-native'
import { MaterialCommunityIcons, Octicons, FontAwesome5, SimpleLineIcons, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { 
    MenuScreen,
    ChapaScreen,
    FreteScreen,
    ViagemScreen,
    ContaScreen,
    PerfilScreen,
    LocalizacaoScreen,
    VeiculoScreen,
    ResultadoScreen,
    DetalheFreteScreen,
    CarregamentoScreen
  } from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export function MenuTabNavigation({ navigation, route }) {
  
    return (
        <Tab.Navigator 
            initialRouteName='Menu'
            screenOptions={{ 
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name='Menu' 
                component={MenuScreen}
                options={{
                    tabBarLabel: 'Início',
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: '#E04747',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => <SimpleLineIcons name='home' color='#E04747' size={27} />,
            }}
            />
            <Tab.Screen 
                name='FreteScreen' 
                component={FreteScreen}
                options={{
                    tabBarLabel: 'Fretes',
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: '#E04747',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => <Octicons name='package' size={30} />,
            }}
            />
            <Tab.Screen 
                name='ViagemScreen' 
                component={ViagemScreen}
                options={{
                    tabBarLabel: 'Viagem',
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: '#E04747',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => <MaterialCommunityIcons name='truck-fast-outline' size={38} />,
            }}
            />
            <Tab.Screen 
                name='ContaScreen' 
                component={ContaScreen}
                options={{
                    tabBarLabel: 'Conta',
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: '#E04747',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => <Ionicons name='card-outline' size={30} />,
            }}
            />
            <Tab.Screen 
                name='PerfilScreen' 
                component={PerfilScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: '#E04747',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => <Octicons name='person' size={30} />,
            }}
            />
        </Tab.Navigator>
    )
}

export default function App() {
    LogBox.ignoreLogs(['Require cycles are allowed'])

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName='MenuTabNavigation'
                >
                <Stack.Screen component={ChapaScreen} name='Chapa' />
                <Stack.Screen component={LocalizacaoScreen} name='Localizacao' />
                <Stack.Screen component={VeiculoScreen} name='Veiculo' />
                <Stack.Screen component={ResultadoScreen} name='Resultado' />
                <Stack.Screen component={DetalheFreteScreen} name='DetalheFrete' />
                <Stack.Screen component={CarregamentoScreen} name='Carregamento' />
                <Stack.Screen component={MenuTabNavigation} name='MenuTabNavigation' />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

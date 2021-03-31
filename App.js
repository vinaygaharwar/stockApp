import React,{ useState,useEffect} from 'react';
import { View, Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import { Card, Searchbar} from 'react-native-paper';
import axios from 'axios';
import Stock from './Stock'


const App =() => {
  const [state, setstate] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setstate(res.data);
        
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredstate = state.filter(stock =>
    stock.name.includes(search)
  );
  
  
  return (  
    <ScrollView>
    <View style={{marginTop:40}}>         
          <Card style={{width: 320,height:140,marginLeft:40,backgroundColor:'#edf2ee'}}>
          <View style={{flex:1, justifyContent:'space-between'}}>
          <Card.Content >
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop:40,marginLeft:40,fontWeight:'600'}}>GOOGL</Text>
            <Image
            style={{width:70,height:60,marginTop:40,marginLeft:120}}         
            source={require('./images/GOOGL.png')}
            />
          </View>
          <View>
            <Text style={{marginTop:20,alignSelf:'center',fontWeight:'bold'}}>1515 USD</Text>
            </View>
          </Card.Content>
          </View>
          </Card>

          <Card style={{width: 320,height:140,marginLeft:40,backgroundColor:'#edf2ee',marginTop:20}}>
          <View style={{flex:1, justifyContent:'space-between'}}>
          <Card.Content >
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop:40,marginLeft:40,fontWeight:'600'}}>FB</Text>
            <Image
            style={{width:70,height:60,marginTop:40,marginLeft:120}}         
            source={require('./images/FB.png')}
            />
          </View>
          <View>
            <Text style={{marginTop:20,alignSelf:'center',fontWeight:'bold'}}>266 USD</Text>
            </View>
          </Card.Content>
          </View>
          </Card>

          <Card style={{width: 320,height:140,marginLeft:40,backgroundColor:'#edf2ee',marginTop:20}}>
          <View style={{flex:1, justifyContent:'space-between'}}>
          <Card.Content >
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop:40,marginLeft:40,fontWeight:'600'}}>AMZN</Text>
            <Image
            style={{width:70,height:60,marginTop:40,marginLeft:120}}         
            source={require('./images/AMZN.png')}
            />
          </View>
          <View>
            <Text style={{marginTop:20,alignSelf:'center',fontWeight:'bold'}}>3116 USD</Text>
            </View>
          </Card.Content>
          </View>
          </Card>
    

    <View style={{width:600,height:600,alignSelf:'center'}}>
    <View >
       
       <View style={{marginLeft:150,flexDirection:'row'}}>
       <Text >Stock Details Table &nbsp;&nbsp;&nbsp;</Text>
         <TextInput
           
           type='text'
           onChange={handleChange}
           placeholder='Search by company name'
         />
       </View>
    
     </View>
     {filteredstate.map(stock => {
        return (
          <View>
          <Stock
            key={stock.id}
            name={stock.name}
            price={stock.current_price}
            symbol={stock.symbol}
            marketcap={stock.total_volume}
            
          />
          
          </View>
        );
      })}
       

    
    
    </View>
        </View>
        
        </ScrollView>
  );
};

export default App;

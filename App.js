import React,{ useState,useEffect} from 'react';
import { View, Text,Button,Image,TouchableOpacity} from 'react-native';
import { Card, Searchbar} from 'react-native-paper';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';





function CreateData(cName,symbol,mCap,cPrice) {
  return { cName,symbol,mCap,cPrice};
}

const Rows = [
  CreateData('141 Capital Inc', '.ONCP', '$1445.4k', '$0.001'),
  CreateData('Cardlytics Inc', '.CDLX', '$1.8B', '$66 '),
  CreateData('Brightcove Inc', '.BCOV', '$394M','$10 '),
  CreateData('BigString Corp', '.BSGC', '$543K', '$0.003 '),
  CreateData('Akamai Technologies Inc', '.AKAM', '$145.4K', '$106 '),
];


const App =() => {
  const [Data,setData]=useState(null);
   useEffect(()=>{
      axios.get('https://https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SHOP.TRT&outputsize=full&apikey=HIP1BLJD9BKDCQX6')
      .then(response=>{
         setData(response.Data);
      })
   })
   const [searchQuery, setSearchQuery] = React.useState('');

  const OnChangeSearch = query => setSearchQuery(query);
  
  return (  
    <View style={{marginTop:40}}>         
      <View style={{flexDirection: 'column',marginBottom:15}}>         
        <View style={{flexDirection: 'row'}}>
          <Card style={{marginLeft:140,marginBottom:30 }}/>
          <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
          <Card.Content style={{width: 300,height:200,backgroundColor:'#edf2ee'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop:30,fontSize:20,fontWeight:'600'}}>GOOGL</Text>
            <Image
            style={{width:70,height:60,marginTop:30,marginLeft:120}}         
            source={require('./images/GOOGL.png')}
            />
          </View>
            <Text style={{marginTop:30,fontSize:30,fontWeight:'bold',marginLeft:60}}>1515 USD</Text>
          </Card.Content>
          </View>
    
    <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
      <Card.Content style={{width: 300,height:200,backgroundColor:'#edf2ee'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop:30,fontSize:20,fontWeight:'600'}}>GOOGL</Text>
          <Image
            style={{width:70,height:60,marginTop:30,marginLeft:120}}         
          source={require('./images/FB.png')}
           />
      </View>
        <Text style={{marginTop:30,fontSize:30,fontWeight:'bold',marginLeft:60}}>1515 USD</Text>
      </Card.Content>
    </View>
    <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
    <Card.Content style={{width: 300,height:200,backgroundColor:'#edf2ee'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop:30,fontSize:20,fontWeight:'600'}}>AMAZN</Text>
         <Image
           style={{width:70,height:60,marginTop:30,marginLeft:120}}
          source={require('./images/AMZN.svg')}
         />
        </View>
      <Text style={{marginTop:30,fontSize:30,fontWeight:'bold',marginLeft:60}}>3116 USD</Text>
    </Card.Content>
    </View>
    </View>
    </View>
    <View style={{width:900,height:600,alignSelf:'center'}}>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell style={{fontFamily:'sans-serif',fontSize:'26',fontWeight:'600'}}>Stock Details Table</TableCell>
              <TableCell colSpan={2} >
              <Searchbar style={{width:400,color:'purple',backgroundColor:'#edf2ee'}}
                 placeholder="Search By Company Name"
                 onChangeText={OnChangeSearch}
                 value={searchQuery}
              />
              </TableCell>
            </TableRow>
        </TableHead>
        <TableHead>
          <TableRow style={{backgroundColor:'#edf2ee'}}>
            <TableCell style={{fontFamily:'sans-serif',color:'purple'}} align="right">COMPANY NAME</TableCell>
            <TableCell style={{color:'purple',paddingLeft:100}} >SYMBOL</TableCell>
            <TableCell style={{color:'purple'}} >MARKET CAP</TableCell>
            <TableCell style={{color:'purple'}} align="right"></TableCell>
            <TableCell style={{color:'purple'}} align="right">CURRENT PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Rows.map((row) => (
            <TableRow key={row.cName}>
              <TableCell align="right" style={{fontFamily:'sans-serif',fontWeight:'600'}} component="th" scope="row">
                {row.cName}
              </TableCell>
              <TableCell  style={{color:'#2d4cd6',paddingLeft:100}}>
              <TouchableOpacity  style={{backgroundColor:'#edf2ee',width:60,height:20,borderRadius:10}} >
                <Text style={{color:'blue',alignSelf:'center',fontSize:16}}>{row.symbol}</Text>
              </TouchableOpacity>
              </TableCell>
              <TableCell  style={{color:'grey'}} >{row.mCap}</TableCell>
              <TableCell align="right"><TouchableOpacity style={{backgroundColor:'#8748e0',width:100,height:40,borderRadius:10}} >
                <Text style={{color:'white',alignSelf:'center',fontSize:20}}>View</Text>
              </TouchableOpacity>
              </TableCell>
              <TableCell align="right" ><View style={{fontWeight:'600'}}>{row.cPrice}</View> <View style={{color:'grey'}}>USD</View></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Rows.length}
        rowsPerPage='0'
        page='1'
      />
    
    </View>
        </View>
        
    
  );
};

export default App;

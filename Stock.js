import React from 'react';
import { View, Text,Button,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import { DataTable } from 'react-native-paper';

const Stock=({ name,
    price,
    symbol,
    marketcap,})=>{
        return(
            <DataTable style={{width:400,alignSelf:'center'}}>
    
            <DataTable.Header>
              <DataTable.Title >Company Name</DataTable.Title>
              <DataTable.Title >Symbol</DataTable.Title>
              <DataTable.Title >Market Cap</DataTable.Title>
              <DataTable.Title >Current Price</DataTable.Title>
              
             
            </DataTable.Header>
        
            <DataTable.Row>
              <DataTable.Cell >{name}</DataTable.Cell>
              
              <DataTable.Cell >
              <TouchableOpacity  style={{backgroundColor:'#edf2ee',width:60,height:20,borderRadius:10}} >
                        <Text style={{color:'blue',alignSelf:'center',fontSize:16}}>{symbol}</Text>
                      </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell >${marketcap}</DataTable.Cell>
              <DataTable.Cell >${price}</DataTable.Cell>
              
            </DataTable.Row>
        
           
        
            {/* <DataTable.Row>
              <DataTable.Cell>BigString Corp</DataTable.Cell>
              <DataTable.Cell >
              <TouchableOpacity  style={{backgroundColor:'#edf2ee',width:60,height:20,borderRadius:10}} >
                        <Text style={{color:'blue',alignSelf:'center',fontSize:16}}>.BSGC</Text>
                      </TouchableOpacity>
              </DataTable.Cell>
              
            </DataTable.Row> */}
            
            {/* <DataTable.Row >
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell  style={{alignSelf:'center'}} >
        
            <TouchableOpacity style={{backgroundColor:'#8748e0',width:100,height:40,borderRadius:10}} >
                        <Text style={{color:'white',alignSelf:'center',fontSize:20}}>View</Text>
                      </TouchableOpacity>
        
                      </DataTable.Cell>
            </DataTable.Row>
        
            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
            <TouchableOpacity style={{backgroundColor:'#8748e0',width:100,height:40,borderRadius:10,alignSelf:'center'}} >
                        <Text style={{color:'white',alignSelf:'center',fontSize:20}}>Refresh</Text>
                      </TouchableOpacity> */}
          </DataTable>
              
//             <View style={{backgroundColor:'blue',width:400}}>
  
//   <View >
//     <View className='stock'>
//       {/* <img src={image} alt='cryTextto' /> */}
//       <Text style={{color:'white'}}>{name}</Text>
//       <Text className='stock-symbol'>{symbol}</Text>
//     </View>
//     <View className='stock-data'>
//     <Text className='stock-marketcaText'>
//         {marketcap.toLocaleString()}
//       </Text>
//       <Text className='stock-Textrice'>${price}</Text>
//     </View>
//   </View>
// </View>
        )
    
}

export default Stock;
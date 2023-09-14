
use starknet::{ContractAddress,get_caller_address};
use core::debug::PrintTrait;

#[derive(Copy, Drop, starknet::Store,Serde)]
struct User{
    name:felt252,
    age:u8,
    address: ContractAddress
}
impl UserPrintImpl of  PrintTrait<User>{
    fn print( self:User){
        self.name.print();
        self.age.print();
        self.address.print(); 
    }
}

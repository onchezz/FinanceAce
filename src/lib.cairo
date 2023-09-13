
use debug::PrintTrait;
//
use core::traits::Destruct;

mod user;
use user::{User  };
 #[starknet::interface]
trait IFinancer<TContractState> {
    fn add_user(ref self: TContractState,name:felt252,age:u8);
    fn get_user(ref self:TContractState)->User;
    
}
#[starknet::contract]
mod Financer{
    use starknet::{ContractAddress,get_caller_address};
    use super::User;
     #[storage]
    struct Storage {
        person: User,
    }
   
#[external(v0)]
impl Financer of super::IFinancer<ContractState> {
    fn add_user(ref self: ContractState,name:felt252,age:u8){
        let address = get_caller_address();
        self.person.write(User{name,age,address});
    }
    fn get_user(ref self:ContractState)->User{
      let user =  self.person.read();
    
         self.person.read()
        
    }

}
}


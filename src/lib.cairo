
// use debug::PrintTrait;
// //
// // use core::traits::Destruct;

mod user;
use user::User ;
 use starknet::{ContractAddress,get_caller_address};
 #[starknet::interface]
trait IFinancer<TContractState> {
    fn add_user(ref self: TContractState,name:felt252,age:u8);
    fn get_user(ref self:TContractState)->User;
     fn get_users(ref self: TContractState, key: ContractAddress) -> User;
    
}
#[starknet::contract]
mod Financer{
    use starknet::{ContractAddress,get_caller_address};
    use super::User;
     #[storage]
    struct Storage {
        person: User,
        users: LegacyMap::<ContractAddress, User>,
    }
   
#[external(v0)]
impl Financer of super::IFinancer<ContractState> {
    fn add_user(ref self: ContractState,name:felt252,age:u8){
        let address = get_caller_address();
        let new_user = User{name,age,address};
        self.person.write(new_user);
        self.users.write(address, new_user);
    }
    fn get_user(ref self:ContractState)->User{
         self.person.read()
    }
    fn get_users(ref self: ContractState, key: ContractAddress) -> User{
        self.users.read(key)
    }

}
}


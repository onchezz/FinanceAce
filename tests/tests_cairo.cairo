use array::ArrayTrait;
use result::ResultTrait;
use option::OptionTrait;
use traits::TryInto;
use starknet::{ContractAddress,get_caller_address};
use starknet::Felt252TryIntoContractAddress;
use debug::PrintTrait;

use snforge_std::{declare, ContractClassTrait};
use financer::IFinancerDispatcher;
use financer::IFinancerDispatcherTrait;

use financer::user::User;
fn deploy_contract(name: felt252) -> ContractAddress {
    let contract = declare(name);
    contract.deploy(@ArrayTrait::new()).unwrap()
}


#[test]
fn read_user_from_storage() {
    let contract_address = deploy_contract('Financer');

    let dispatcher = IFinancerDispatcher { contract_address };
    dispatcher.add_user( name:'name', age:12,);
    let contract_user =  dispatcher.get_user();
    contract_user.address.print();
     
    assert(contract_user.name == 'name', 'failed to get user ');
    
    let address = get_caller_address();
    let contract_users =  dispatcher.get_users(address);
     assert(contract_user.name == 'name', 'failed to get users from map');
}
 
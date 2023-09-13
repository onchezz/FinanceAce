use array::ArrayTrait;
use result::ResultTrait;
use option::OptionTrait;
use traits::TryInto;
use starknet::{ContractAddress,get_caller_address};
use starknet::Felt252TryIntoContractAddress;
use debug::PrintTrait;
use snforge_std::{declare, PreparedContract, deploy};

use financer::IFinancerDispatcher;
use financer::IFinancerDispatcherTrait;
mod user;
use financer::user::User;

fn deploy_contract(name: felt252) -> ContractAddress {
    let class_hash = declare(name);
    let prepared = PreparedContract {
        class_hash, constructor_calldata: @ArrayTrait::new()
    };
    deploy(prepared).unwrap()
}

#[test]
fn read_user_from_storage() {
    let contract_address = deploy_contract('Financer');

    let dispatcher = IFinancerDispatcher { contract_address };
    dispatcher.add_user(User{ name:'name',
        age:12,
        address:get_caller_address() });
    let current_count =  dispatcher.get_user();
    // current_count.print();
    assert(current_count ==('onchez',23), 'failed adding count')
}

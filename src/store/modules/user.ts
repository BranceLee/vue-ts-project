import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators'

export interface IUserState{
    token: string,
    name:string,
}
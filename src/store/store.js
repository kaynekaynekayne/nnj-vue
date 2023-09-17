import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        products:[
            {name:"banana skin", price:20},
            {name:"shiny star", price:40},
            {name:"green shells", price:60},
            {name:"red shells", price:80},
        ]
    },
    getters:{
        saleProducts:state=>{
            //밑에서 this.$store 없어도 됨
            const saleProducts=state.products.map(pd=>{
                return {
                    name:`** ${pd.name} **`,
                    price:pd.price*0.5
                }
            })
            return saleProducts;
        }
    },
    mutations:{
        reducePrice:(state, payload)=>{
            state.products.forEach(pd=>{
                pd.price -= payload
            })
        }
    },
    actions:{
        reducePrice:(context,payload)=>{ //amount가 payload로 감
            setTimeout(function(){
                context.commit('reducePrice', payload)
            },2000)
        }
    }
})
<template>
 <v-card
    class="mx-auto "
    max-width="700"
    outlined
    
    >
    <v-card-title class="mx-3 "
    max-width="10000"
    >
        
    فرم ورود
    </v-card-title>
    <v-form>
        <v-text-field
            class="mx-3"
            filled
            label="ایمیل"
            prepend-icon="mdi-email"
            v-model="form.email"
            :rules="[
                (value) => required(value , 'ایمیل') ,
                checlEmail
            ]"
        >                

        </v-text-field>
        <v-text-field
            class="mx-3"
            filled
            :type="showPassword ? 'text' : 'password'"
            label="پسورد"
            :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:prepend="showingPassword"
            v-model="form.password"
            :rules="[
                (value) => required(value , 'رمز عبور ') ,
                 value => value.length > 8 || 'رمز عبور باید کمتر ۸ کاراکتر  باشد '
            ]"
        >
        </v-text-field>
        <v-card-actions>
            <v-btn
            color="error"
            :loading="loadding"
            :disabled="loadding"
            @click="sumbitForm"
            >
        <span>
            ارسال 
        </span>
            </v-btn>
        </v-card-actions>
    </v-form>
 </v-card> 
</template>

<script>
const checlEmail = (value , field) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'این فیلد' +field + 'الزامی هست' 
const required = (value) => !! value || ' این فیلد الزامی هست ' 
export default {
   name : "AuthTiction" , 
    data() {
        return {
            showPassword : false , 

            form : {
                email : '',
                password : ''
            },
            loadding : false ,
            required ,
            checlEmail
        }
        
    },
  
    methods : {
        showingPassword(){
            this.showPassword = !this.showPassword
        },
        sumbitForm ()
            {
                this.loadding = true 

                localStorage.setItem('user' , JSON.stringify(this.form))

                setTimeout(() => {
                    this.loadding = false
                } , 2000 )
            },
         
    }
}
</script>


<style>
    span{
        text-align: center;
    }
</style>